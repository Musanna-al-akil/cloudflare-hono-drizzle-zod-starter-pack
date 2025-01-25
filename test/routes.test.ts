import app from "../src";

describe("aPI Test", () => {
  it("gET /api", async () => {
    const res = await app.request("/api");
    expect(res.status).toBe(200);
    expect(await res.text()).toBe("Hello Hono!");
  });
});
