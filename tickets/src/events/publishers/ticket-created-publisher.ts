import { Publisher, Subjects, TicketCreatedEvent } from '@hkticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
