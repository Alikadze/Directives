import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component,} from '@angular/core';
import { ChangeColorDirective } from '../directives/change-color.directive';

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
  selector: 'app-task-page',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    CommonModule,
    ChangeColorDirective
  ],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.scss'
})
export class TaskPageComponent {
  
  users: User[] = [
    {
      id: 123,
      firstName: 'John',
      lastName: 'Smith',
      isActive: false,
      role: Role.Admin,
    },

    {
      
      id: 213,
      firstName: 'Elsa',
      lastName: 'Jason',
      isActive: true,
      role: Role.User,
    },

    
  ]

}
