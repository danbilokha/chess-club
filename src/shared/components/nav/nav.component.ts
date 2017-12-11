import { Component } from '@angular/core';

import ILink from '../../../assets/pages/ILink';
import links from '../../../assets/pages/links.js';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'chess-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export default class NavComponent {
    links: Array<ILink> = links
}
