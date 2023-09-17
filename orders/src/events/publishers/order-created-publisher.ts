import { Publisher, OrderCreatedEvent, Subjects, OrderStatus } from "@hkticket/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
