import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.page.html',
  styleUrls: ['./demo.page.scss'],
})
export class DemoPage implements OnInit {

  constructor(private authService: AuthService, private storage: Storage,) { }



  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
