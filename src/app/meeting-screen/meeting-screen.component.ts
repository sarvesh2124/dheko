import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting-screen',
  templateUrl: './meeting-screen.component.html',
  styleUrls: ['./meeting-screen.component.css']
})
export class MeetingScreenComponent implements OnInit {
  floatpanelToggle: boolean;
  chatBoxToggle: boolean;
  partcipantBoxToggle: boolean;
  layoutToggle: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  floatPanel() {
    this.floatpanelToggle = !this.floatpanelToggle
  }
  chatBox() {
    this.chatBoxToggle = !this.chatBoxToggle;
  }
  partcipantBox() {
    this.partcipantBoxToggle = !this.partcipantBoxToggle;
  }
  layout() {
    this.layoutToggle = !this.layoutToggle
  }
}
