import SidebarSticky from '../Components/Sidebar/SidebarSticky'
import { SidebarList } from '../Components/Sidebar/SidebarList'
import { useState } from 'react'

const Sidebar = () => {
    const [load, setLoad] = useState(false)

    return (
        <aside class="sidebar">
            <SidebarSticky load={load} setLoad={setLoad} />

            <SidebarList load={load} setLoad={setLoad} />
        </aside>
    )
}

export default Sidebar