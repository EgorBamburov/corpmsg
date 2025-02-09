import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.layout.html',
  styleUrl: './main.layout.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayout {

}
