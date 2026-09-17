import { useState, useRef } from "react";
import useClickOutside from "../../Hooks/useClickOutside";

const Item = ({ id, content, type = 'p', onSave, onEnter, onDeleteEmpty, addItem }) => {
    const [value, setValue] = useState(content);
    const [Type, setType] = useState(type);
    const [isEditing, setIsEditing] = useState(!content); // rỗng thì tự mở edit luôn
    const [style, setStyle] = useState({
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
    });
    const wrapperRef = useRef(null);
    const [showToolbar, setShowToolbar] = useState(false);

    const handleInputBlur = (e) => {
        if (wrapperRef.current && wrapperRef.current.contains(e.relatedTarget)) {
            return;
        }
        setShowToolbar(false);
    };

    const handleSelect = (e) => {
        const hasSelection = e.target.selectionStart !== e.target.selectionEnd;
        setShowToolbar(hasSelection);
    };

    const handleSave = () => {
        setIsEditing(false);
        onSave(id, value, Type);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSave();
            const newId = onEnter(id);

            setTimeout(() => {
                document.querySelector(`[data-id="${newId}"]`)?.focus();
            }, 0);
        }

        if (e.key === 'Backspace' && value === '') {
            e.preventDefault();
            onDeleteEmpty(id);
        }

        if (e.key === 'Escape') {
            setValue(content);
            setIsEditing(false);
        }
    };

    useClickOutside(wrapperRef, isEditing ? handleSave : () => { });

    const toggleStyle = (key, activeValue, inactiveValue) => {
        setStyle((prev) => ({
            ...prev,
            [key]: prev[key] === activeValue ? inactiveValue : activeValue,
        }));
    };

    const toggleDecoration = (decoration) => {
        setStyle((prev) => {
            const current = prev.textDecoration.split(' ').filter(d => d !== 'none');
            const has = current.includes(decoration);
            const next = has
                ? current.filter(d => d !== decoration)
                : [...current, decoration];
            return {
                ...prev,
                textDecoration: next.length ? next.join(' ') : 'none',
            };
        });
    };

    if (isEditing) {
        return (
            <div ref={wrapperRef} onKeyDown={handleKeyDown} className="block">
                <input
                    autoFocus
                    Style={style}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onSelect={handleSelect}
                    onBlur={handleInputBlur}
                />
                {showToolbar && (
                    <div className="toolbar">
                        <select
                            value={Type}
                            onChange={(e) => setType(e.target.value)}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            <option value="p">Text</option>
                            <option value="h1">H1</option>
                            <option value="h2">H2</option>
                            <option value="h3">H3</option>
                            <option value="h4">H4</option>
                            <option value="h5">H5</option>
                        </select>

                        <button
                            className={style.fontWeight === 'bold' ? 'active' : ''}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => toggleStyle('fontWeight', 'bold', 'normal')}
                        >
                            <b>B</b>
                        </button>

                        <button
                            className={style.fontStyle === 'italic' ? 'active' : ''}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => toggleStyle('fontStyle', 'italic', 'normal')}
                        >
                            <i>I</i>
                        </button>

                        <button
                            className={style.textDecoration.includes('underline') ? 'active' : ''}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => toggleDecoration('underline')}
                        >
                            <u>U</u>
                        </button>

                        <button
                            className={style.textDecoration.includes('line-through') ? 'active' : ''}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() => toggleDecoration('line-through')}
                        >
                            <s>S</s>
                        </button>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="block">
            <button
                unselectable="on"
                className="add-block-btn"
                onClick={() => addItem(id)}
            >
                +
            </button>
            <Type Style={style} onClick={() => setIsEditing(true)}>{value}</Type>
        </div>
    );
};

export default Item;