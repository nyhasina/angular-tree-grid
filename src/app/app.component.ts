import { Component } from '@angular/core';
import { Node } from './tree-grid/tree-grid.component';

interface Category extends Node<Category> {
    name: string;
    parent?: string;
}

const TREE_DATA: Category[] = [
    {
        name: 'Pizza',
        children: [
            {
                name: 'Pizza GM',
                parent: 'Pizza',
                children: [
                    {
                        name: 'Pizza sans porc',
                        parent: 'Pizza GM'
                    },
                    {
                        name: 'Pizza avec porc',
                        parent: 'Pizza GM'
                    }
                ]
            },
            {
                name: 'Pizza PM',
                parent: 'Pizza',
                children: [
                    {
                        name: 'Pizza sans porc',
                        parent: 'Pizza PM'
                    },
                    {
                        name: 'Pizza avec porc',
                        parent: 'Pizza PM'
                    }
                ]
            }
        ]
    },
    {
        name: 'Glace'
    },
    {
        name: 'Boissons',
        children: [
            {
                name: 'Boissons PM',
                parent: 'Boisson'
            },
            {
                name: 'Boissons GM',
                parent: 'Boisson'
            }
        ]
    }
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    treeData = TREE_DATA;
}
