class bgParticleGradient {
	constructor(ctx, width, height, minR = 20, maxR = 60) {
		this.ctx = ctx;
		this.width = width;
		this.height = height;
		this.totalParticles = 0;
		this.particles = [];

		this.minR = minR;
		this.maxR = maxR;
	}

	createParticle(color) {
		const particle = new Particle(
			this.ctx,
			Math.random() * this.width,
			Math.random() * this.height,
			Math.random() * (this.maxR - this.minR) + this.minR,
			color);
		
		this.particles.push(particle);
	}

	createParticles(num, colors) {
		let idx = 0;
		console.log(colors);
		for(let i = 0; i < num; i++) {
			console.log(colors[idx]);
			this.createParticle(colors[idx]);		
			idx = (idx + num) % colors.length;
		}
		console.log(this.particles);
	}
	
	update() {
		this.particles.forEach( (particle) => {
			particle.update(this.width, this.height);
		});
	}

	draw() {
		this.particles.forEach( (particle) => {
			particle.draw();
		});
	}
};