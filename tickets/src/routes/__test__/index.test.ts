import request from "supertest";
import { app } from "../../app";

const cretaeTicket = () => {
  return request(app).post("/api/tickets").set("Cookie", global.signin()).send({
    title: "concert",
    price: 20,
  });
};

it("fetch all tickets", async () => {
  await cretaeTicket();
  await cretaeTicket();
  await cretaeTicket();
  await cretaeTicket();
  
  const response = await request(app).get('/api/tickets').send().expect(200)

  expect(response.body.length).toEqual(4)
});
