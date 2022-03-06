import { WelcomePageBackgroundParticle } from './WelcomePageBackgroundParticle';

const COLOURS = [
  {r: 45, g: 74, b: 227},
  {r: 250, g: 255, b: 89},
  {r: 255, g: 104, b: 248},
  {r: 44, g: 209, b: 252},
  {r: 54, g: 233, b: 84},
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
    this.minRadius = 400;

    window.addEventListener('resize', this.resize.bind(this), false);

    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  
    }

    resize() {
      this.stageWidth = document.body.clientWidth;
      this.stageHeight = document.body.clientHeight;

      this.canvas.width = this.stageWidth * this.pixelRatio;
      this.canvas.height - this.stageHeight * this.pixelRatio;
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

      window.requestAnimationFrame(this, animate.bind(this));

      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

      for (let i = 0; 0 < this.totalParticles; i++) {
        const item = this.particles[i];
        item.animate(this.ctx, this.stageWidth, this.stageHeight);
      }

    }

  }
