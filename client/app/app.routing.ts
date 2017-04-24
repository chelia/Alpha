import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { UsersComponent }      from './components/users/users.component';
import { UserDetailComponent }  from './components/userDetail/user-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: UserDetailComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
