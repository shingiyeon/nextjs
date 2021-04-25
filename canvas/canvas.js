const body = document.body;

class Canvas {
	constructor(id, width, height) {
		this.canvas = document.createElement("canvas");
		this.canvas.id = id;
		this.canvas.width = width;
		this.canvas.height = height;
		this.canvas.style.position = "flex";

		document.body.appendChild(this.canvas);
		this.ctx = this.canvas.getContext("2d");
		this.bgGradient = null;

		this.objects = [];

		// this.lines = [];
		// this.images = [];
		// this.texts = [];
		// this.rectangles = [];
		// this.loadingBars = [];
	}

	setBorder(border) {
		this.canvas.style.border = border;
	}

	setBorderRadius(borderRadius) {
		this.canvas.style.borderRadius = borderRadius;
	}

	setBackgroundColor(backgroundColor) {
		this.canvas.style.backgroundColor = backgroundColor;
	}

	setBgLinearGradient(sx, sy, ex, ey, bsx, bsy, bex, bey, color1, color2, color3) {
		this.bgGradient = new bgLinearGradient(this.ctx, sx, sy, ex, ey, bsx, bsy, bex, bey, color1, color2, color3);
	}

	setBgParticleGradient(minR, maxR) {
		this.bgGradient = new bgParticleGradient(this.ctx, this.canvas.width, this.canvas.height, minR, maxR);
	}

	putParticle(color) {
		if( this.bgGradient.constructor !== bgParticleGradient) {
			console.error("The background type is not bgParticleGradient");
		} else {
			this.bgGradient.createParticle(color);
		}
	}

	putParticles(num, colors) {
		if( this.bgGradient.constructor !== bgParticleGradient) {
			console.error("The background type is not bgParticleGradient");
		} else {
			this.bgGradient.createParticles(num, colors);
		}
	}

	putImage(x, y, width, height, imageSrc) {
		this.objects.push(new ImageDrawing(this.ctx, x, y, width, height, imageSrc));
	}

	putLine(sx, sy, ex, ey, strokeStyle = "#ffffff", lineWidth = 1) {
		this.objects.push(new Line(this.ctx, sx, sy, ex, ey, strokeStyle, lineWidth));
	}

	putText(x, y, text = "TEMP", font = "bold 15px verdana, sans-serif",
		fontStyle = "#ffffff", textBaseline = "middle"
	) {
		this.objects.push(new Text(this.ctx, x, y, text, font, fontStyle, textBaseline));
	}

	putLoadingBar(sx, sy, mx, my, ex, ey, color1 = "#000000", color2 = "#ffffff", bgColor = "#ffffff") {
		this.objects.push(new LoadingBar(this.ctx, sx, sy, mx, my, ex, ey, color1, color2, bgColor));
	}

	putRectangle(sx, sy, ex, ey, color = "#000000") {
		this.objects.push(new Rectangle(this.ctx, sx, sy, ex, ey, color));
	}

	putRoundRect(sx, sy, ex, ey, radius, color = "#000000") {
		this.objects.push(new RoundRect(this.ctx, sx, sy, ex, ey, radius, color));
	}

	render() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		if (this.bgGradient !== null) {
			this.bgGradient.draw();
			this.bgGradient.update();
		}

		this.objects.forEach((object) => {
			object.draw();
			object.update();
		});

		// this.lines.forEach((line) => {
		// 	line.draw();
		// });
		// this.images.forEach((image) => {
		// 	image.draw();
		// });
		// this.texts.forEach((text) => {
		// 	text.draw();
		// });
		// this.rectangles.forEach((rect) => {
		// 	rect.draw();
		// })
		// this.loadingBars.forEach((loadingBar) => {
		// 	loadingBar.draw();
		// 	loadingBar.update();
		// })

		requestAnimationFrame(() => {this.render();});

	}

};