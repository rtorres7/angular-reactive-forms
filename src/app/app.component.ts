import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
// import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    userName: ["jack ryan"],
    password: ["myPassword"],
    confirmPassword: ["confimMyPassword"],
    address: this.fb.group({
      city: ["myCity"],
      state: ["myState"],
      postalCode: ["myPostal"]
    })
  });

  // export class AppComponent {
  //   registrationForm = new FormGroup({
  //     userName: new FormControl("t-bone"),
  //     password: new FormControl(""),
  //     confirmPassword: new FormControl(""),
  //     address: new FormGroup({
  //       city: new FormControl(""),
  //       state: new FormControl(""),
  //       postalCode: new FormControl("")
  //     })
  //   });

  loadApiData() {
    this.registrationForm.setValue({
      userName: "t-bone",
      password: "password",
      confirmPassword: "confirmPassword",
      address: {
        city: "city",
        state: "state",
        postalCode: "12345"
      }
    });
  }
}
