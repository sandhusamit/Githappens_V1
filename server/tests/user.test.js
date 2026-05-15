import request from "supertest";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { app } from "../server.js";
import User from "../models/userModel.js";

dotenv.config({ path: ".env.test" });

describe("User Auth API Flow", () => {
  const uniqueId = Date.now();

  const testUser = {
    firstName: "Super",
    lastName: "Test",
    username: `supertest_${uniqueId}`,
    email: `supertest_${uniqueId}@example.com`,
    password: "Password123!",
  };

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
  });

  afterEach(async () => {
    await User.deleteMany({ email: testUser.email });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test("creates a user", async () => {
    const res = await request(app).post("/api/users").send(testUser);

    expect(res.statusCode).toBe(201);
    expect(res.body.hasError).toBe(false);
    expect(res.body.user.email).toBe(testUser.email);
    expect(res.body.user.username).toBe(testUser.username);
    expect(res.body.user.password).toBeUndefined();
  });

  test("logs in user and receives cookie", async () => {
    await request(app).post("/api/users").send(testUser);

    const res = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: testUser.password,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.hasError).toBe(false);
    expect(res.headers["set-cookie"]).toBeDefined();
  });

  test("gets current user using auth cookie", async () => {
    await request(app).post("/api/users").send(testUser);

    const loginRes = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: testUser.password,
    });

    const cookie = loginRes.headers["set-cookie"];

    const meRes = await request(app)
      .get("/api/auth/me")
      .set("Cookie", cookie);

    expect(meRes.statusCode).toBe(200);
    expect(meRes.body.hasError).toBe(false);
    expect(meRes.body.user.email).toBe(testUser.email);
  });

  test("logs out user", async () => {
    await request(app).post("/api/users").send(testUser);

    const loginRes = await request(app).post("/api/auth/login").send({
      email: testUser.email,
      password: testUser.password,
    });

    const cookie = loginRes.headers["set-cookie"];

    const logoutRes = await request(app)
      .post("/api/auth/logout")
      .set("Cookie", cookie);

    expect(logoutRes.statusCode).toBe(200);
    expect(logoutRes.body.hasError).toBe(false);
  });

  test("fails accessing /me without token", async () => {
    const res = await request(app).get("/api/auth/me");

    expect(res.statusCode).toBe(401);
    expect(res.body.hasError).toBe(true);
  });
});