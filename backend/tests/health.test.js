import request from "supertest";
import app from "../app.js";

describe("Health Check API", () => {
  it("GET /health should return 200", async () => {
    const res = await request(app).get("/health");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("OK");
  });
});
