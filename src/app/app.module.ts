import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatInputComponent } from './pages/chat/components/chat-input/chat-input.component';
import { ChatroomListComponent } from './pages/chat/components/chatroom-list/chatroom-list.component';
import { ChatroomTitleComponent } from './pages/chat/components/chatroom-title/chatroom-title.component';
import { ChatMessageComponent } from './pages/chat/components/chat-message/chat-message.component';
import { ChatroomWindowComponent } from './pages/chat/components/chatroom-window/chatroom-window.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ChatComponent,
    NavbarComponent,
    ChatInputComponent,
    ChatroomListComponent,
    ChatroomTitleComponent,
    ChatMessageComponent,
    ChatroomWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
