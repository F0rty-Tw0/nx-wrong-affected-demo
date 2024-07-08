import { Component, inject } from '@angular/core';
import { DummyService } from '@app/services/dummy.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly dummyService = inject(DummyService);

  public readonly message = this.dummyService.getMessage();

  title = 'app-2';
}
