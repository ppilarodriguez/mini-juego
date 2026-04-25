import GameScene from "./GameScene.js";

export default class WeaponScene extends Phaser.Scene {
    constructor(){
        super('WeaponScene');
    }

    init(data){
        this.player = data.player;
    }

    create(){
        const titulo = this.add.text(400, 100, 'Elegí tu arma', {
        fontSize: '22px',
        fill: '#000000'
        });

        titulo.setOrigin(0.5, 0.5);

        const hacha = this.add.image(250, 300, 'hacha').setInteractive();
        const arco = this.add.image(550, 300, 'arco').setInteractive();

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