import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
// import { WarehouseRegisterComponent} from "./warehouse/register/register.component";
// import { WarehouseSearchComponent} from "./warehouse/search/search.component";
import { AuthGuard } from './_guards';
import { from } from 'rxjs';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // { path: 'warehouse/register', component: WarehouseRegisterComponent },
    // { path: 'warehouse/search', component: WarehouseSearchComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);