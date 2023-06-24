import { Process, specHelper } from "actionhero";

describe("Action: MatchLoop", () => {
  const actionhero = new Process();

  beforeAll(async () => await actionhero.start());
  afterAll(async () => await actionhero.stop());

  test("returns OK", async () => {
    const { ok } = await specHelper.runAction("MatchLoop");
    expect(ok).toEqual(true);
  });
});
