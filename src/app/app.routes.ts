import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Home } from './home/home';
import { Notfounpage } from './notfounpage/notfounpage';
import { Profile } from './profile/profile';

export const routes: Routes = [
    {path:'about', component:About},
     {path:'login', component:Login},
      {path:'', component:Home},
      {path:'profile', component:Profile},
       {path:'**', component:Notfounpage}
];
