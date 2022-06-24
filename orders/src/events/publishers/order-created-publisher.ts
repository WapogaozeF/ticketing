import { Publisher, OrderCreatedEvent, Subjects } from '@wrstickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
