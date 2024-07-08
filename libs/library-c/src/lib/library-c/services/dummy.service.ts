import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DummyService {
  public getMessage(): string {
    return 'Hello from DummyService c!';
  }
}
