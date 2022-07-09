import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { baseDependencyId, baseUrl } from '../app.module';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class ImageUploaderService {


  url!: string;
  constructor(private httpclient: HttpClient,@Inject(baseDependencyId) private base:baseUrl) {
    this.url=base.base+"/Upload"; 
  }

  uploadImage(imageForm:FormData,empId:number){
    console.log("hi")
    return this.httpclient.post(`${this.url}/${empId}`, imageForm)
  }
}
