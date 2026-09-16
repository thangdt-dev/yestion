import React from 'react'

const SidebarSticky = () => {
    return (
        <div class="sidebar-sticky">
            <div class="sidebar-header">
                <h1>Notes <span Style="font-size:14px;color:var(--text-muted);">18</span></h1>
                <button class="new-note-btn">+ New Note</button>
            </div>

            <input class="search-bar" placeholder="Search notes..." />

            <div class="filter-tabs">
                <div class="filter-tab active">All</div>
                <div class="filter-tab">Work</div>
                <div class="filter-tab">Personal</div>
                <div class="filter-tab">Ideas</div>
            </div>
        </div>
    )
}

export default SidebarSticky