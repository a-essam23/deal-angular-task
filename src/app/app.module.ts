import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { UserModule } from './user/user.module';
import { SharedComponentsModule } from './shared/components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { ToObjPipe } from './shared/pipes/to-obj.pipe';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
  declarations: [AppComponent, HomePageComponent, ToObjPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserModule,
    SharedComponentsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
