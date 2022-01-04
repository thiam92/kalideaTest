import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay, skip, tap } from 'rxjs/operators';
import { Credentials } from './models/credentials';
import { Player } from './models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private static readonly storageKey = 'player';
  private static readonly delay = 600;
  private playerSubject: BehaviorSubject<Player|null>;

  constructor() {
    const storedPlayer = JSON.parse(localStorage.getItem(PlayerService.storageKey) || 'null');
    this.playerSubject = new BehaviorSubject<Player|null>(storedPlayer);
    this.playerSubject.pipe(
      skip(1), // skip first emission
      tap(user => localStorage.setItem(PlayerService.storageKey, JSON.stringify(user)))
    ).subscribe();
  }

  get player(): Player|null {
    return this.playerSubject.value;
  }

  get player$(): Observable<Player|null> {
    return this.playerSubject.asObservable();
  }

  signin({ passe, login}: Credentials): Observable<Player> {
    let obs: Observable<Player>;

    if (login === 'john@doe' && passe === 'abcde' ){
      obs = of({
        id: '5fc62fdb5eb04def08ac913a',
        email: 'john@doe'
      });
    } else {
      obs = throwError(new Error('invalid credential'));
    }
    return obs.pipe(
      delay(PlayerService.delay), // simulate api
      tap(user => this.playerSubject.next(user))
    );
  }

  signout(): Observable<boolean> {
    return of(true).pipe(
      delay(PlayerService.delay),
      tap(() => this.playerSubject.next(null))
    );
  }
}
