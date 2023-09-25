@Component({
  selector: 'app-beatles',
  template: `
    <ul>
      <li *ngFor="let each of members">{{each}}</li>
    </ul>
  `,
})
class BeatlesComponent { 
  private members = [
    'John', 
    'Paul', 
    'George', 
    'Ringo'
  ];
}