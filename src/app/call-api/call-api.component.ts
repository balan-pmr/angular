import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styleUrls: ['./call-api.component.css']
})
export class CallApiComponent {

    constructor(private http: HttpClient ){}

    data: any[]= [];

    ngOnInit(){
      this.http.get('https://api.spacexdata.com/v4/rockets')
      .subscribe ( (data:any) => { console.log(data) 
        this.data = data;
      })
    }
}
