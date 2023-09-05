const myImage = new Image ();
myImage.src = 'data:image/jpeg;base64,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';

myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 418;
    canvas.height = 189;
    
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let particlesArray = [];
    const numberOfParticles = 8000;

    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++) {
        let row = [];
        for (let x = 0; x < canvas.width; x++){
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellbrightness = brightness,
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }

    function calculateRelativeBrightness(red, green, blue){
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }

    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 1.5 + 1;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }
        update(){
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mappedImage[this.position1][this.position2][0];
            let movement = (2.5 - this.speed) + this.velocity;

            this.y += movement;
            if (this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function init() {
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle); 
        }
    }
    init();
    function animate(){
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2;
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.5;
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
});