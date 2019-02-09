import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {
  private contactsUrl = environment.API_URL + '/api/menus';

  constructor(private http: Http) { }

  // get("/api/contacts")
  getMenus(): Promise<void | Menu[]> {
    return this.http.get(this.contactsUrl)
               .toPromise()
               .then(response => response.json() as Menu[])
  }
}
