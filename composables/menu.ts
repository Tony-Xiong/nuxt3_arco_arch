import {defineStore} from "pinia";
export const useMenuStore = defineStore('menu', {
    state: () => ({
        topMenuList: new Array<IMenuItem>(),
        activeTopMenu: 0
    }),
    getters: {
        getTopMenuList(): IMenuItem[] {
            return this.topMenuList
        }
        ,
        getSideMenu():IMenuItem {
            return this.topMenuList[this.activeTopMenu]
        }
    },
    actions: {
        setActiveTopMenu(index: number) {
            this.activeTopMenu = Number(index)
        },
        async init() {
            const { data } = await useFetch('/api/menu');
            const menus = data.value;
            const map = new Map<string, Set<IMenuItem>>()
            const firstLevel: Set<IMenuItem> = new Set<IMenuItem>();
            if (menus) {
                for (const index in menus) {
                    let item = {
                        id: menus[index].id,
                        pid: menus[index].pid,
                        sequ: Number(menus[index].sequ),
                        name: menus[index].name,
                        code: menus[index].code,
                        lcode: menus[index].lcode,
                        level: Number(menus[index].treeLevel),
                        url: menus[index].url,
                        children: []
                    }
                    if (menus[index].menuStyle == 'navbar') {
                        firstLevel.add(item)
                    }
                    if (map.get(item.pid)){
                        map.get(item.pid)?.add(item)
                    } else {
                        map.set(item.pid, new Set<IMenuItem>([item]))
                    }
                }
                fillTree(firstLevel, map)
                this.topMenuList = Array.of(...firstLevel)
            }

        }
    }
})