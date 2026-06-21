import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	readonly title = 'angular18';

	readonly menuItems = [
		{ label: 'Início' },
		{ label: 'Projetos' },
		{ label: 'Relatórios' },
		{ label: 'Configurações' },
	];
}
