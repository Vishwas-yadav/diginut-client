import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';
import { LandingComponent } from './modules/landing/landing.component';
import { OurServicesComponent } from './modules/our-services/our-services.component';
import { PortfolioComponent } from './modules/portfolio/portfolio.component';
import { CustomerReviewsComponent } from './modules/customer-reviews/customer-reviews.component';
import { RecognitionComponent } from './modules/recognition/recognition.component';
import { MeetingComponent } from './modules/meeting/meeting.component';
import { ContactUSComponent } from './modules/contact-us/contact-us.component';
import { OutTeamComponent } from './modules/out-team/out-team.component';
import { SidenavComponent } from './modules/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    OurServicesComponent,
    PortfolioComponent,
    CustomerReviewsComponent,
    RecognitionComponent,
    MeetingComponent,
    ContactUSComponent,
    OutTeamComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
