import { createNote } from "../../utils/notesService"

const SidebarSticky = ({ load, setLoad }) => {

    const handleCreateNote = async () => {
        const data = await createNote()
        setLoad(!load)
        console.log(data)
    }

    return (
        <div class="sidebar-sticky">
            <div class="sidebar-header">
                <h1>Notes <span Style={{ fontSize: '14px', color: "var(--text-muted)" }}>18</span></h1>
                <button onClick={handleCreateNote} class="new-note-btn">+ New Note</button>
            </div>

            <input class="search-bar" placeholder="Search notes..." />

            <div class="filter-tabs">
                <div class="filter-tab active">All</div>
                <div class="filter-tab">Work</div>
                <div class="filter-tab">Personal</div>
                <div class="filter-tab">Ideas</div>
            </div>
        </div >
    )
}

export default SidebarSticky