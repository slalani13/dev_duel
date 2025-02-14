import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';


@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""
  user1Data: any
  user2Data: any
  showCard: boolean = false

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  async onSubmit() {
    const data = await this.userService.duelUsers(this.usernameOne, this.usernameTwo);
    if (Array.isArray(data) && data.length === 2) {
      this.user1Data = data[0];  // First user data
      this.user2Data = data[1];  // Second user data
      this.showCard = true
    }
  }

  getWinner() {
    if (this.user1Data['total-stars'] >= this.user2Data['total-stars']) {
      return this.user1Data.username;
    }
    return this.user2Data.username;
  }
}

