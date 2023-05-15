import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


//Components

import { TodoButtonDeleteAllComponent } from "./components/todo-button-delete-all/todo-button-delete-all.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoInputAddItensComponent } from "./components/todo-input-add-itens/todo-input-add-itens.component";
import { HeaderComponent } from "./components/header/header.component";

//Pages
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
    declarations:[HeaderComponent, HomeComponent, TodoButtonDeleteAllComponent, TodoListComponent, TodoInputAddItensComponent],
    imports:[
        CommonModule
    ]
})
export class HomeModule {}