import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { EmailService } from './email/email.service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            EmailComponent,
            HomePageComponent
        ],
        imports: [
            RouterModule.forRoot([
                { path: '', component: HomePageComponent },
                { path: 'email', component: EmailComponent }
            ]),
            BrowserModule,
            FormsModule,
            HttpModule,
            AppRoutingModule
        ],
        providers: [EmailService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map