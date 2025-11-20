import { Component, OnInit, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarItem } from 'src/sideBarLinks';
import { SIDEBAR_LINKS } from 'src/sideBarLinks';
import { IonIcon } from '@ionic/angular/standalone'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  standalone: true,
  imports: [RouterLink , IonIcon , RouterLinkActive]
})
export class SideBarComponent implements OnInit {
  visibleLinks : SidebarItem[] = SIDEBAR_LINKS;

  constructor() {}

  ngOnInit() {}

  maintainSideBar(e: Event) {
    e.stopPropagation();
  }

  expanded: Record<string, boolean> = {};

  toggleDropdown(link: SidebarItem) {
    if (!link.children) return;
    this.expanded[link.title] = !this.expanded[link.title];
  }

  isExpanded(link: SidebarItem): boolean {
    return !!this.expanded[link.title];
  }
}

/**
 *  <ion-list class="menu-list">
            @for (p of pages(); track $index) {
            <div class="menu-item-container">
              <!-- Standard Menu Item -->
              @if (p.url && (!p.children || !p.children.length)) {
              <ion-menu-toggle auto-hide="false">
                <ion-item
                  [routerLink]="p.url"
                  routerDirection="root"
                  routerLinkActive="active"
                  class="parent-item"
                >
                  <ion-icon
                    [name]="p.icon"
                    slot="start"
                    class="menu-icon"
                  ></ion-icon>
                  <ion-label>{{ p.title }}</ion-label>
                </ion-item>
              </ion-menu-toggle>
              }
              <!-- Parent Item with Children -->
              @if (p && p.children && p.children.length > 0) {
              <ion-item
                button
                (click)="p.open = !p.open"
                [class.parent-active]="p.open"
                detail="false"
                class="parent-item"
              >
                <ion-icon
                  slot="start"
                  [name]="p.icon || 'folder'"
                  class="menu-icon"
                ></ion-icon>
                <ion-label>{{ p.title }}</ion-label>
                <ion-icon
                  slot="end"
                  [name]="p.open ? 'chevron-down' : 'chevron-forward'"
                  class="submenu-indicator"
                ></ion-icon>
              </ion-item>
              }
              <!-- Children List with animation -->
              <div class="submenu-container" [class.submenu-open]="p.open">
                @if (p.open) {
                <ion-menu-toggle auto-hide="false">
                  @for (sub of p.children; track sub) {
                  <ion-item
                    class="child-item"
                    [routerLink]="sub.url"
                    routerDirection="root"
                    routerLinkActive="active-child"
                  >
                    <div class="child-indent"></div>
                    <ion-icon [name]="sub.icon" class="child-icon"></ion-icon>
                    <ion-label>{{ sub.title }}</ion-label>
                  </ion-item>
                  }
                </ion-menu-toggle>
                }
              </div>
            </div>
            }
          </ion-list>  
 * 
 * 
 */