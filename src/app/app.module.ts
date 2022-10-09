import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PostsComponent } from './pages/posts/posts.component';
import { TaggedComponent } from './pages/tagged/tagged.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TaggedComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
