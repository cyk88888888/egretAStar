/**
 * 主入口
 */
class Main extends eui.UILayer {

    protected createChildren(): void {
        super.createChildren();
        //inject the custom material parser
        //注入自定义的素材解析器
        egret.registerImplementation("eui.IAssetAdapter", new AssetAdapter());
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();
        this.createGameScene();
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            loadingView.x = (this.stage.stageWidth - loadingView.width)/2;
            loadingView.y = (this.stage.stageHeight - loadingView.height)/2;
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                eui.getTheme("resource/default.thm.json", function (data) {
                    Global.parseThm(data);
                    resolve();
                });
            }, this);
        })
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene() {
        let self = this;
        Global.stage = self.stage;
        self.parent.removeChild(self);
        let testAStar = new G.TestAStar();
        Global.stage .addChild(testAStar);
        // let testAStar2 = new G.TestAStar2();
        // Global.stage.addChild(testAStar2);
    }
}
