import { PokemonService } from './services/pokemon.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { MatSelectModule } from '@angular/material/select';
import { DetalhesPokemonsComponent } from './components/detalhes-pokemons/detalhes-pokemons.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaPokemonComponent,
    DetalhesPokemonsComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
