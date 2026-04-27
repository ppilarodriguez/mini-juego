import BootScene from "./escenas/BootScene.js";
import MenuScene from "./escenas/MenuScene.js";
import CharacterScene from "./escenas/CharacterScene.js";
import WeaponScene from "./escenas/WeaponScene.js";
import GameScene from "./escenas/GameScene.js";
import GameScene2 from "./escenas/GameScene2.js";
import BaseScene from "./escenas/BaseScene.js";

const config = {
    type: Phaser.AUTO,
    scale: {
    mode: Phaser.Scale.FIT, // Escala para llenar la pantalla
    autoCenter: Phaser.Scale.CENTER_BOTH, // Centra el juego
    width: 1280,
    height: 720,
    fullscreenTarget: 'contenedor-juego' // Opcional: si quieres expandir un div específico
    },
    backgroundColor: '#cef8ff',
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
        GameScene2,
        BaseScene
    ],
    parent: 'contenedor-juego',
};

new Phaser.Game(config);