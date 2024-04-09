import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChApiResponse } from '../interfaces/CharacterApi/ChApiResponse';

@Injectable({ providedIn: 'root' })

export class RickapiconService {

  constructor(private http: HttpClient) { }
  
  GetCharacters():Observable<any> {
    return this.http.get<ChApiResponse>(`https://rickandmortyapi.com/api/character`);
  }

  GetEpisodes():Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/episode`);
  }

  GetLocation():Observable<any> {
    return this.http.get(`https://rickandmortyapi.com/api/location`);
  }
}
