import {TreeNode} from "../tree-node";

export const treeNodeReducer = (state: any = [], action: any = {}) => {
  switch (action.name) {

    case 'LOAD_NODES':
      return state.nodes.map((n : any) => {
        return new TreeNode(n.key,n.url,n.name);
      });

  }
};