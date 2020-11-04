import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'game/create', component: CreateComponent },
  { path: 'game/join', component: JoinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
