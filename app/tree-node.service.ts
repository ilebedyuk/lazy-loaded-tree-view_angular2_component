import {Injectable} from "@angular/core";
import {Store} from "./redux/store";
import {TreeNode} from "./tree-node";

@Injectable()
export class TreeNodeService{

  constructor(private _store:Store){}

  loadTreeNodes(root: TreeNode){
    if(root.url) {
      this._store.dispatchAction({key: root.key, url: root.url, name: 'LOAD_NODES'});
    }
  }
}