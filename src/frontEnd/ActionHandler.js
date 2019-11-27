import autobind from "autobind-decorator";

import { CLIENT_ACTIONS } from "../shared/constants";

const { KEY_UP, KEY_DOWN } = CLIENT_ACTIONS;

@autobind
export default class ActionHandler {

  constructor(sendAction) {
    this.sendAction = sendAction;
    document.addEventListener(KEY_DOWN, this.onKeyDown);
    document.addEventListener(KEY_UP, this.onKeyUp);
  }

  onKeyDown(event) {
    this.sendAction({
      action: KEY_DOWN,
      key: event.key
    });
  }

  onKeyUp(event) {
    this.sendAction({
      action: KEY_UP,
      key: event.key
    });
  }
}
