import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";


@Component({
  selector: "gr-login",
  providers: [UserService],
  moduleId: module.id,
  styleUrls: ["./login.component.css"],
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  isLoading = false;

  constructor(
    private page: Page,
    private router: Router,
    private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signup();
    }
  }

  login() {

    this.isLoading = true;
    this.userService.login(this.user)
      .subscribe(() => {
        this.isLoading = false;
        this.router.navigate(['/list']),
          (exception) => {
            if (exception.error && exception.error.description) {
              alert(exception.error.description);
            } else {
              alert(exception);
            }
          };
      });
  }

  signup() {
    this.isLoading = true;
    this.userService.register(this.user)
      .subscribe(() => {
        this.isLoading = false;
        alert("Your account was successfully created.");
        this.toogleDisplay();
      }, (exception) => {
        if (exception.erro && exception.error.description) {
          alert(exception.error.description);
        } else {
          alert(exception);
        }
      });
  }

  toogleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
