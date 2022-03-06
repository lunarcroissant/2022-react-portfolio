const PI2 = Math.PI * 2;

class WelcomePageBackgroundParticle {
  constructor(x, y, radius, rgb) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.rgb = rgb;

    this.vx = Math.random() * 4;
    this.vy = Math.random() * 4;

    this.sinValue = Math.random();

  }

  animate(ctx, stageWidth, stageHeight) {
    this.sinValue += 0.01;
 
    this.radius += Math.sin(this.sinValue);
    this.x += this.vx;
    this.y += this.vy;

    if(this.x < 0) {
      this.vx *= -1;
      this.x += 5;

    } else if (this.x > stageWidth) {
      this.vx *= -1;
      this.x -= 5;
    }

    if(this.y < 0) {
      this.vy *= 1;
      this.y += 5;

    } else if (this.y > stageHeight) {
      this.vy *= -1;
      this.y -= 5;
    }

    ctx.beginPath();
    const g = ctx.createRadialGradient(this.x, this.y, this.radius * 0.01, this.x, this.y, this.radius);
    g.addColorStop(0, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`);
    g.addColorStop(1, `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 0)`);
    ctx.fillStyle = g;
    ctx.arc(this.x, this.y, this.radius, 0, PI2, false);
    ctx.fill();

  }
}

const COLOURS = [
  {r: 86, g: 201, b: 194}, 
  // Turqouise
  {r: 68, g: 73, b: 252},
  // Aquamarine
  {r: 167, g: 144, b: 211},
  // Purple
  {r: 32, g: 41, b: 192},
  // Dark blue
  {r: 88, g: 180, b: 204},
  // Medium blue
];

class Driver {

  constructor(){
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

    this.totalParticles = 20;
    this.particles = [];
    this.maxRadius = 900;
    this.minRadius = 900;

    window.addEventListener('resize', this.resize.bind(this), false);

    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  
    }

    resize() {
      this.stageWidth = document.body.clientWidth;
      this.stageHeight = document.body.clientHeight;

      this.canvas.width = this.stageWidth * this.pixelRatio;
      this.canvas.height = this.stageHeight * this.pixelRatio;
      this.ctx.scale(this.pixelRatio, this.pixelRatio);

      this.ctx.globalCompositeOperation = 'saturation';

      this.createParticles();
    }

    createParticles() {
      let curColour = 0;
      this.particles = [];

      for(let i = 0; i < this.totalParticles; i++) {
        const item = new WelcomePageBackgroundParticle(
          Math.random() * this.stageWidth,
          Math.random() * this.stageHeight,
          Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
          COLOURS[curColour]
        );

        if(++curColour >= COLOURS.length) {
          curColour = 0;
        }

        this.particles[i] = item;
      }
    }

    animate() {

      window.requestAnimationFrame(this.animate.bind(this));

      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

      for (let i = 0; 0 < this.totalParticles; i++) {
        const item = this.particles[i];
        item.animate(this.ctx, this.stageWidth, this.stageHeight);
      }

    }

  };

window.onload = () =>{
  new Driver();
  console.log("loaded");
}