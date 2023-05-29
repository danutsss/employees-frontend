import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-login-form",
	templateUrl: "./login-form.component.html",
	styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent {
	loginEmployeeForm!: FormGroup;
	email: string = "";
	password: string = "";

	contructor() {}

	ngOnInit(): void {
		this.loginEmployeeForm = new FormGroup({
			email: new FormControl("", [Validators.required, Validators.email]),
			password: new FormControl("", [
				Validators.required,
				Validators.minLength(4),
			]),
		});
	}

	loginEmployee() {
		console.log(this.loginEmployeeForm.value);
	}
}
