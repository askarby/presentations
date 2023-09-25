@Component({
  selector: 'app-fetch-data',
  template: `
    <ng-container *ngIf="{data: data$ | async, error: error$ | async} as vm">
      <div *ngIf="!vm.error && vm.data; else loading">{{data}}</div>
      <div *ngIf="vm.error">Error {{error}}</div>
    </ng-container>

    <ng-template #loading>...</ng-template>
  `,
})
class FetchDataComponent  {
  data$ = this.dataService.getData();
  error$ = this.data$.pipe(
    ignoreElements(),
    catchError((err) => of(err))
  );

  constructor(public dataService: DataService) {}
}