import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = "";
  showCard: boolean = false;
  data: any = null; // Variable to store user data


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  async onSubmit() {
    // this.userService.inspectUser(this.username);
    if (this.username.trim()) {
      this.showCard = true; // Show card if a username is entered
    } else {
      this.showCard = false; // Hide card if username is empty
      alert("Please enter a username!");
    }
    try {
      const data = await this.userService.inspectUser(this.username);
      this.data = data;  // Store the fetched data
      this.showCard = true;   // Show the card
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  }
}
