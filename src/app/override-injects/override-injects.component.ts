import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-override-injects',
  templateUrl: './override-injects.component.html',
  styleUrls: ['./override-injects.component.css']
})
export class OverrideInjectsComponent implements OnInit {

  needsLogin: boolean = true;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.isAuthenticated().then((authenticated) => {
      this.needsLogin = !authenticated;
    });
  }

}
