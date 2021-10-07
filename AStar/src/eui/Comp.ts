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
                console.error("请设置皮肤_skinName");
                return;
            }
            this.addEventListener(eui.UIEvent.COMPLETE, self.initUI, self);
            self.skinName = "resource/skins/" + self._skinName;
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

    }
}
