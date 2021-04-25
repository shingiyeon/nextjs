class ImageDrawing {
    constructor(ctx, x, y, width, height, imageSrc) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.imageSrc = imageSrc;

        this.img = new Image();
        this.img.src = this.imageSrc;
        
        this.img.onload = () => {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    update() {
        
    }
}