import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PersonalRoomComponent } from './personal-room/personal-room.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {path: 'sign-up',component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'check-email', component: CheckEmailComponent},
  {path: 'menu', component: LeftMenuComponent},
  {path: 'home', component: PersonalRoomComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

