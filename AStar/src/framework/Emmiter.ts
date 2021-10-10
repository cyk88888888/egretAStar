namespace cyk {
    export class Emmiter extends egret.EventDispatcher{
        public constructor(target:egret.IEventDispatcher = null){
            super(target)
        }

        public on(event: string, listener: Function, thisObject:any){
            cyk.emmiter.addEventListener(event,listener,thisObject);
        }

        public un(event: string, listener: Function, thisObject:any){
            cyk.emmiter.removeEventListener(event,listener,thisObject);
        }

        public emit(event: string, data?:any){
            cyk.emmiter.dispatchEventWith(event,false, data);
        }
    }

    export let emmiter = new Emmiter();

}