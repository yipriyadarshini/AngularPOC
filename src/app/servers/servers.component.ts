import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Web services', 'UI services', 'New Services'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = !this.allowNewServer;
    }, 3000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = !this.serverCreated;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'The server is now created.' + this.serverName;
  }

  // onServerDataCaptured(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
