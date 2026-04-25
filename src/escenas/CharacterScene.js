export default class CharacterScene extends Phaser.Scene {
    constructor() {
        super('CharacterScene');
    }

    //En esta escena seleccionamos al personaje que vamos a usar (hecho a las chapas y super feo)
    create(){
        const titulo = this.add.text(400, 100, 'Elegí tu personaje', {
        fontSize: '22px',
        fill: '#000000'
        });

        titulo.setOrigin(0.5, 0.5);

        const nena = this.add.image(250,300,'nena').setInteractive();
        const nene = this.add.image(550,300,'nene').setInteractive();

        //Depende cual seleccione vamos a pasar a elegir arma y pasamos el string del personaje
        nena.on('pointerdown',() => {
            this.scene.start('WeaponScene', {player: 'nena'});
        });

        nene.on('pointerdown',() => {
            this.scene.start('WeaponScene', {player: 'nene'});
        });
    }

}