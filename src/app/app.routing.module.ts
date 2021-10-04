import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CardViewComponent } from "./card-view/card-view.component";
import { ListViewComponent } from "./list-view/list-view.component";
import { NewUsersComponent } from "./new-users/new-users.component";

const routes: Routes = [
    { path: 'card-view', component: CardViewComponent },
    { path: 'list-view', component: ListViewComponent },
    { path: 'new-users', component: NewUsersComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }