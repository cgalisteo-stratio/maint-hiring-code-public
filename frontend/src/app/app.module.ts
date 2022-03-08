import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

// COMPONENTS
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { EuroService } from './services/euro.service';

const routes: Routes = [
    { path: '', redirectTo: 'euromillones', pathMatch: 'full' },
	{ path: 'euromillones', component: MainComponent },
]

@NgModule({
    declarations: [
        AppComponent,
		MainComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
		RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    providers: [EuroService],
    bootstrap: [AppComponent]
})
export class AppModule { }
