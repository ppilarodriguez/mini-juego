import Portal from "../objetos/Portal.js";
import JugadorPrincipal from "../personajes/JugadorPrincipal.js";

export default class GameScene extends Phaser.Scene {
    constructor(){
        super('GameScene');
    }

    init(data){
        this.playerKey = data.playerSprite || 'player'; 
        this.startX = data.x || 100;
        this.startY = data.y || 100;
    }

    create(){

        this.fondo = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'pasto')
            .setOrigin(0, 0);

        this.JugadorPrincipal = new JugadorPrincipal(
            this,
            this.startX,
            this.startY,
            this.playerKey
        ).setDepth(1);

        this.JugadorPrincipal.setCollideWorldBounds(true);

        this.keys = this.input.keyboard.createCursorKeys();
        this.teclaE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        
        this.portal = new Portal(this, 600, 150, 'GameScene2', 'casa');

        this.physics.add.collider(this.JugadorPrincipal, this.portal.zone);
    }

    update() {
        this.JugadorPrincipal.update(this.keys);
        this.portal.update(this.JugadorPrincipal, this.teclaE);
    }
}