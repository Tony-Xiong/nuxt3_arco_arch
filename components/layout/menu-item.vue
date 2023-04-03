<script lang="tsx">
import {NuxtLink} from "#components";
import {MenuItem, SubMenu} from "@arco-design/web-vue";

export default defineComponent({
    props: {
        item: {

        }
    },
    setup(props) {
        const item = props.item;
        const createMenus = (i:IMenuItem)=>{
            const item: IMenuItem = i;
            if (item && item.children && item.children.length > 0) {
                return (<SubMenu key={item.id} title={item.name}>
                    {item.children.map(i => createMenus(i))}
                </SubMenu>)
            } else {
                return (<NuxtLink to={item.url}>
                    <MenuItem key={item.url}>
                        {item.name}
                    </MenuItem>
                </NuxtLink>)
            }
        }
        return ()=>createMenus(item)
    }
})
</script>