import { useEffect, useState } from 'react';
import Item from '../Components/MainContent/Item'
import { Tag, Calendar } from '../Components/Icons'
import CoverImage from '../Components/MainContent/CoverImage';
import { getNoteById } from '../utils/notesService';

const MainContent = ({ note }) => {
    const [item, setItem] = useState(null)

    useEffect(() => {
        if (!note) return

        const fetchNote = async () => {
            const res = await getNoteById(note)
            setItem(res)
        }

        fetchNote(note)

    }, [note])



    // const addItem = (afterId) => {
    //     const newItem = { id: Date.now(), type: 'p', content: '' };
    //     setItems((prev) => {
    //         const index = prev.findIndex((i) => i.id === afterId);
    //         const next = [...prev];
    //         next.splice(index + 1, 0, newItem);
    //         return next;
    //     });
    //     return newItem.id;
    // };

    // const deleteItem = (id) => {
    //     setItems((prev) => prev.filter((i) => i.id !== id));
    // };

    // const updateItem = (id, newContent, newType) => {
    //     setItems((prev) =>
    //         prev.map((i) =>
    //             i.id === id ? { ...i, content: newContent, type: newType } : i
    //         )
    //     );
    // }

    if (!item) return <div className="empty-state">Chọn một note để xem</div>   // 👈 thêm dòng này

    document.title = item.title

    return (
        <main className="editor">

            <div className="editor-breadcrumb">
                <div>Personal Workspace &gt; Notes &gt; Quarterly Product Strategy 2025</div>
                <div className="editor-breadcrumb-right">
                    <span>642 words</span>
                    <span>Edited 2 mins ago</span>
                    <span>Share</span>
                </div>
            </div>

            {/* cover image */}
            <CoverImage />

            <h1 className="note-title">{item.title}</h1>

            <div className="metadata">
                <div className="meta-row">
                    <span className="meta-label"><Calendar width="20px" height="20px" /> Due Date</span>
                    <span className="meta-value">{new Date(item.create_at).toLocaleString()}</span>
                </div>
                <div className="meta-row">
                    <span className="meta-label"><Tag width="20px" height="20px" /> Tags</span>
                    <span className="meta-value">
                        <span className="badge">Product</span>
                        <span className="badge">Strategy</span>
                        <span className="badge">Roadmap</span>
                    </span>
                </div>
            </div>

            <div className="content">
                {/* <Item
                    key={item.id}
                    id={item.id}
                    type={item.type}
                    content={item.content}
                    onSave={updateItem}
                    onEnter={addItem}
                    onDeleteEmpty={deleteItem}
                    addItem={addItem}
                /> */}
            </div>

        </main>
    )
}

export default MainContent