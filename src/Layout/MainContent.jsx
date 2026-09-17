import { useState } from 'react';
import Item from '../Components/MainContent/Item'
import { Tag, Calendar } from '../Components/Icons'
import CoverImage from '../Components/MainContent/CoverImage';

const MainContent = () => {
    const [items, setItems] = useState([
        { id: 1, type: 'p', content: 'Kìa chú là chú ếch con' },
    ]);

    const addItem = (afterId) => {
        const newItem = { id: Date.now(), type: 'p', content: '' };
        setItems((prev) => {
            const index = prev.findIndex((i) => i.id === afterId);
            const next = [...prev];
            next.splice(index + 1, 0, newItem);
            return next;
        });
        return newItem.id;
    };

    const deleteItem = (id) => {
        setItems((prev) => prev.filter((i) => i.id !== id));
    };

    const updateItem = (id, newContent, newType) => {
        setItems((prev) =>
            prev.map((i) =>
                i.id === id ? { ...i, content: newContent, type: newType } : i
            )
        );
    }

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

            <h1 className="note-title">Quarterly Product Strategy 2025</h1>

            <div className="metadata">
                <div className="meta-row">
                    <span className="meta-label"><Calendar width="20px" height="20px" /> Due Date</span>
                    <span className="meta-value">Nov 15, 2025</span>
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
                {items.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        content={item.content}
                        onSave={updateItem}
                        onEnter={addItem}
                        onDeleteEmpty={deleteItem}
                        addItem={addItem}
                    />
                ))}
            </div>

        </main>
    )
}

export default MainContent