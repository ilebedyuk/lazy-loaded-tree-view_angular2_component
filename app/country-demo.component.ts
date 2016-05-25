import {Component} from "@angular/core";
import {HTTP_PROVIDERS} from "@angular/http";
import {TreeView} from "./tree-view.component";
import {TreeNode} from "./tree-node";
import {Store} from "./redux/store";
import {TreeNodeService} from "./tree-node.service";

@Component({
  selector: 'tree-view-demo',
  template:`<tree-view [root]="node"></tree-view>`,
  directives:[TreeView],
  providers:[
    Store,
    TreeNodeService,
    HTTP_PROVIDERS]
})

export class CountryDemo{
  node:TreeNode = null;

  ngOnInit(){
    this.node = new TreeNode('root','./tree-view-data/countries.json', '');
  }
}