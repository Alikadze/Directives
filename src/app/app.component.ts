import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeColorDirective } from './directives/change-color.directive';
import { TaskPageComponent } from "./task-page/task-page.component";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  role: Role;
}

export enum Role {
  Admin = 'Admin',
  User = 'User',
}

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [
        RouterOutlet,
        NgIf,
        NgFor,
        ChangeColorDirective,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        TaskPageComponent
    ]
})
export class AppComponent {
[x: string]: any;
  title = 'myDirectives';

  users: User[] = [
    {
      id: 123,
      firstName: 'Rezo',
      lastName: 'Alikadze',
      isActive: false,
      role: Role.Admin,
    },

    {
      
      id: 213,
      firstName: 'nugo',
      lastName: 'Sharadze',
      isActive: true,
      role: Role.User,
    },

    
  ]
}
