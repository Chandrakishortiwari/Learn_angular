import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Home } from './home/home';
import { Notfounpage } from './notfounpage/notfounpage';
import { Profile } from './profile/profile';
import { Users } from './users/users';
import { UsersProfile } from './users-profile/users-profile';

export const routes: Routes = [
    {path:'about', component:About},
     {path:'login', component:Login},
        {path:'user', component:Users},
           {path:'userprofile/:id', component:UsersProfile},
      {path:'', component:Home},
      {path:'profile', component:Profile},
       {path:'**', component:Notfounpage}
];
