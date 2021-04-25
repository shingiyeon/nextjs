class LoadingBar {
    constructor(ctx, sx, sy, mx, my, ex, ey,
        color1, color2, bgColor) {
            this.ctx = ctx;
            this.sx = sx;
            this.sy = sy;
            this.mx = mx;
            this.my = my;
            this.ex = ex;
            this.ey = ey;
            
            this.color1 = color1;
            this.color2 = color2;
            this.bgColor = bgColor;

            this.loading = new bgLinearGradient(this.ctx, sx, sy, mx, my, this.color1, this.color2, this.color1);
        }

    draw() {
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fillRect(this.sx, this.sy, this.ex-this.sx, this.ey-this.sy);
        this.loading.draw();
    }

    update() {
        this.loading.update();
    }
    
    
}