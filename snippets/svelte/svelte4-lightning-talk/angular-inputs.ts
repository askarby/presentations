@Component({
  selector: 'app-welcome',
  template: '<h1>Hello, {{name}}</h1>';
})
class WelcomeComponent {
  @Input() name: string;
}