import { Component } from '@angular/core'
import * as moment from 'moment'
@Component({
  selector: 'app-glass-card',
  templateUrl: './glass-card.component.html',
  styleUrls: ['./glass-card.component.scss']
})
export class GlassCardComponent {
  readonly endDate = moment('01/04/2019 21:00', 'DD/MM/YYYY HH:mm')
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
}
