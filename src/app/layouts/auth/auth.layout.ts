import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [],
  templateUrl: './auth.layout.html',
  styleUrl: './auth.layout.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayout {

}
