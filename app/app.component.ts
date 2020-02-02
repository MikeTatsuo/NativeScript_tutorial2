import { Component } from "@angular/core";
import { User } from "./shared/user/user.model";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "gr-login",
  providers: [UserService],
  moduleId: module.id,
  styleUrls: ["./login/login.component.css"],
  templateUrl: "./login/login.component.html"
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  submit(){
    if (this.isLoggingIn){
      this.login();
    } else {
      this.signup();    
    }
   }

   login(){
     // TODO: To be implemented
   }

   signup(){
     this.userService.register(this.user)
      .subscribe(() => {
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

  toogleDisplay(){
    this.isLoggingIn = !this.isLoggingIn;
  }
}
