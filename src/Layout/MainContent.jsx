import React from 'react'
import Item from '../Components/MainContent/Item'
import ItemCreator from '../Components/MainContent/Item'

const MainContent = () => {
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

            <div className="cover-image">
                <div className="cover-icon"></div>
                <span className="add-comment">💬 Add comment</span>
            </div>

            <h1 className="note-title">Quarterly Product Strategy 2025</h1>

            <div className="metadata">
                <div className="meta-row">
                    <span className="meta-label">◎ Status</span>
                    <span className="meta-value"><span className="badge status">In Progress</span></span>
                </div>
                <div className="meta-row">
                    <span className="meta-label">⚑ Priority</span>
                    <span className="meta-value"><span className="badge priority">High</span></span>
                </div>
                <div className="meta-row">
                    <span className="meta-label">📅 Due Date</span>
                    <span className="meta-value">Nov 15, 2025</span>
                </div>
                <div className="meta-row">
                    <span className="meta-label">🏷 Tags</span>
                    <span className="meta-value">
                        <span className="badge">Product</span>
                        <span className="badge">Strategy</span>
                        <span className="badge">Roadmap</span>
                    </span>
                </div>
            </div>

            <div className="content">
                <Item>Kìa chú là chú ếch con</Item>

                <div className="callout">
                    💡 <span><strong>Key Objective:</strong> Increase daily active writing time by 35% through frictionless inline editing, instantaneous search indexing, and unified cross-linking.</span>
                </div>

                <div className="todo-list">
                    <label className="todo-item done">
                        <input type="checkbox" checked />
                        Finalize team resource allocation for Q3 deliverables
                    </label>
                    <label className="todo-item">
                        <input type="checkbox" />
                        Conduct user interviews on note organization &amp; hierarchy taxonomy
                    </label>
                </div>
            </div>

        </main>
    )
}

export default MainContent