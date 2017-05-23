import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ChatComponent } from "./containers/chat/chat.component";
import { MessageComponent } from "./components/message/message.component";
import { ChatInputComponent } from "./containers/chat-input/chat-input.component";

@NgModule({
    declarations: [
        ChatComponent,
        ChatInputComponent,
        MessageComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ChatComponent,
        ChatInputComponent
    ]
})
export class ChatModule {

}
