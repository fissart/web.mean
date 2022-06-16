import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router'
import { resetFakeAsyncZone } from '@angular/core/testing';
//import { resolveForwardRef } from '@angular/compiler/src/util';
import { environment } from '../../../environments/environment';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

//import {PhotoService} from '../../services/photo.service'

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    wwwww = [];
    photow: any = [];
    apiUrl = environment.apiURL;
    public photoSelected!: string | ArrayBuffer | null;
    public loading!: string;
    public _value: number = 0;
    public archivos: any = [];

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        if (!isNaN(value) && value <= 100) {
            this._value = value;
        }
    }

    constructor(private www: UsersService, private router: Router, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
        iconRegistry.addSvgIconLiteral('ww', sanitizer.bypassSecurityTrustHtml(`
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 121.86 122.88" style="enable-background:new 0 0 121.86 122.88" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style><g><path class="st0" d="M72.09,18.72h42.37c2.05,0,3.89,0.84,5.22,2.18c1.34,1.34,2.18,3.2,2.18,5.22v89.36 c0,2.05-0.84,3.89-2.18,5.22c-1.34,1.34-3.2,2.18-5.22,2.18H24.48c-2.05,0-3.89-0.84-5.22-2.18c-1.34-1.34-2.18-3.2-2.18-5.22 V71.46c2.47,1,5.05,1.78,7.72,2.29v20.28h0.03l0,0C37.72,81.7,46.26,75.61,59.08,65.2c0.05,0.05,0.1,0.1,0.15,0.15 c0.03,0.03,0.03,0.06,0.06,0.06l26.82,31.73l4.1-25.24c0.28-1.62,1.8-2.73,3.42-2.45c0.62,0.09,1.18,0.4,1.62,0.81l18.82,19.77 V27.91c0-0.4-0.16-0.75-0.44-0.99c-0.25-0.25-0.62-0.44-0.99-0.44H74.05C73.64,23.8,72.98,21.21,72.09,18.72L72.09,18.72z M32.79,0 C50.9,0,65.58,14.68,65.58,32.79c0,18.11-14.68,32.79-32.79,32.79C14.68,65.58,0,50.9,0,32.79C0,14.68,14.68,0,32.79,0L32.79,0z M15.37,33.37h11.04v15.76h12.45V33.37h11.36L32.8,16.44L15.37,33.37L15.37,33.37L15.37,33.37z M94.27,35.66 c2.95,0,5.66,1.21,7.58,3.14c1.96,1.96,3.14,4.63,3.14,7.59c0,2.95-1.21,5.66-3.14,7.58c-1.96,1.96-4.63,3.14-7.58,3.14 c-2.95,0-5.66-1.21-7.59-3.14c-1.96-1.96-3.14-4.63-3.14-7.58c0-2.95,1.21-5.65,3.14-7.59C88.65,36.84,91.32,35.66,94.27,35.66 L94.27,35.66L94.27,35.66z"/></g></svg>
`));
    }

    onImgError(event: any) {
        event.target.src = './assets/negz.jpg'
    }


    ngOnInit() {
        this.www.getonly().subscribe(
            (res: any) => {
                this.wwwww = res;
                console.log(res)
            },
            err => console.log(err)
        )
    }


    capturandoFile(event: any) {
        //console.log(event.target.files);
        const ww = event.target.files[0];
        this.archivos.push(ww);
        if (event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = e => this.photoSelected = reader.result;
            reader.readAsDataURL(event.target.files[0]);
        }
    }


    uploadPhoto(name: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement) {
        //console.log(localStorage.getItem('id'));
        //console.log(this.archivos[0]);
                    console.log(Number(email.value.substr(0,8)));
                    if(Number(email.value.substr(0,8)) && Number(email.value.substr(0,8)) + "" == password.value){
        this.www
            .registro(name.value, email.value, password.value, this.archivos[0])
            .pipe()
            .subscribe(
                (res: any) => {
                    if (res.user._id) {
                        /*
                        this.value = Math.round((100 / res.total) * res.loaded);
                        console.log(res.total);
                        console.log(res.loaded);
                        if (res.total == res.loaded && res.type > 0) {*/
                        this.loading = "false";
                        localStorage.setItem('id', res.user._id);
                        localStorage.setItem('rol', res.user.rol);
                        localStorage.setItem('imguser', res.user.foto);
                        this.router.navigate(['/'])

                            //this.router.navigate(['/login']);
                        /*}*/
                    } else {
                                    alert(res.user.msg)
                    }

                },
                err => console.log(err)
            );
        return false;
    }else{
            alert("Escriba su DNI de 8 digitos, ejemplo: 12345678@fismart.cf y passwor=DNI")
                    return true;
            }

        /*
*/
    }

    deletePhoto(id: string) {
        this.www.deletePhoto(id)
            .subscribe(res => {
                console.log(res)
                this.router.navigate(['/www1']);
                this.www.get().subscribe(
                    (res: any) => {
                        this.wwwww = res;
                        //console.log(res)
                    },
                    err => console.log(err)
                )
            })
    }


    /*
      updatePhoto(title: HTMLInputElement, description: HTMLInputElement): boolean {
        this.www.updatePhoto(this.wwwww._id, title.value, description.value)
          .subscribe(res => {
            console.log(res);
            this.router.navigate(['/photos']);
          });
        return false;
      }
      */
}
