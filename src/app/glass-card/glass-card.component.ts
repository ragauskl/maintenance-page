import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { CountdownService } from '../services/countdown.service'
@Component({
  selector: 'app-glass-card',
  templateUrl: './glass-card.component.html',
  styleUrls: ['./glass-card.component.scss']
})
export class GlassCardComponent implements AfterViewInit {
  @ViewChild('container') containerEl: ElementRef
  @ViewChild('inner') innerEl: ElementRef
  counter = 0
  readonly updateRate = 10
  mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      const e: MouseEvent = event || window.event
      this.x = e.offsetX - this._x
      this.y = (e.offsetY - this._y) * -1
    },
    setOrigin: function (e: HTMLElement) {
      this._x = Math.floor(e.offsetWidth / 2)
      this._y = Math.floor(e.offsetHeight / 2)
    }
  }
  constructor (public countdownService: CountdownService) {}

  ngAfterViewInit () {
    setTimeout(() => {
      const containerEl: HTMLElement = this.containerEl.nativeElement
      const innerEl: HTMLElement = this.innerEl.nativeElement
      containerEl.onmouseenter = (event) => this.update(event)
      containerEl.onmouseleave = () => {
        innerEl.style.transform = ''
      ; innerEl.style.webkitTransform = ''
      }
      containerEl.onmousemove = (event) => {
        if (this.shouldUpdate()) this.update(event)
      }

      this.mouse.setOrigin(containerEl)
    }, 1000)
  }

  update (event) {
    const innerEl: HTMLElement = this.containerEl.nativeElement
    this.mouse.updatePosition(event)
    this.updateTransformStyle(
      (this.mouse.y / innerEl.offsetHeight / 0.2).toFixed(2),
      (this.mouse.x / innerEl.offsetWidth / 0.5).toFixed(2)
    )
  }

  updateTransformStyle (x, y) {
    const innerEl: HTMLElement = this.innerEl.nativeElement
    const style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)'
    innerEl.style.transform = style
    innerEl.style.webkitTransform = style
  }

  shouldUpdate () {
    return this.counter++ % this.updateRate === 0
  }

}
