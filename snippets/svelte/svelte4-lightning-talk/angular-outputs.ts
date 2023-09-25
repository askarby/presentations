@Component({
  selector: 'app-button',
  template: '<button (click)="handleClick.emit()">Click me</button>'
})
class ButtonComponent {
  @Output() handleClick = new EventEmitter();
}

@Component({
  selector: 'app-counter',
  template: `
    <app-button (handleClick)="count++"></app-button>
    <p>Button is clicked {{count}} times</p>
  `
})
class ButtonComponent {
  private count = 0;  
}