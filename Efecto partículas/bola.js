class Bola {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radio = 10;
        this.dirX = (Math.random() * 2) - 1; // Dirección inicial aleatoria en x
        this.dirY = (Math.random() * 2) - 1; // Dirección inicial aleatoria en y
        this.velocidad = 5;
    }

    dibujar() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    mover() {
        // Actualiza la posición
        this.x += this.dirX * this.velocidad;
        this.y += this.dirY * this.velocidad;

        // Verifica los límites para rebotar en los bordes horizontales
        if (this.x + this.radio > canvas.width || this.x - this.radio < 0) {
            this.dirX *= -1; // Invierte la dirección en x
        }

        // Verifica los límites para rebotar en los bordes verticales
        if (this.y + this.radio > canvas.height || this.y - this.radio < 0) {
            this.dirY *= -1; // Invierte la dirección en y
        }
    }
}
