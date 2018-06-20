import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom-window',
  templateUrl: './chatroom-window.component.html',
  styleUrls: ['./chatroom-window.component.scss']
})
export class ChatroomWindowComponent implements OnInit {

  //TODO replace with firesbase data
  public dummyData = [{
    message: 'Sed enim velit , condimentum nec tincidunt non, elementum Sed nisi.',
    createdAt: new Date(),
    sender: {
      firstName: 'Steve',
      lastName: 'Smith',
      photoUrl: 'http://via.placeholder.com/50x50'
    }
  },
  {
    message: 'Sed enim velit , condimentum nec tincidunt non, elementum Sed nisi.',
    createdAt: new Date(),
    sender: {
      firstName: 'Steve',
      lastName: 'Smith',
      photoUrl: 'http://via.placeholder.com/50x50'
    }
  },
  {
    message: 'Sed enim velit , condimentum nec tincidunt non, elementum Sed nisi.',
    createdAt: new Date(),
    sender: {
      firstName: 'Steve A',
      lastName: 'Smith',
      photoUrl: 'http://via.placeholder.com/50x50'
    }
  },
  {
    message: 'Sed enim velit , condimentum nec tincidunt non, elementum Sed nisi.',
    createdAt: new Date(),
    sender: {
      firstName: 'Steve B',
      lastName: 'Smith',
      photoUrl: 'http://via.placeholder.com/50x50'
    }
  }];
  constructor() { }

  ngOnInit() {
  }

}
