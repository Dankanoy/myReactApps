import './style.css'
import Phaser from 'phaser'

const size ={
  width:500,
  height:500,
}

const speedDown = 300;

class GameScene extends Phaser.Scene {
  constructor(){
    super("scene-game");
    this.player;
    this.cursor;
    this.playerSpeed = speedDown +50;
    this.target;
    this.points = 0;
    this.textScore;
    this.textTime;
  }
//PRELOAD===============


  preload(){
    this.load.image("bg", "/assets/bg.png")
    this.load.image("basket", "/assets/basket.png")
    this.load.image("apple", "/assets/apple.png")
  }
  //CREATE===============


  create(){
    this.add.image(0,0,"bg").setOrigin(0,0)
    this.player = this.physics.add.image(0, size.height - 100, "basket").setOrigin(0,0);
    this.player.setImmovable(true)
    this.player.body.allowGravity = false;
    this.cursor = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);
    this.target = this.physics.add.image(0, 0, "apple").setOrigin(0, 0);
    this.target.setMaxVelocity(0, speedDown);
    this.physics.add.overlap(this.target,this.player, this.targetHit, null, this);
    this.cursor = this.input.keyboard.createCursorKeys();
    this.player.setSize(this.player.width - this.player.width/4, this.player.height/6).setOffset(this.player.width/10,this.player.height - this.player.height/10);
    this.textScore = this.add.text(size.width - 120, 10, "Score: 0", {
      font: "25px Arial",
      fill: "#000000",
    });
    this.textTime = this.add.text(10, 10, "Remain Time: 00", {
      font: "25px Arial",
      fill: "#000000",
  })
  }
  //UPDATE================


  update(){
    if(this.target.y >= size.height){
      this.target.setY(0);
      this.target.setX(this.getRamdomX())
    }

    const {left, right} = this.cursor;

    if(left.isDown){
      this.player.setVelocityX(-this.playerSpeed)
    }else if(right.isDown){
      this.player.setVelocityX(this.playerSpeed);
     } else {
      this.player.setVelocityX(0);
     }
     
  
  }


  getRamdomX(){
    return Math.floor(Math.random() * 400)
  }

  targetHit(){
    this.target.setY(0);
    this.target.setX(this.getRamdomX())
    this.points++;
    this,this.textScore.setText(`Score: ${this.points}`)
  }

}

const config = {
  type: Phaser.WEBGL,
  width:size.width,
  height:size.height,
  canvas: gameCanvas,
  physics: {
    default:"arcade",
    arcade:{
      gravity: {y:speedDown},
      debug:true,
    }
  },
  scene: [GameScene]
}

const game = new Phaser.Game(config);