var text = new createjs.Text("FPS", "20px Arial", "#ff0000");
stage.addChild(text);
createjs.Ticker.addEventListener("tick", function() {
    text.text = Math.round(createjs.Ticker.getMeasuredFPS());
    stage.update();
});