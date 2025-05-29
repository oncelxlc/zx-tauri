import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api/core";

@Component({
    selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  greetingMessage = "";

  ngOnInit(): void {
    setTimeout(() => {
      invoke<boolean>("open_login").then((type) => {
        this.greetingMessage = type ? "Login" : "Logout";
      });
    }, 1000)
  }

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
}
