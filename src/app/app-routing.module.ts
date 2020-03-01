import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {ListComponent} from './list/list.component'
import {CreateComponent} from './create/create.component'
import {EditComponent} from './edit/edit.component'
import {RemoveComponent} from './remove/remove.component'


const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: 'list', component: ListComponent},
  {path: 'create', component: CreateComponent},
  {path: 'edit', component: EditComponent},
  {path: 'remove', component: RemoveComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
