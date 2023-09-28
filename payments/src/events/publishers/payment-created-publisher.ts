import { Subjects, Publisher, PaymentCreatedEvent } from "@hkticket/common";

export class PaymentCreatedEventPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
