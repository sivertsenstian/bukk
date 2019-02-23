import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LichessService {
  url: string = 'https://lichess.org/api';

  constructor() {}

  async getByUserName(username: string) {
    const result = await fetch(`${this.url}/user/${username}`);
    return await result.json();
  }
}
