const canvas = document.querySelector("canvas");
const ctx  = canvas.getContext("2d")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Crear cantidad bolas y los valores que recive 
let bolas = []

for (let i = 0; i < 100; i++){
    bolas.push(new Bola(canvas.width/2, canvas.height / 2))
}
function animacion (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dibuja y mueve cada bola
    bolas.forEach(bola => {
        bolas.forEach(bola2 => {
            // calcular la distancia de las bolas 
            let dx = bola2.x - bola.x 
            let dy = bola2.y - bola.y 
            //calculamos la distancia total
            let distanciaT = Math.sqrt(dx ** 2 + dy ** 2)
            if (distanciaT <230){
                
                ctx.beginPath()
                ctx.moveTo(bola.x,bola.y)
                ctx.lineTo(bola2.x,bola2.y)
                ctx.stroke()
                ctx.closePath()
            }
        })
        bola.dibujar()
        bola.mover()
    })
    requestAnimationFrame(animacion)
}
// Inicia la animación
animacion()


