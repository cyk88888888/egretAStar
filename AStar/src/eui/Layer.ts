namespace mo{
    export class Layer extends Comp{

        public constructor() {
            super();
            let self = this;
            self.width = Global.stage.stageWidth;
            self.height = Global.stage.stageHeight;
        }
    }
}
