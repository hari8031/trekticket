import { Publisher, Subjects, TicketUpdatedEvent } from '@hkticket/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
