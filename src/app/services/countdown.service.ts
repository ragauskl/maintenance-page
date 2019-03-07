import { Injectable } from '@angular/core'
import * as moment from 'moment'
@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  readonly endDate = moment('11npm /04/2019 21:00', 'DD/MM/YYYY HH:mm')
  days = 0
  hours = 0
  minutes = 0
  constructor () {
    setInterval(() => {
      const left = moment.duration(this.endDate.diff(moment()))
      this.days = Math.floor(left.asDays())
      this.hours = Math.floor(left.asHours() % 24)
      this.minutes = Math.floor(left.asMinutes() % 60)
    }, 1000)
  }

  get countdownActive (): boolean {
    return !!(this.days || this.hours || this.minutes)
  }
}
