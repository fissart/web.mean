import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class Svc14MVService {

  constructor(private http: HttpClient) { }


  save(task:string, theme:string, unidad:string, curse:string, user:string, filew:File) {
      console.log(filew)
      const fd = new FormData();
      fd.append('title', task);
      fd.append('description', theme);
      fd.append('user', user);
      fd.append('image', filew);
      return this.http.post(`${environment.apiURL}/api/MV`, fd, { reportProgress: true, observe: "events" });
    }

  getupdate(user:any) {
      console.log(user)
      return this.http.get<any>(`${environment.apiURL}/api/MV/${user}`);
    }

  update(task:string, note:string, id: string, archivo: File) {
      const fd = new FormData();
      fd.append('task', task);
      fd.append('note', note);
      fd.append('image', archivo);
      return this.http.put(`${environment.apiURL}/api/MV/${id}`, fd, { reportProgress: true, observe: "events" });
    }

  gets(user:string, curse: string ) {
      return this.http.get<any>(`${environment.apiURL}/api/MV`);
    }

  remove(id: string ) {
      return this.http.delete(`${environment.apiURL}/api/MV/${id}`);
    }
}
