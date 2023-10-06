import { Publisher, Subjects, TicketCreatedEvent } from '@hkticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
