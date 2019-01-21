import { Component } from '@angular/core'
import { CountdownService } from '../services/countdown.service'
@Component({
  selector: 'app-glass-card',
  templateUrl: './glass-card.component.html',
  styleUrls: ['./glass-card.component.scss']
})
export class GlassCardComponent {

  constructor (public countdownService: CountdownService) {}
}
