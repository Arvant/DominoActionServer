import { Process, specHelper } from "actionhero";

describe("Action: initGame", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("returns OK", async () => {
    const { ok } = await specHelper.runAction("initGame");
    expect(ok).toEqual(true);
  });
});
