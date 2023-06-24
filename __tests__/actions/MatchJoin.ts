import { Process, specHelper } from "actionhero";

describe("Action: MatchJoin", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("returns OK", async () => {
    const { ok } = await specHelper.runAction("MatchJoin");
    expect(ok).toEqual(true);
  });
});
