import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PersonalRoomComponent } from './personal-room/personal-room.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { PasswordComponent } from './password/password.component';
import { MeetingScreenComponent } from './meeting-screen/meeting-screen.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ParticipantBoxComponent } from './participant-box/participant-box.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    DashboardComponent,
    CheckEmailComponent,
    LeftMenuComponent,
    PersonalRoomComponent,
    SearchBarComponent,
    ScheduleComponent,
    MeetingsComponent,
    PasswordComponent,
    MeetingScreenComponent,
    ChatBoxComponent,
    ParticipantBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
