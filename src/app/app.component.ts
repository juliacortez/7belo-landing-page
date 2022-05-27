import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { API_PATH } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient){
    this.getComments()
  }

  momentForm!: FormGroup

  ngOnInit(){
    this.momentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    })
  }

  get name(){
    return this.momentForm.get('name')!;
  }

  get email(){
    return this.momentForm.get('email')!;
  }

  get phone(){
    return this.momentForm.get('phone')!;
  }

  comments: any
  
  getComments(){
    this.http.get(`${API_PATH}/public/v2/comments`)
    .subscribe((res) => {
      const result = Object.entries(res).slice(0, 4)
      this.comments = result
    });
  }

  onSubmit(data: any){

    const body = {
      name: "helia lorem",
      email: "helia@email.com",
      gender: "female",
      status: "active" 
    }

  
  if(this.momentForm.invalid){
    return;
  }

    this.http.post(`${API_PATH}/public/v2/users`, body)
    .subscribe((res) => {
      alert("Usuário cadastrado!")
    });
  }
}

