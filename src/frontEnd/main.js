import autobind from "autobind-decorator";

import CanvasDrawer from "./CanvasDrawer";
import ActionHandler from "./ActionHandler";
import SocketHandler from './SocketHandler';

@autobind
class Client {

  constructor() {
    this.canvasDrawer = new CanvasDrawer();
    this.actionHandler = new ActionHandler(this.sendAction);
    this.socketHandler = new SocketHandler(this.drawWorldState);
  }

  sendAction(action) {
    this.socketHandler.sendEvent(action);
  }

  drawWorldState(worldState) {
    this.canvasDrawer.drawWorldState(worldState);
  }
}

new Client();
