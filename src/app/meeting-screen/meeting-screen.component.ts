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
  panToggle: boolean;
  handToggle: any;
  constructor() { }

  ngOnInit(): void {
  }
  floatPanel() {
    this.floatpanelToggle = !this.floatpanelToggle;
    this.recordToggle = false;
    this.handToggle = false;
    this.lockToggle = false;
    this.panToggle = false;
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
    this.floatpanelToggle = false;
  }
  lock() {
    this.lockToggle = !this.lockToggle;
    this.floatpanelToggle = false;
  }
  invite() {
    this.inviteToggle = !this.inviteToggle;
    this.shareToggle = false;
  }
  pan() {
    this.panToggle = !this.panToggle;
    this.floatpanelToggle = false;
  }
  raiseHand() {
    this.handToggle = !this.handToggle;
    this.floatpanelToggle = false;
  }
}
