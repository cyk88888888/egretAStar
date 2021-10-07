class MessageItem extends egret.Sprite{

    private _textField:egret.TextField;
    public constructor(){
        super();
        let self = this;
        self.touchEnabled = self.touchChildren = false;
        self._textField = new egret.TextField();
        self.addChild(self._textField);
    }

    public setData(content:string, color:number, size = 30, font:string = "宋体"){
        let self = this;
        self._textField.textColor = color;
        self._textField.size = size;
        self._textField.fontFamily = font;
        self._textField.strokeColor = 0;
        self._textField.stroke = 1;
        self._textField.text = content;
    }

    public get width():number {
        let self = this;
        return self._textField.textWidth + 20;
    }
}