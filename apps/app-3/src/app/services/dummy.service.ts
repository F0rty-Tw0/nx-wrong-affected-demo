import { inject, Injectable } from '@angular/core';
import { DummyService as SharedDummyService } from '@lib/library-c';

@Injectable({ providedIn: 'root' })
export class DummyService {
  public sharedDummyService = inject(SharedDummyService);

  public getMessage(): string {
    const sharedMessage = this.sharedDummyService.getMessage();

    console.log('Shared message:', sharedMessage);
    return 'Hello from App DummyService 3!';
  }
}
