class Rectangle {
	constructor(ctx, sx, sy, ex, ey,
			fillStyle) {
					this.ctx = ctx;
					this.sx = sx;
					this.sy = sy;
					this.ex = ex;
					this.ey = ey;
					this.fillStyle = fillStyle;
			}
	
	draw() {
			this.ctx.beginPath();
			this.ctx.fillStyle = this.fillStyle;
			this.ctx.fillRect(sx, sy, ex, ey);
	}

	update() {
		
	}

}