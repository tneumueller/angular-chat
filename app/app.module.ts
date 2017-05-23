import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

import { ChatModule } from "./chat/chat.module";

import {AppComponent} from "./app.component";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        /* angular modules */
        BrowserModule,
        CommonModule,

        /* custom modules */
        ChatModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
