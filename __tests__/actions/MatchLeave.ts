import { Process, specHelper } from "actionhero";

describe("Action: MatchLeave", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("returns OK", async () => {
    const { ok } = await specHelper.runAction("MatchLeave");
    expect(ok).toEqual(true);
  });
});
