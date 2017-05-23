import {Component} from '@angular/core';

import { Message } from "./chat/models/message.interface";

@Component({
    selector: "app-root",
    styleUrls: ["app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    title: string;

    name: string = "Thomas";

    constructor() {
        this.title = "Test App";
    }

    onMessageEntered(message: string) {

    }
}
