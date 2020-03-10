import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  gender = ['female', 'male'];
  Signup: FormGroup;
  constructor (public router: Router) {}

  ngOnInit() {
    this.Signup = new FormGroup({

      'firstName': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'lastName': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
     // 'gender': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, , Validators.minLength(6)])
    });

    // this.Signup.setValue({

    //     'firstName': 'Haritha',
    //     'lastName': 'Nalamalpu',
    //     'email': 'haritha@gmail.com',
    //   'gender': 'female'

    // })
  }

  onSubmit() {
    if (this.Signup.valid) {
      alert('success');
      console.log(this.Signup.value);
      localStorage.setItem(this.Signup.value.firstName, JSON.stringify(this.Signup.value));
      this.router.navigate(['/login']);
    }
  }

  // forbiddenEmails(control: FormControl): Promise<any>
  // {
  // const promise= new Promise<any>((resolve,reject)=>{
  //   setTimeout(()=>{
  //     if(control.value==='test@test.com')
  //     {
  //       resolve({'emailIsForbidden':true});
  //     }
  //     else{
  //            resolve(null);
  //     }

  //   },1500);
  // });
  // return promise;
  // }
}





