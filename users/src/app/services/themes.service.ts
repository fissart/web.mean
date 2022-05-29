import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  private URL = `${environment.apiURL}/api/themes/Controller`;
  private URLtask = `${environment.apiURL}/api/task/Controller`;

  constructor(private http: HttpClient, private router: Router) { }

 //
  themes(user:any) {
    return this.http.post<any>(this.URL + '/api/wwu', user);
  }

  getThemes(user:any) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  createtheme( unidad: string, curse: string, user:string) {
    return this.http.post<any>(this.URL, {title:"Título", description:`<h1 class='bg-info text-success border p-1 rounded'>Titulo</h1>
    <h2 class='bg-info text-light border rounded text-success p-1'>Titulo</h2>
    <h3 class='bg-light border rounded text-success p-1'>Titulo</h3>
    <img class='bg-light p-1 m-auto'
      src="https://thumbs.dreamstime.com/b/elegant-blue-background-swirls-space-your-text-elegant-blue-background-swirls-space-your-text-159291073.jpg"
      width="75%"
    />
    <ul>
    <li><a href="https://drive.google.com/file/u/0/d/0B1Ga40SmVyy-TTRWcXNkRGYxY00/view?resourcekey=0-tXQ867e7G7OY2bMQzshTKQ" target="_blanck">Libro</a></li>
    <li><a href="https://marcianosmx.com/10-fractales-alucinantes-puedes-encontrar-la-naturaleza/" target="_blanck">Sucesiones en la naturaleza</a></li>
    </ul>

    <hr>
    <hr>
    <ul>
    <li><a href="https://katex.org/docs/support_table.html" target="_blanck">Katex informaciones soportes </a></li>
    <li><a href="https://getbootstrap.com/docs/4.0/" target="_blanck">Bootstrap informaciones soportes </a>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZnuwB35GYMY?start=16" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </li>
    </ul>

    $$\\begin{Bmatrix} a & b \\\\   c & d\\end{Bmatrix}$$

    $$\\int_1^3=\\lim_{n\\to\\infty}\\sum_{n\\to\\infty}^n x_i$$ donde $x\\in\\mathbb{R}$`, task:"Tarea"  , time:"2022-12-12", unidad, curse, user });
  }
  updateTheme(id: string, title: string, description: string, task: string, time: string, filew:File) {
    console.log(filew)
    const fd = new FormData();
    fd.append('title', title);
    fd.append('task', task);
    fd.append('description', description);
    fd.append('time', time);
    fd.append('image', filew);
        //    return this.http.post<any>(this.URL, {task, theme, unidad, curse, user, filew});
    //return this.http.post(`${this.URL}`, fd, { reportProgress: true, observe: "events" });
    console.log(id);
    return this.http.put<any>(`${this.URL}/${id}`, fd, { reportProgress: true, observe: "events"});
  }

  gettheme(id: string) {
    return this.http.get(`${this.URL}/${id}`);
  }


  delete(id: string) {
    return this.http.delete(`${this.URL}/${id}`);
  }

deletetask(id: string) {
    return this.http.delete(`${this.URLtask}/${id}`);
  }


}
