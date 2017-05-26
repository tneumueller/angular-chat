import {Component, OnInit } from '@angular/core';

import { Message } from "./chat/models/message.interface";

@Component({
    selector: "app-root",
    styleUrls: ["app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
    title: string;
    author: string = "Thomas";
    chat: Message[];

    ngOnInit() {
        this.chat = [
            {
                id: 0,
                author: "Chat Bot",
                time: new Date(),
                message: "Hello to the chat!"
            }
        ]
    }

    onMessageEntered(message: string) {
        if (message.trim().length < 1)
            return;

        const rx_edit = /s([0-9]+)\/\/(.+)/;
        const rx_delete = /d([0-9]+)\/\//;
        let m;

        if ((m = rx_edit.exec(message)) != null)
        {
            if (this.chat[parseInt(m[1])].author === this.author)
            {
                let mesg = this.chat[parseInt(m[1])];
                let new_chat = this.chat.slice();

                new_chat[parseInt(m[1])] = {
                    id: m[1],
                    author: this.author,
                    time: mesg.time,
                    message: m[2],
                    edited: true
                };

                this.chat = new_chat.slice();
            }

            return;
        }

        if ((m = rx_delete.exec(message)) != null)
        {
            if (this.chat[parseInt(m[1])].author === this.author)
            {
                let mesg = this.chat[parseInt(m[1])];
                let new_chat = this.chat.slice();

                new_chat[parseInt(m[1])] = {
                    id: m[1],
                    author: this.author,
                    time: mesg.time,
                    message: "",
                    deleted: true
                };

                this.chat = new_chat.slice();
            }

            return;
        }

        /*
         if (this.chat[this.chat.length - 1].author === this.author)

         this.chat[this.chat.length - 1].message += "<br />" + this.message;
         else
         */
        {
            let now = new Date();

            this.chat = [...this.chat, {
                id: this.chat.length,
                author: this.author,
                time: now,
                message: message
            }];
        }
    }
}
