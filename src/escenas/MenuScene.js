export default class MenuScene extends Phaser.Scene{
    constructor(){
        super('MenuScene');
    }

    //creamos las opciones del menuuu (el salir no hace nada por ahora)
    create(){
        const start = this.add.text(400, 250, 'COMENZAR', { fill: '#36ff36',fontSize: '22px', }).setInteractive();
        const exit = this.add.text(400, 300, 'SALIR', { fill: '#f00' ,fontSize: '22px',}).setInteractive();

        start.setOrigin(0.5, 0.5);
        exit.setOrigin(0.5, 0.5);

        start.on('pointerdown',() => {
            this.scene.start('CharacterScene');
        });

        exit.on('pointerdown', () => {
            console.log("Saliste");
        });

    }

}