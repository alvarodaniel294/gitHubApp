import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserspageComponent } from './pages/userspage/userspage.component';
import { RepospageComponent } from './pages/repospage/repospage.component';

const routes: Routes = [
    { path: '', component: UserspageComponent },
    { path: 'users', component: UserspageComponent },
    { path: 'repos/:userName', component: RepospageComponent },
    { path: '**', component: UserspageComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash:true}),RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
