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
            this.addEventListener(eui.UIEvent.COMPLETE, self.initUI, self);
            self.skinName = self._skinName;
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
        }

        public get _className():string{
            let self = this;
            return self["constructor"]["name"];
        }
    }
}
