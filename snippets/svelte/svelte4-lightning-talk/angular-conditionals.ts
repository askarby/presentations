@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">Click me</button>
    <p *ngIf="count === 1; else multiple">There is {{count}} person</p>

    <ng-template #multiple>
      <h1>
        There are {{count}} persons
      </h1>
    </ng-template>
  `,
})
class CounterComponent {
  // ... of no importance
}