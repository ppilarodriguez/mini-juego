export default class JugadorPrincipal extends Phaser.Physics.Arcade.Sprite {

    constructor(escena, x, y, nombre){
        super(escena, x, y, nombre);

        this.nombre = nombre;

        escena.add.existing(this);
        escena.physics.add.existing(this);

        this.setScale(1.1);

        if (!escena.anims.exists(`${this.nombre}-quieto`)) {

            escena.anims.create({
                key: `${this.nombre}-quieto`,
                frames: escena.anims.generateFrameNumbers(this.nombre, { start: 312, end: 313 }),
                frameRate: 5,
                repeat: -1
            });

            escena.anims.create({
                key: `${this.nombre}-caminando-arriba`,
                frames: escena.anims.generateFrameNumbers(this.nombre, { start: 105, end: 113 }),
                frameRate: 10,
                repeat: -1
            });

            escena.anims.create({
                key: `${this.nombre}-caminando-abajo`,
                frames: escena.anims.generateFrameNumbers(this.nombre, { start: 131, end: 139 }),
                frameRate: 10,
                repeat: -1
            });

            escena.anims.create({
                key: `${this.nombre}-caminando-izquierda`,
                frames: escena.anims.generateFrameNumbers(this.nombre, { start: 117, end: 125 }),
                frameRate: 10,
                repeat: -1
            });

            escena.anims.create({
                key: `${this.nombre}-caminando-derecha`,
                frames: escena.anims.generateFrameNumbers(this.nombre, { start: 143, end: 151 }),
                frameRate: 10,
                repeat: -1
            });
        }
    }

    update(keys){

        const velocidad = 240;

        this.setVelocity(0);

        if(keys.up.isDown){

            this.setVelocityY(-velocidad);
            this.anims.play(`${this.nombre}-caminando-arriba`, true);

        } else if(keys.left.isDown){

            this.setVelocityX(-velocidad);
            this.anims.play(`${this.nombre}-caminando-izquierda`, true);

        } else if(keys.right.isDown){

            this.setVelocityX(velocidad);
            this.anims.play(`${this.nombre}-caminando-derecha`, true);

        } else if(keys.down.isDown){

            this.setVelocityY(velocidad);
            this.anims.play(`${this.nombre}-caminando-abajo`, true);

        } else {

            this.anims.play(`${this.nombre}-quieto`, true);
        }
    }
}