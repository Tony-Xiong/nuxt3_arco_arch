export {}

declare global {
    interface IMenuItem extends TreeNode{
        name: string
        level: number;
        id: string;
        lcode: string;
        code: string;
        pid: string;
        sequ: number;
        url: string;
        children: IMenuItem[];
    }
    interface ISideMenu {
        [key: string]: IMenuItem;
    }

    interface IMenuResp {
        lcode: string;
        code: string;
        pid: string;
        treeLevel: number;
        isLeafNode: number;
        id: string;
        name: string;
        addTime: string;
        addId: string;
        addName: string;
        updateTime: string;
        updateId: string;
        updateName: string;
        status: string;
        sequ: number;
        children: [];
        syncTime: string;
        component: string;
        menuStyle: string;
        menuShowPlace: string;
        isPublic: null;
        isShowProjChose: 1;
        iconCls: string;
        nature: string;
        url: string;
        enabled: number
    }
}
