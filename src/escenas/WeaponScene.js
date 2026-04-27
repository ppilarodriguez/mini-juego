import BaseScene from "./BaseScene.js";
import GameScene from "./GameScene.js";

export default class WeaponScene extends BaseScene {
    constructor(){
        super('WeaponScene');
    }

    init(data){
        this.player = data.player;
    }

    create(){
        this.botonPantallaCompleta();

        const titulo = this.add.text(640, 120, 'Elegí tu arma', {
        fontSize: '22px',
        fill: '#000000'
        }).setOrigin(0.5);

        titulo.setOrigin(0.5, 0.5);

        const hacha = this.add.image(540, 300, 'hacha').setOrigin(0.5).setInteractive();
        const arco = this.add.image(740, 300, 'arco').setOrigin(0.5).setInteractive();

        //aca podemos refactorizar el codigo y dejarlo mas limpio con una funcion!
        hacha.on('pointerdown', () => {
            const finalSprite = `${this.player}-hacha`;
            console.log('al usuario le pasamos '+ finalSprite);

            this.scene.start('GameScene',{playerSprite: finalSprite});
        });

        arco.on('pointerdown', () => {
            const finalSprite = `${this.player}-arco`;
            console.log('al usuario le pasamos '+ finalSprite);

            this.scene.start('GameScene',{playerSprite: finalSprite});
        });

    }

}