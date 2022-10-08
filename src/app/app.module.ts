import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PostsComponent } from './pages/posts/posts.component';
import { TaggedComponent } from './pages/tagged/tagged.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TaggedComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
