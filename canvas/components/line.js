class Line {
    constructor(ctx, sx, sy, ex, ey,
        strokeStyle, lineWidth) {
            this.ctx = ctx;
            this.sx = sx;
            this.sy = sy;
            this.ex = ex;
            this.ey = ey;
            this.strokeStyle = strokeStyle;
            this.lineWidth = lineWidth;
        }
    
    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.sx, this.sy);
        this.ctx.lineTo(this.ex, this.ey);
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.stroke();
    }

    update() {
        
    }
};