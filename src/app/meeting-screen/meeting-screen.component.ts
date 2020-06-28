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
  micToggle: boolean;
  shareToggle: boolean;
  videoToggle: boolean;
  recordToggle: boolean;
  lockToggle: boolean;
  inviteToggle: boolean;
  constructor() { }

  ngOnInit(): void {
  }
  floatPanel() {
    this.floatpanelToggle = !this.floatpanelToggle
  }
  chatBox() {
    this.chatBoxToggle = !this.chatBoxToggle;
    this.partcipantBoxToggle = false;
    this.layoutToggle = false;
    this.shareToggle = false;
  }
  partcipantBox() {
    this.partcipantBoxToggle = !this.partcipantBoxToggle;
    this.chatBoxToggle = false;
    this.layoutToggle = false;
    this.shareToggle = false;
  }
  layout() {
    this.layoutToggle = !this.layoutToggle
    this.chatBoxToggle = false;
    this.partcipantBoxToggle = false;
    this.shareToggle = false;
  }
  mic() {
    this.micToggle = !this.micToggle;
  }
  share() {
    this.shareToggle = !this.shareToggle;
    this.chatBoxToggle = false;
    this.partcipantBoxToggle = false;
    this.layoutToggle = false;
    this.inviteToggle = false;
  }
  video() {
    this.videoToggle = !this.videoToggle;
  }
  record() {
    this.recordToggle = !this.recordToggle;
  }
  lock() {
    this.lockToggle = !this.lockToggle;
  }
  invite() {
    this.inviteToggle = !this.inviteToggle;
    this.shareToggle = false;
  }
}
