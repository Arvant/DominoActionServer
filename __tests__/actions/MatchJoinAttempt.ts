import { Process, specHelper } from "actionhero";

describe("Action: MatchJoinAttempt", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("returns OK", async () => {
    const { ok } = await specHelper.runAction("MatchJoinAttempt");
    expect(ok).toEqual(true);
  });
});
