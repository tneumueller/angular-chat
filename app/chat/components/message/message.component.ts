import { Component, Input } from "@angular/core";

@Component({
    selector: "message",
    styleUrls: [
        "./message.component.scss"
    ],
    templateUrl: "./message.component.html"
})
export class MessageComponent {
    @Input() author: string;
    @Input() time: Date;
    @Input() byMe: boolean;
    @Input() message: string;
}
