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
