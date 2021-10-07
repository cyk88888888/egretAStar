namespace mo {
    export class Comp extends eui.Component {
        protected _skinName: string;

        public constructor() {
            super();
            let self = this;
            self.ctor_b();
            self.ctor();
            self.ctor_a();
            if(!self._skinName){
                let className = self._className;
                let defaultSkinName = Global.skinNames[className];
                if(!defaultSkinName){
                    console.error("找不到类" + className + "的皮肤");
                    return;
                }
                self._skinName = defaultSkinName;
            }
            self.addEventListener(eui.UIEvent.COMPLETE, self.initUI, self);
            self.skinName = self._skinName;
            self.addEventListener(egret.Event.ADDED_TO_STAGE,self.onAddToStage, self);
            self.addEventListener(egret.Event.REMOVED_FROM_STAGE,self.onRemoveFormStage, self);
        }
        protected ctor_b(){}
        protected ctor_a(){}
        protected ctor() {}

        protected onEnter_b(){}
        protected onEnter() {}
        protected onEnter_a(){}

        private initUI(){
            let self = this;
            self.onEnter_b();
            self.onEnter();
            self.onEnter_a();
            self.addBtnCLickListener();
        }

        /**添加按钮点击事件监听**/
        private addBtnCLickListener(){
            let self = this;
            for(let key in self){
                let obj = self[key];
                if(key.indexOf("btn_") > -1 && obj instanceof egret.DisplayObject){
                    if(self["_tap_" + key]){
                        obj.addEventListener(egret.TouchEvent.TOUCH_TAP, self["_tap_" + key], self);
                    }
                }
            }
        }

        public get _className():string{
            let self = this;
            return self["constructor"]["name"];
        }

        private onAddToStage(){
            console.log("我被添加到舞台了");
        }

        private onRemoveFormStage(){
            let self = this;
            self.removeEventListener(egret.Event.ADDED_TO_STAGE,self.onRemoveFormStage, self);
            self.removeEventListener(egret.Event.ADDED_TO_STAGE,self.onAddToStage, self);
            console.log("我从到舞台移除了");
        }
    }
}
