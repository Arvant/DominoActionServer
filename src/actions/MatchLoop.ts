import { Action } from "actionhero";

export class MyAction extends Action {
  constructor() {
    super();
    this.name = "MatchLoop";
    this.description = "an actionhero action";
    this.outputExample = {};
  }

  async run(data) {
    // your logic here
    data.response.ok = true;
  }
}
