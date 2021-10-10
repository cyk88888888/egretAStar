namespace cyk {
    export class Comp extends eui.Component {
        protected _skinName: string;
        private _objTapMap: { [objName: string]: Function };//已添加的显示对象点击事件的记录
        private _emmitMap: {[event: string]: Function};//已注册的监听事件列表
        public constructor() {
            super();
            let self = this;
            self.ctor_b();
            if(self["ctor"]) self["ctor"]();
            self.ctor_a();
            if (!self._skinName) {
                let className = self.__className;
                let defaultSkinName = Global.skinNames[className];
                if (!defaultSkinName) {
                    console.error("找不到类" + className + "的皮肤");
                    return;
                }
                self._skinName = defaultSkinName;
            }
            self.addEventListener(eui.UIEvent.COMPLETE, self.initUI, self);
            self.skinName = self._skinName;
            self.addEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
            self.addEventListener(egret.Event.REMOVED_FROM_STAGE, self.onRemoveFormStage, self);
        }

        public get __className(): string {
            let self = this;
            let spliNames = self["__class__"].split(".");
            return spliNames[spliNames.length - 1];
        }

        protected ctor_b() {}

        protected ctor_a() {}

        protected onEnter_b() {}

        protected onEnter_a() {}

        protected onExit_b() {}

        protected onExit_a() {}

        private initUI() {
            let self = this;
            self.onEnter_b();
            if(self["onEnter"]) self["onEnter"]();
            self.onEnter_a();
            self.addBtnCLickListener();
        }

        /**添加按钮点击事件监听**/
        private addBtnCLickListener() {
            let self = this;
            self._objTapMap = {};
            for (let objName in self) {
                let obj = self[objName];
                if (obj instanceof egret.DisplayObject) {
                    obj.name = objName;
                    if (self["_tap_" + objName]) {
                        let tapFunc = self["_tap_" + objName];
                        self._objTapMap[objName] = tapFunc;
                        obj.addEventListener(egret.TouchEvent.TOUCH_TAP, tapFunc, self);
                    }
                }
            }
        }

        protected onEmitter(event: string, listener: Function){
            let self = this;
            cyk.emmiter.on(event, listener, self);
            if(!self._emmitMap) self._emmitMap = {};
            self._emmitMap[event] = listener;
        }

        protected unEmitter(event: string, listener: Function){
            let self = this;
            cyk.emmiter.un(event, listener, self);
        }

        private dispose(){
            let self = this;
            if(self._emmitMap){
                for(let event in self._emmitMap){
                    self.unEmitter(event, self._emmitMap[event]);
                }
                self._emmitMap = null;
            }

            self.removeEventListener(egret.Event.ADDED_TO_STAGE, self.onRemoveFormStage, self);
            self.removeEventListener(egret.Event.ADDED_TO_STAGE, self.onAddToStage, self);
            if (self._objTapMap) {
                for (let objName in self._objTapMap) {
                    let obj = self[objName];
                    if (obj instanceof egret.DisplayObject) obj.removeEventListener(egret.TouchEvent.TOUCH_TAP, self._objTapMap[objName], self);
                }
                self._objTapMap = null;
            }
        }


        private onAddToStage() {
            console.log("我被添加到舞台了");
        }

        private onRemoveFormStage() {
            let self = this;
            console.log("我从到舞台移除了");
            self.dispose();
            if(self["onExit"]) self["onExit"]();
        }
    }
}
