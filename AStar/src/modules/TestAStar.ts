/**
 * 测试AStar（平路情况下（代价因子一样大））
 * @author CYK
 *
 */
namespace G {
    export class TestAStar extends mo.Layer {
        public grp_container: eui.Group;
        public btn_reset: eui.Button;
        public btn_translate: eui.Button;
        public lbl_cost: eui.Label;

        private _cellSize: number;//每一个格子的大小
        private _speed: number;//人物移动速度、
        private _grid: Grid;
        private _player: egret.Shape;
        private _index: number;
        private _path: Nodes[];
        private _pathShape: egret.Shape;//路过的格子轨迹，包含绘制终点

        protected ctor() {
            let self = this;
            self._cellSize = 40;
            self._speed = 1;
        }

        protected onEnter() {
            let self = this;
            self.makeGrid();
            self.makePlayer();
        }

        private onReset() {
            let self = this;
            self.grp_container.removeChildren();
            self.makeGrid();
            self.makePlayer();
        }

        /** 生成一个player角色(简单起见，就是一个圈) */
        private makePlayer() {
            let self = this;
            let radius = 15;//半径
            self._player = new egret.Shape();
            self._player.graphics.beginFill(0xff0000);
            self._player.graphics.drawCircle(0, 0, radius);
            self._player.graphics.endFill();
            let ranDomStaryPos = self._grid.getRanDomStartPos();
            self._player.x = ranDomStaryPos.x * self._cellSize + self._cellSize / 2;
            self._player.y = ranDomStaryPos.y * self._cellSize + self._cellSize / 2;
            self.grp_container.addChild(self._player);
        }

        /** 生成网格，并随机放置一些障碍 */
        private makeGrid() {
            let self = this;
            self.lbl_cost.text = "本次寻路总耗时";
            self._grid = new Grid(Math.ceil(self.grp_container.width / self._cellSize), Math.floor((Global.stage.stageHeight - 58) / self._cellSize));

            self._pathShape = new egret.Shape();//路过的格子轨迹
            self.grp_container.addChild(self._pathShape);

            //障碍物
            let blockShape = new egret.Shape();
            let blockGraphics = blockShape.graphics;
            self.grp_container.addChild(blockShape);
            let bolckCount = Math.floor((self._grid.numCols * self._grid.numRows) / 4);
            for (let i = 0; i < bolckCount; i++) {
                let _x = Math.floor(Math.random() * self._grid.numCols);
                let _y = Math.floor(Math.random() * self._grid.numRows);
                self._grid.setWalkable(_x, _y, false);
                let node = self._grid.getNode(_x, _y);
                blockGraphics.lineStyle(0);
                blockGraphics.beginFill(self.getColor(node));
                blockGraphics.drawRect(_x * self._cellSize, _y * self._cellSize, self._cellSize, self._cellSize);
            }

            let line = new egret.Shape();
            let lineGraphics = line.graphics;
            self.grp_container.addChild(line);
            for (let i = 0; i < self._grid.numCols + 1; i++)//画竖线
            {
                lineGraphics.lineStyle(1);
                lineGraphics.moveTo(i * self._cellSize, 0);
                lineGraphics.lineTo(i * self._cellSize, self._grid.numRows * self._cellSize);
            }

            for (let i = 0; i < self._grid.numRows + 1; i++)//画横线
            {
                lineGraphics.lineStyle(1);
                lineGraphics.moveTo(0, i * self._cellSize);
                lineGraphics.lineTo(self._grid.numCols * self._cellSize, i * self._cellSize);
            }
        }

        /** 返回节点颜色 */
        private getColor(node: Nodes) {
            let self = this;
            if (!node.walkable)
                return 0;
            if (node == self._grid.startNode)
                return 0xcccccc;
            if (node == self._grid.endNode)
                return 0xff0000;
            return 0xffffff;
        }

        /** 寻路 */
        private findPath() {
            let self = this;
            let astar = new G.AStar();
            if (astar.findPath(self._grid)) {
                self.lbl_cost.text = "本次寻路总耗时: " + astar.costTotTime + "秒";
                self._path = astar.path;
                self._index = 0;
                self.addEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
            }
        }

        /**每帧的动画处理*/
        private onEnterFrame(event: egret.Event) {
            let self = this;
            let _cellSize = self._cellSize;
            let targetX = self._path[self._index].x * _cellSize + _cellSize / 2;
            let targetY = self._path[self._index].y * _cellSize + _cellSize / 2;

            //把经过的点，涂上黄色
            let passedNode = self._path[self._index];
            self._pathShape.graphics.lineStyle(0);
            self._pathShape.graphics.beginFill(0xffff00);
            self._pathShape.graphics.drawRect(passedNode.x * _cellSize, passedNode.y * _cellSize, _cellSize, _cellSize);

            let dx = targetX - self._player.x;
            let dy = targetY - self._player.y;
            let dist: Number = Math.sqrt(dx * dx + dy * dy);
            if (dist < 1) {
                self._index++;//索引加1，即取一个路径节点
                if (self._index >= self._path.length)//达到最后一个节点时，移除ENTER_FRAME监听
                {
                    self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                }
            } else {
                self._player.x += dx * self._speed;
                self._player.y += dy * self._speed;
            }
        }

        /** 鼠标点击时随机设置终点，并以player当前位置做为起点 */
        private _tap_grp_container(event: egret.TouchEvent) {
            let self = this;
            self._pathShape.graphics.clear();
            let xPos = Math.floor(event.stageX / self._cellSize);
            let yPos = Math.floor(event.stageY / self._cellSize);
            let node = self._grid.getNode(xPos, yPos);
            if(!node) return;
            self._grid.setEndNode(xPos, yPos);
            let endNode: Nodes = self._grid.endNode;
            if (endNode.walkable) {
                self._pathShape.graphics.lineStyle(0);
                self._pathShape.graphics.beginFill(self.getColor(endNode));
                self._pathShape.graphics.drawRect(xPos * self._cellSize, yPos * self._cellSize, self._cellSize, self._cellSize);
            }
            xPos = Math.floor(self._player.x / self._cellSize);
            yPos = Math.floor(self._player.y / self._cellSize);
            self._grid.setStartNode(xPos, yPos);
            self.findPath();
        }

        private _tap_btn_reset() {
            let self = this;
            self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
            self.onReset();
        }

        private _tap_btn_translate() {
            let self = this;
            self.parent.removeChild(self);
            let testAStar2 = new G.TestAStar2();
            Global.stage.addChild(testAStar2);
        }
    }
}
