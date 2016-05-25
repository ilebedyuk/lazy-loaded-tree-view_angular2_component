import {TreeNode} from "./tree-node";
import {Store} from "./redux/store";
import {TreeNodeService} from "./tree-node.service";
import {Component, OnInit, Input} from "@angular/core";

@Component({
  selector:'tree-view',
  templateUrl:'app/tree-view.component.html',
  styleUrls: ['app/tree-view.component.css'],
  directives:[TreeView]
})

export class TreeView implements OnInit{

  @Input() root:TreeNode;
  items: any = [];
  subscription:any = {};

  constructor(private _store:Store, private _treeNodeService:TreeNodeService){}

  ngOnInit(){
    this.subscription = this._store.getTreeNodes(this.root.key).subscribe(res => {
      this.items = res;
    });
    this._treeNodeService.loadTreeNodes(this.root);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}