class Global {
    public static stage: egret.Stage;
    public static skinNames: { [skinNane: string]: string };

    public static parseThm(data: any) {
        if (!data) console.error("default.thm.json文件加载失败")
        Global.skinNames = {};
        let exmls: string[] = [];
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
            let map = JSON.parse(data);
            exmls = map["exmls"];
        } else {
            let map = data.paths;
            for(let url in map){
                exmls.push(url);
            }
        }
        for (let i = 0; i < exmls.length; i++) {
            let url: string = exmls[i];
            let split0 = url.split(".exml")[0].split("/");
            let skinName = split0[split0.length - 1];
            Global.skinNames[skinName] = url;
        }
        console.log("runtimeType：" + egret.Capabilities.runtimeType);
        console.log(Global.skinNames);
    }
}