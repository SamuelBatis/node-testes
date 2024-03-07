export interface AppointmentProps {
  customer: string
  startAt: Date
  endsAt: Date
}

export class Appointment {
  private readonly props: AppointmentProps

  get customer (): string {
    return this.props.customer
  }

  constructor (props: AppointmentProps) {
    this.props = props
  }
}
