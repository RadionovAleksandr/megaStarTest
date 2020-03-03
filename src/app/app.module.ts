import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {CreateComponent} from './create/create.component'
import {ListComponent} from './list/list.component'
// import {PostsComponent} from './posts/posts.component'
// import {PostComponent} from './post/post.component'
import {AboutExtraComponent} from './about-extra/about-extra.component'
import {AppRoutingModule} from './app-routing.module';
import { EditComponent } from './edit/edit.component';
import { RemoveComponent } from './remove/remove.component'
import {HttpClientModule} from '@angular/common/http';
import { CatComponent } from './cat/cat.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    // PostsComponent,
    // PostComponent,
    AboutExtraComponent,
    EditComponent,
    RemoveComponent,
    CatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
