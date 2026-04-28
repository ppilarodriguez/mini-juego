import BaseScene  from "./BaseScene.js";

export default class PartidaScene extends BaseScene {
    constructor(){
        super('PartidaScene');
    }

    create(){
        this.botonPantallaCompleta();

        this.cameras.main.fadeIn(1000, 0, 0, 0);

        this.fondo = this.add.tileSprite(0, 0, this.scale.width, this.scale.height, 'pared')
            .setOrigin(0, 0);

        
        //La idea es que una vez que estamos en esta escena esstamos "sentados" en la mesa, hay que 
        //mejorar el fondo, agregar la mesa, agregar al personaje en frente nuestro, etc. Es solo para ir practicando
    }

}