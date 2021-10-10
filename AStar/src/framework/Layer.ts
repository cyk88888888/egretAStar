namespace cyk{
    export class Layer extends Comp{

        public constructor() {
            super();
            let self = this;
            self.width = Global.stage.stageWidth;
            self.height = Global.stage.stageHeight;
        }

        public static show(parent: egret.DisplayObjectContainer){
            let self = this;
            let newSelf = new self();
            parent.addChild(newSelf);
            return newSelf;
        }

        public close(){
            let self = this;
            if(self.parent) self.parent.removeChild(self);
        }
    }
}
