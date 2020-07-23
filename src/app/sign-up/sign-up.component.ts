import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  passwordEye: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  passwordToogle(input: any) {
    this.passwordEye = !this.passwordEye;
    input.type = input.type === 'password' ? 'text' : 'password';
  }

}
