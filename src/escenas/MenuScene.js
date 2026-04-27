import BaseScene from "./BaseScene.js";

export default class MenuScene extends BaseScene{
    constructor(){
        super('MenuScene');
    }

    //creamos las opciones del menuuu (el salir no hace nada por ahora)
    create(){
        this.botonPantallaCompleta();
        
        const start = this.add.text(640, 320, 'COMENZAR', { fill: '#36ff36',fontSize: '22px', }).setOrigin(0.5).setInteractive();
        const exit = this.add.text(640, 380, 'SALIR', { fill: '#f00' ,fontSize: '22px',}).setOrigin(0.5).setInteractive();

        start.on('pointerdown',() => {
            this.scene.start('CharacterScene');
        });

        exit.on('pointerdown', () => {
            console.log("Saliste");
        });

    }

}