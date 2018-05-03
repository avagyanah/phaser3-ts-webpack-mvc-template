import { gameConfig } from '../../constants/GameConfig';
import BaseScene from './BaseScene';

export default class GameScene extends BaseScene {
  public static NAME: string = 'GameScene';
  private mushroom: Phaser.GameObjects.Sprite;

  constructor() {
    super(GameScene.NAME);
  }

  public create(): void {
    const { width, height }: GameConfig = gameConfig;
    this.mushroom = this.add.sprite(
      (width as number) * 0.5,
      (height as number) * 0.5,
      'mushroom',
    );
  }

  public update(): void {
    this.mushroom.angle++;
  }
}
