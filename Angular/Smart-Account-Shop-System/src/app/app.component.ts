import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, Data, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Smart-Account-Shop-System';
  private contexts: ChildrenOutletContexts = inject(ChildrenOutletContexts);

  public getRouteAnimationData(): Data | undefined {
    return this.contexts.getContext('primary')?.route?.snapshot.data?.['animation'];
  }
}
