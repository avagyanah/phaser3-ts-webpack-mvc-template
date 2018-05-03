import BaseScene from './BaseScene';

export default class BootScene extends BaseScene {
  public static NAME: string = 'BootScene';
  public static LOAD_COMPLETE_NOTIFICATION: string = `${
    BootScene.NAME
  }LoadCompleteNotification`;
  public static LOAD_COMPLETE_EVENT: string = `${
    BootScene.NAME
  }LoadCompleteEvent`;

  constructor() {
    super(BootScene.NAME);
  }

  public preload(): void {
    this.load.image('mushroom', 'assets/mushroom.png');
  }

  public create(): void {
    this.sys.events.emit(BootScene.LOAD_COMPLETE_EVENT);
  }
}
