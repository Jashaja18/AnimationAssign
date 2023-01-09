class World {
  constructor(game){
  };

  update(){

  };

  draw(ctx){
      ctx.drawImage(ASSET_MANAGER.getAsset("./img/Background.png"), 0, 0, 1024, 768);
  }
}