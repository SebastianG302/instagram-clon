import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';
import { TaggedComponent } from './pages/tagged/tagged.component';

const routes: Routes = [{
    path: '',
    component: PostsComponent,
    pathMatch: 'full'
  },
  {
    path:'tagged',
    component: TaggedComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
