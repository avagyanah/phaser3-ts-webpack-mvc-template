import Phaser from 'phaser';

export const gameConfig: GameConfig = {
  type: Phaser.CANVAS,
  width: 960,
  height: 540,
  backgroundColor: '#2B2E31',
  parent: 'gameContainer',
  //  Open the Dev Tools
  //  The text in the banner will be in white on a neon pink background.
  //  The colors at the start of the background array define the blocks
  //  at the beginning of the banner
  title: 'Kings of Durak',
  banner: {
    text: '#ffffff',
    background: ['#fff200', '#38f0e8', '#00bff3', '#ec008c'],
    hidePhaser: false,
  },
};
