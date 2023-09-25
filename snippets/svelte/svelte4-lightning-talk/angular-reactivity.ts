@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">Click me</button>
    <p>Button is clicked {{count}} times (doubled, it's {{doubled}})</p>
  `,
})
class CounterComponent implements OnChanges {
  private count: number;
  private doubled: number;

  ngOnChanges(changes: SimpleChanges): void {
    const { count } = changes;
    if (count) {
      this.doubled = count.currentValue * 2;
    }
  }

  increment() { this.count++ }
}