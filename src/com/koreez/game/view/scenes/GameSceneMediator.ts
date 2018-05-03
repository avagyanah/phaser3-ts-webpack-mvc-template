import GameFacade from '../../GameFacade';
import BaseSceneMediator from './BaseSceneMediator';
import BootScene from './BootScene';
import GameScene from './GameScene';

export default class GameSceneMediator extends BaseSceneMediator<GameScene> {
  public static NAME: string = 'GameSceneMediator';

  constructor(viewComponent: GameScene) {
    super(GameSceneMediator.NAME, viewComponent);
  }

  public listNotificationInterests(): string[] {
    return [BootScene.LOAD_COMPLETE_NOTIFICATION];
  }

  public handleNotification(notificationName: string): void {
    switch (notificationName) {
      case BootScene.LOAD_COMPLETE_NOTIFICATION:
        const gameScene: GameScene = new GameScene();
        GameFacade.game.scene.add(BootScene.NAME, gameScene);
        this.game.scene.start(GameScene.NAME);
        this.setViewComponent(this.game.scene.getScene(
          GameScene.NAME,
        ) as GameScene);
        break;
      default:
        console.warn(`${notificationName} is unhandled!`);
        break;
    }
  }
}
