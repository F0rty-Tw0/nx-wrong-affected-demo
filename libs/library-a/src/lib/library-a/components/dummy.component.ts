import { Component, inject } from '@angular/core';
import { DummyService } from '@app/library-a/services/dummy.service';

@Component({
  standalone: true,
  selector: 'lib-dummy-component',
  templateUrl: 'dummy.component.html',
})
export class NameComponent {
  public readonly dummyService = inject(DummyService);

  public readonly message = this.dummyService.getMessage();
}
