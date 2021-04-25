class Particle {
	constructor(ctx, x, y, r, color) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.r = r;
		this.color = color;

		this.vx = Math.random();
		this.vy = Math.random();

		this.dr = Math.random();

	}

	update(width, height) {
		this.dr += 0.1;
		this.r += Math.sin(this.dr);

		this.x += this.vx;
		this.y += this.vy;
		if(this.x < 0) {
			this.vx = -this.vx;
			this.x = 0;
		}
		else if(this.x > width) {
			this.vx = -this.vx;
			this.x = width;
		}

		if(this.y < 0) {
			this.vy = -this.vy;
			this.y = 0;
		}
		else if(this.y > height) {
			this.vy = -this.vy;
			this.y = height;
		}
	}

	draw() {
		this.ctx.beginPath();
		const g =  this.ctx.createRadialGradient(
			this.x,
			this.y,
			this.r * 0.01,
			this.x,
			this.y,
			this.r
			);
		
		g.addColorStop(0, hexToRgbA(this.color, 1));
		g.addColorStop(1, hexToRgbA(this.color, 0));
		
		this.ctx.fillStyle = g;
		this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
		this.ctx.fill();
	}

};