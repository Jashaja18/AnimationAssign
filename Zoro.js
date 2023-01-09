class Zoro {
  constructor(game) {
    this.game = game;
    this.animator = new Animator(ASSET_MANAGER.getAsset("./walk.png"), -1, 0, 60, 100, 8, .05);
    this.x = 0;
    this.y = 483;
    this.speed = 200;
  };

  update() {
    this.x += this.game.clockTick * this.speed;
    if (this.x > 1024) this.x = -40;
  };

  draw(ctx) {
    this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
  };
}