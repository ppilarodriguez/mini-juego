import BaseScene from "./BaseScene.js";
export default class CharacterScene extends BaseScene {
    constructor() {
        super('CharacterScene');
    }

    //En esta escena seleccionamos al personaje que vamos a usar (hecho a las chapas y super feo)
    create(){
        this.botonPantallaCompleta();

        const titulo = this.add.text(640, 120, 'Elegí tu personaje', {
        fontSize: '22px',
        fill: '#000000'
        }).setOrigin(0.5);

        titulo.setOrigin(0.5, 0.5);

        const nena = this.add.image(540,300,'nena').setOrigin(0.5).setInteractive();
        const nene = this.add.image(740,300,'nene').setOrigin(0.5).setInteractive();

        //Depende cual seleccione vamos a pasar a elegir arma y pasamos el string del personaje
        nena.on('pointerdown',() => {
            this.scene.start('WeaponScene', {player: 'nena'});
        });

        nene.on('pointerdown',() => {
            this.scene.start('WeaponScene', {player: 'nene'});
        });
    }

}