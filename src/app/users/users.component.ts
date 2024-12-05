import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.usersService.login(username, password).subscribe(
        (response) => {
          console.log('Login successful!', response);
          this.loginError = '';
        },
        (error) => {
          console.error('Login failed', error);
          this.loginError = 'Invalid username or password.';
        }
      );
    }
  }
}
