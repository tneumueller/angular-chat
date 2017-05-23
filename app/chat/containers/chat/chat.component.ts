import { Component, OnInit } from "@angular/core";

import { Message } from "../../models/message.interface";

@Component({
    selector: "chat",
    styleUrls: [
        "./chat.component.scss"
    ],
    templateUrl: "./chat.component.html"
})
export class ChatComponent implements OnInit {
    chat: Message[];

    ngOnInit() {
        this.chat = [
            {
                author: "Chat Bot",
                time: new Date(),
                message: "Hello to the chat!"
            }
        ]
    }

    sendMessage(author: string, message: string) {
        if (message.trim().length < 1)
            return;

        console.log(this.chat[this.chat.length - 1].author, author);

        /*
         if (this.chat[this.chat.length - 1].author === this.name)

         this.chat[this.chat.length - 1].message += "<br />" + this.message;
         else
         */
        {
            let now = new Date();

            this.chat = [...this.chat, {
                author: author,
                time: now,
                message: message
            }];
        }
    }
}
