import request from "supertest";
import { app } from "../../app";

it("fails when a email that does not exist", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "1234",
    })
    .expect(400);
});

it("fails when incorrect password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "1234",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "321452r",
    })
    .expect(400);
});

it("responds with a cookie when given valid cred", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "1234",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "1234",
    })
    .expect(200);
  expect(response.get("Set-Cookie")).toBeDefined();
});
