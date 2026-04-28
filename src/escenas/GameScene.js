import Portal from "../objetos/Portal.js";
import JugadorPrincipal from "../personajes/JugadorPrincipal.js";
import Npc from "../personajes/Npc.js";
import BaseScene from "./BaseScene.js";

export default class GameScene extends BaseScene {
    constructor(){
        super('GameScene');
    }

    init(data){
        this.playerKey = data.playerSprite || 'player'; 
        this.startX = data.x || 100;
        this.startY = data.y || 100;
    }

    create(){
        this.botonPantallaCompleta();

        this.fondo = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'pasto')
            .setOrigin(0, 0);

        this.JugadorPrincipal = new JugadorPrincipal(
            this,
            this.startX,
            this.startY,
            this.playerKey
        ).setDepth(1);
        this.JugadorPrincipal.setCollideWorldBounds(true);

        this.npc = new Npc(this, 490, 180, 'troll').setDepth(0);

        this.keys = this.input.keyboard.createCursorKeys();
        this.teclaE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
        
        this.portal = new Portal(this, 600, 150, 'GameScene2', 'casa');

        this.physics.add.collider(this.JugadorPrincipal, this.portal.zone);

        this.zonaInteraccion = this.add.zone(this.npc.x, this.npc.y, this.npc.width, this.npc.height);
        this.physics.add.existing(this.zonaInteraccion);
        this.zonaInteraccion.body.setAllowGravity(false);
        this.zonaInteraccion.body.moves = false;

        this.mensajeNpc = this.add.text(
        this.npc.x,
        this.npc.y - this.npc.height / 2 - 20,
        'INGRESÁ A LA TIENDA!',
        {
            fontFamily: '"Jersey 10"',
            fontSize: '18px',
            color: '#000',
            backgroundColor: '#fff',
            padding: { x: 10, y: 5 }
        }
        ).setOrigin(0.5).setVisible(false);

        this.estaEnZonaNpc = false;

        this.physics.add.overlap(this.JugadorPrincipal, this.zonaInteraccion, () => {
        this.estaEnZonaNpc = true;
        }, null, this);

    }

    update() {
        this.JugadorPrincipal.update(this.keys);
        this.portal.update(this.JugadorPrincipal, this.teclaE);

        if (this.estaEnZonaNpc) {
        this.mensajeNpc.setVisible(true);
        } else {
        this.mensajeNpc.setVisible(false);
        }
        this.estaEnZonaNpc = false;
    
    }
}