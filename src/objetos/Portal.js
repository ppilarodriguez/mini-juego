export default class Portal{
    constructor(escena, x, y, proximaEscena, objeto){

        this.escena = escena;
        this.sceneManager = escena.scene;
        this.proximaEscena = proximaEscena;
        this.cercaDelPortal = false;
        this.nombreObjeto = objeto;

        this.sprite = this.escena.add.image(x, y, this.nombreObjeto)
            .setScale(0.8)
            .setDepth(0);

        this.zone = this.escena.add.zone(x, y, 100, 60);
        escena.physics.add.existing(this.zone);

        this.zone.body.setAllowGravity(false);
        this.zone.body.moves = false;

        this.textoE = escena.add.text(x, y - 50, 'E', {
            fontSize:'20px',
            color: '#ffffff',
            fontStyle: 'bold',
            backgroundColor: '#573a04',
            padding:{x: 10, y:5}
        })
        .setOrigin(0.5)
        .setVisible(false);
    }

    update(jugador, teclaE){

        const enZona = this.escena.physics.overlap(jugador, this.zone);

        if(enZona && !this.cercaDelPortal){
            this.cercaDelPortal = true;
            this.textoE.setVisible(true);
        }

        if(enZona){
            if(Phaser.Input.Keyboard.JustDown(teclaE)){

                this.sceneManager.start(this.proximaEscena, {
                    playerSprite: jugador.texture.key,
                    x: jugador.x,
                    y: jugador.y
                });

            }
        }else{
            if(this.cercaDelPortal){
                this.cercaDelPortal = false;
                this.textoE.setVisible(false); 
            }
        }
    }
}