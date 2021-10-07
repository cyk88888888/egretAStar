class Global {
    public static stage: egret.Stage;
    public static skinNames:{[skinNane:string]:string};
    public static parseThm(){
        Global.skinNames = {};
        let thm = RES.getRes("resource/default.thm.json");
        let map = JSON.parse(thm);
        let exmls:string[] = map["exmls"];
        for(let i = 0; i < exmls.length; i++){
            let url: string = exmls[i];
            let split0 = url.split(".exml")[0].split("/");
            let skinName = split0[split0.length - 1];
            Global.skinNames[skinName] = url;
        }
    }
}