class Text {
    constructor(ctx, x, y, text = "TEMP",
     font = "bold 15px verdana, sans-serif",
     fontStyle = "#ffffff",
     textBaseline = "middle",
     lineWidth = "0px",
     strokeStyle = "black"
     ) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.text = text;
        this.font = font;
        this.fontStyle = fontStyle;
        this.textBaseline = textBaseline;
        this.lineWidth = lineWidth;
        this.strokeStyle = strokeStyle;
    }

    draw() {
        this.ctx.font = this.font;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.strokeText(this.text, this.x, this.y);
        this.ctx.fillStyle = this.fontStyle;
        this.ctx.textBaseline = this.textBaseline;
        this.ctx.fillText(this.text, this.x, this.y);
    }

    update() {
        
    }
};