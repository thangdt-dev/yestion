import { useEffect, useState } from "react"
import { getAllNotes } from "../../utils/notesService"
import timeAgo from "../../utils/timeAgo"

export const SidebarList = ({ load }) => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        handleLoad()
        console.log(notes)
    }, [load])

    const handleLoad = async () => {
        const res = await getAllNotes()
        console.log(res)
        setNotes(res)
    }

    return (
        <div class="note-list">
            {notes.map((note) => {
                return (
                    <div class="note-item active" key={note.id}>
                        <div class="note-item-header">
                            <span class="note-item-title">
                                {note.title}
                            </span>
                            <span class="note-item-time">
                                {timeAgo(note.created_at)}
                            </span>
                        </div>
                        {/* <div class="note-item-tags">
                            <span class="badge">In Progress</span>
                            <span class="badge">Product</span>
                        </div> */}
                    </div>
                )
            })}
        </div>
    )
}
