import { Component, Input } from '@angular/core';
import { ArrayDataSource } from '@angular/cdk/collections';
import { NestedTreeControl } from '@angular/cdk/tree';

@Component({
    selector: 'app-tree-grid',
    templateUrl: './tree-grid.component.html',
    styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent<T> {
    @Input() set items(data: T[]) {
        this.dataSource = new ArrayDataSource(data);
    }
    dataSource: ArrayDataSource<T>;
    treeControl = new NestedTreeControl<any>(node => node.children);
    hasChildren = (_: number, node: Node<T>) =>
        !!node.children && node.children.length;
}

export interface Node<T> {
    children?: T[];
}
