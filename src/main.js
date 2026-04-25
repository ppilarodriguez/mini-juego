import BootScene from "./escenas/BootScene.js";
import MenuScene from "./escenas/MenuScene.js";
import CharacterScene from "./escenas/CharacterScene.js";
import WeaponScene from "./escenas/WeaponScene.js";
import GameScene from "./escenas/GameScene.js";
import GameScene2 from "./escenas/GameScene2.js";



const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    scene: [
        BootScene,
        MenuScene,
        CharacterScene,
        WeaponScene,
        GameScene,
        GameScene2
    ],
    parent: 'contenedor-juego',
};

new Phaser.Game(config);