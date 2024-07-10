import { Component, inject } from '@angular/core';
import { DummyService } from '@lib/library-a';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public readonly dummyService = inject(DummyService);

  public readonly message = this.dummyService.getMessage();

  title = 'app-1';
}
