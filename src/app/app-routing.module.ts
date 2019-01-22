import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule' },
  { path: 'dedicaces', loadChildren: './dedicaces/dedicaces.module#DedicacesPageModule' },
  { path: 'don', loadChildren: './don/don.module#DonPageModule' },
  { path: 'priere', loadChildren: './priere/priere.module#PrierePageModule' },
  // { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
