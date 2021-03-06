import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import { Router } from '@angular/router';

@Component({
    selector: 'my-users',
    templateUrl: './app/components/users/users.component.html'
})

export class UsersComponent implements OnInit {

    users: User[];
    selectedUser: User;
    error: any;
    ciudades: any;

    constructor(
        private router: Router,
        private userService: UserService) { }
    getUsers() {
        this.userService.getUsers().then(users => this.users = users);
    }
    ngOnInit() {
        this.getUsers();
        this.ciudades={ciudad1:"Madrid",ciudad2:"Barcelona"};
    }
    onSelect(user: User) { this.selectedUser = user; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedUser._id]);
    }
    gotoDetailUsuario() {
        this.router.navigate(['/fase1', this.selectedUser._id]);
    }

    addUser() {
        this.selectedUser = null;
        this.router.navigate(['/detail', 'new']);
    }

    deleteUser(user: User, event: any) {
        event.stopPropagation();
        this.userService
            .delete(user)
            .then(res => {
                this.users = this.users.filter(u => u !== user);
                if (this.selectedUser === user) { this.selectedUser = null; }
            })
            .catch(error => this.error = error);
    }
}
