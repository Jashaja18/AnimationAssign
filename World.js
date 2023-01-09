class World {
  constructor(game) {
    this.game = game;
    this.animation = new Animator(ASSET_MANAGER.getAsset("./img/World.png"), 0, 0, 1024, 768, 1, 1, false, true);
    this.x = 0;
    this.y = 0;
  };

  update() {

  };

  draw(ctx) {
    ctx.clearRect(0, 0, 1024, 768);
    this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
  };
}