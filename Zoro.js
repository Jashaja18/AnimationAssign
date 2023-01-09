class Zoro {
  constructor(game) {
    this.game = game;
    this.animator = new Animator(ASSET_MANAGER.getAsset("./img/walk.png"), 5, 0, 55, 108, 8, .05);
    this.x = 0;
    this.y = 483;
    this.speed = 200;
  };

  update() {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 1024) this.x = -40;
  };

  draw(ctx) {
    this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
  };
}