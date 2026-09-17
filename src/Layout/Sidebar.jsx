import SidebarSticky from '../Components/Sidebar/SidebarSticky'
import { SidebarList } from '../Components/Sidebar/SidebarList'

const Sidebar = () => {
    return (
        <aside class="sidebar">
            <SidebarSticky />

            <SidebarList />
        </aside>
    )
}

export default Sidebar