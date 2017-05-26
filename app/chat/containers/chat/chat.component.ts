import { Component, Input, OnInit } from "@angular/core";

import { Message } from "../../models/message.interface";

@Component({
    selector: "chat",
    styleUrls: [
        "./chat.component.scss"
    ],
    templateUrl: "./chat.component.html"
})
export class ChatComponent {
    @Input()
    author: string;

    @Input()
    chat: Message[];
}
