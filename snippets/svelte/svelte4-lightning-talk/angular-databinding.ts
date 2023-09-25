@Component({
  selector: 'app-data-binding',
  template: `
    <input [(ngModel)]="name">
    <p>The name is {{name}}</p>
  `,
})
class DataBindingComponent  {
  name = 'Sherlock Holmes'
}