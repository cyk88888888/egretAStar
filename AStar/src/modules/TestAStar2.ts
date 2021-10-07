/**
 * 测试AStar（模拟上路、陡坡中行走（代价因子会比平路的大））
 * @author CYK
 *
 */
namespace G {
    export class TestAStar2 extends egret.Sprite {
        private _cellSize = 40;
        private _grid: Grid;

        public constructor() {
            super();
            let self = this;
            self.touchEnabled = true;
            self._grid = new Grid(Math.ceil(Global.stage.stageWidth / self._cellSize), Math.ceil(Global.stage.stageHeight / self._cellSize));
            self._grid.setStartNode(1, 1);
            self._grid.setEndNode(self._grid.numCols - 1, self._grid.numRows - 1);
            for (let i = 0; i < self._grid.numCols; i++) {
                for (let j = 0; j < self._grid.numRows; j++) {
                    //为每个节点设置不同的“代价权重因子”
                    let mult = Math.sin(i * .50) + Math.cos(j * .2 + i * .05);
                    self._grid.getNode(i, j).costMultiplier = Math.abs(mult) + 1;
                }
            }
            self.drawGrid();
            self.findPath();
            self.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onGridClick, self);
        }

        //画网格
        public drawGrid() {
            let self = this;
            let _cellSize = self._cellSize;
            self.graphics.clear();
            for (let i = 0; i < self._grid.numCols; i++) {
                for (let j = 0; j < self._grid.numRows; j++) {
                    let node: Nodes = self._grid.getNode(i, j);
                    self.graphics.lineStyle(0.5);
                    self.graphics.beginFill(self.getColor(node));
                    self.graphics.drawRect(i * _cellSize, j * _cellSize, _cellSize, _cellSize);
                }
            }
        }

        //取得单元格的颜色(与权重因子关联，costMultiplier越小，颜色越深)
        private getColor(node: Nodes) {
            let self = this;
            if (!node.walkable) return 0;
            if (node == self._grid.startNode) return 0x666666;
            if (node == self._grid.endNode) return 0x666666;
            let shade = 300 - 70 * node.costMultiplier;
            return shade << 16 | shade << 8 | shade;
        }

        //单元格点击时，切换节点为普通节点或障碍物节点
        private onGridClick(event: egret.TouchEvent) {
            let self = this;
            let xPos = Math.floor(event.localX / self._cellSize);
            let yPos = Math.floor(event.localY / self._cellSize);

            self._grid.setWalkable(xPos, yPos, !self._grid.getNode(xPos, yPos).walkable);
            self.drawGrid();
            self.findPath();
        }

        //找路
        private findPath() {
            let self = this;
            let astar: AStar = new AStar();
            if (astar.findPath(self._grid)) {
                self.showPath(astar);
            }
        }

        private showVisited(astar: AStar) {
            let self = this;
            let visited = astar.visited;
            let _cellSize = self._cellSize;
            for (let i = 0; i < visited.length; i++) {
                self.graphics.beginFill(0xcccccc);
                self.graphics.drawRect(visited[i].x * _cellSize, visited[i].y * _cellSize, _cellSize, _cellSize);
                self.graphics.endFill();
            }
        }

        private showPath(astar: AStar) {
            let self = this;
            let path = astar.path;
            for (let i = 0; i < path.length; i++) {
                self.graphics.lineStyle(0);
                self.graphics.beginFill(0);
                self.graphics.drawCircle(path[i].x * self._cellSize + self._cellSize / 2,
                    path[i].y * self._cellSize + self._cellSize / 2,
                    self._cellSize / 3);
            }
        }
    }
}