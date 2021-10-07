/**
 * 测试AStar（模拟上路、陡坡中行走（代价因子会比平路的大））
 * @author CYK
 *
 */
namespace G {
    export class TestAStar2 extends mo.Layer {
        public grp_container: eui.Group;
        public btn_reset: eui.Button;
        public lbl_cost: eui.Label;

        private _cellSize: number;
        private _grid: Grid;
        private _pathShape: egret.Shape;

        protected ctor() {
            let self = this;
            self._cellSize = 40;
        }

        protected onEnter() {
            let self = this;
            self._grid = new Grid(Math.ceil(self.grp_container.width / self._cellSize), Math.floor((Global.stage.stageHeight - 58) / self._cellSize));
            self._grid.setStartNode(1, 1);
            self._grid.setEndNode(self._grid.numCols - 1, self._grid.numRows - 1);
            self._pathShape = new egret.Shape();
            self.grp_container.addChild(self._pathShape);
            self.onReset();
            self.grp_container.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onGridClick, self);
            self.btn_reset.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onReset, self);
        }

        private onReset(){
            let self = this;
            self._pathShape.graphics.clear();
            for (let i = 0; i < self._grid.numCols; i++) {
                for (let j = 0; j < self._grid.numRows; j++) {
                    let node = self._grid.getNode(i, j);
                    //为每个节点设置不同的“代价权重因子”
                    let mult = Math.sin(i * .50) + Math.cos(j * .2 + i * .05);
                    node.costMultiplier = Math.abs(mult) + 1;
                    node.walkable = true;
                }
            }
            self.drawGrid();
            self.findPath();
        }

        //画网格
        public drawGrid() {
            let self = this;
            let _cellSize = self._cellSize;
            self.lbl_cost.text = "本次寻路总耗时";
            self._pathShape.graphics.clear();
            for (let i = 0; i < self._grid.numCols; i++) {
                for (let j = 0; j < self._grid.numRows; j++) {
                    let node: Nodes = self._grid.getNode(i, j);
                    self._pathShape.graphics.lineStyle(0.5);
                    self._pathShape.graphics.beginFill(self.getColor(node));
                    self._pathShape.graphics.drawRect(i * _cellSize, j * _cellSize, _cellSize, _cellSize);
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
                self.lbl_cost.text = "本次寻路总耗时: " + astar.costTotTime + "秒";
                self.showPath(astar);
            }
        }

        private showPath(astar: AStar) {
            let self = this;
            let path = astar.path;
            for (let i = 0; i < path.length; i++) {
                self._pathShape.graphics.lineStyle(0);
                self._pathShape.graphics.beginFill(0);
                self._pathShape.graphics.drawCircle(path[i].x * self._cellSize + self._cellSize / 2,
                    path[i].y * self._cellSize + self._cellSize / 2,
                    self._cellSize / 3);
            }
        }
    }
}