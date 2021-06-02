import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[//componentes que tiene el modulo
        HeroeComponent,
        ListadoComponent

    ],
    exports:[//lo que se va a hacer visible para el usuario
        ListadoComponent
    ],
    imports:[//solo se colocan modulos
        CommonModule

    ]

})
export class HeroesModule{

}