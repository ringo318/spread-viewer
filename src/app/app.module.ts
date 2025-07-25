import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SpreadViewerModule } from './spread-viewer/spread-viewer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SpreadViewerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
