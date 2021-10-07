class Message {
    public static show(content: string, color = 0xec1010) {
        let self = this;
        if (content == "" || content == null) return;
        let messageItem: MessageItem = new MessageItem();
        messageItem.setData(content, color);
        messageItem.x = (Global.stage.stageWidth - messageItem.width) / 2;
        messageItem.y = (Global.stage.stageHeight - messageItem.height) / 2;
        egret.Tween.get(messageItem).to({y: messageItem.y - 70}, 300).wait(150).to({alpha: 0}, 300).call(function () {
            egret.Tween.removeTweens(messageItem);
            messageItem.parent.removeChild(messageItem);
        });
        Global.stage.addChild(messageItem);
    }
}