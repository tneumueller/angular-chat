import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "chat-input",
    styleUrls: [
        "./chat-input.component.scss"
    ],
    templateUrl: "./chat-input.component.html"
})
export class ChatInputComponent {
    message: string;

    @Output()
    messageEntered: EventEmitter<string> = new EventEmitter();


    constructor() {
        this.message = "";
    }

    sendMessage() {
        this.messageEntered.emit(this.message);
        this.message = "";
    }

    messageKeyDown(event: any) {
        if (event.keyCode === 13)
            this.sendMessage();
    }
}
