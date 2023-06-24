import { Process, specHelper } from "actionhero";

describe("Action: MatchTerminate", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("returns OK", async () => {
    const { ok } = await specHelper.runAction("MatchTerminate");
    expect(ok).toEqual(true);
  });
});
