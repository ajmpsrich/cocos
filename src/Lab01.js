var Lab01Layer = cc.Layer.extend({
ctor:function () {
    this._super();
    var size = cc.winSize;

    var colorlayer = new cc.LayerColor(cc.color(0,255,255),320,54);
    colorlayer.x=size.width/2;
    colorlayer.y=size.height/2;
    colorlayer.ignoreAnchorPointForPosition(false);
    this.addChild(colorlayer);



    var mylabel = new cc.LabelTTF("My Game","Arial",48,cc.size(320,54),cc.TEXT_ALIGNMENT_CENTER);
    mylabel.x = size.width/2;
    mylabel.y = size.height/2;

    this.addChild(mylabel);



    return true;
},
});/**
 * Created by DONG on 2017/6/7.
 */

var Lab01Scene = cc.Scene.extend({
        ctor:function () {
          this._super();
          cc.log("A");
          cc.warn("A");
          cc.error("A");
        },


        onEnter:function () {
            cc.log("B");
            var layer = new Lab01Layer();
            this.addChild(layer);

        }
    });