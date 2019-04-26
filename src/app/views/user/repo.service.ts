import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  public urlRepo;
  constructor(private httpClient: HttpClient) { }

  getRepos() {
    return this.httpClient.get(this.urlRepo);
  }
}
