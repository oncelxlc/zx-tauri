import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { invoke } from "@tauri-apps/api/core";

@Component({
    selector: 'app-root',
    imports: [CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  greetingMessage = "";

  greet(event: SubmitEvent, name: string): void {
    event.preventDefault();

    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    invoke<string>("greet", { name }).then((text) => {
      this.greetingMessage = text;
    });
  }
}
