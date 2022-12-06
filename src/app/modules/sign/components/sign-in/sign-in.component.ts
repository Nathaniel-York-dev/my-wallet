import { Component, OnInit } from '@angular/core';
import {NavigationBarService} from "../../../../services/navigation-bar.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginFormTypes} from "../../lib/enums/login-form.enum";
import {ClientService} from "../../../../services/client.service";
import {switchMap, tap} from "rxjs";
import {DataTransferService} from "../../../../services/data-transfer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public LoginFormTypes = LoginFormTypes;
  public loginForm!: FormGroup;

  constructor(
    private navigationBarService: NavigationBarService,
    private clientService: ClientService,
    private dataTransferService: DataTransferService,
    private router: Router,
  ) {
    this.loginForm = new FormGroup({
      [LoginFormTypes.EMAIL]: new FormControl('', [Validators.required, Validators.email]),
      [LoginFormTypes.PASSWORD]: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {
    this.navigationBarService.hide();
  }

  public onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) { return; }
    this.clientService.login(this.loginForm.value[LoginFormTypes.EMAIL], this.loginForm.value[LoginFormTypes.PASSWORD]).pipe(
      switchMap((response: any) => {
        this.loginForm.reset();
        this.dataTransferService.setUser(response.data);
        return this.router.navigate(['/dashboard']);
      })
    ).subscribe();
  }

}
