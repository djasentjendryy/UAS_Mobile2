import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'friend-list',
        loadChildren: () => import('../friend-list/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('../maps/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'Profile',
        loadChildren: () => import('../Profile/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/friend-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/friend-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
