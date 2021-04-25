class RoundRect {
	constructor(ctx, sx, sy, ex, ey, radius, fillStyle) {
		this.ctx = ctx;
		this.sx = sx;
		this.sy = sy;
		this.ex = ex;
		this.ey = ey;
		this.radius = radius;
		this.fillStyle = fillStyle;
	}

	draw() {
		let width = abs(this.sx, this.ex);
		let height = abs(this.sy, this.ey);
		if(width < 2 * this.radius) this.radius = width / 2;
		if(height < 2 * this.radius) this.radius = height / 2;

		this.ctx.beginPath();
		this.ctx.moveTo(this.sx + this.radius, this.sy);
		this.ctx.arcTo(this.ex, this.sy, this.ex, this.ey, this.radius);
		this.ctx.arcTo(this.ex, this.ey, this.sx, this.ey, this.radius);
		this.ctx.arcTo(this.sx, this.ey, this.sx, this.sy, this.radius);
		this.ctx.arcTo(this.sx, this.sy, this.ex, this.sy, this.radius);
		this.ctx.closePath();

		this.ctx.fillStyle = this.fillStyle;
		this.ctx.fill();
	}

	update() {

	}
}