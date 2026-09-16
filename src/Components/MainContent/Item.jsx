import { useState, useRef, useEffect } from "react";
import useClickOutside from "../../Hooks/useClickOutside";

const Item = ({ children, type = 'p' }) => {
    const [value, setValue] = useState(children);
    const [Type, setType] = useState(type);
    const [isEditing, setIsEditing] = useState(false);
    const [style, setStyle] = useState({
        fontWeight: 'normal',
        fontStyle: 'normal',
        textDecoration: 'none',
    });
    const wrapperRef = useRef(null);

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        }
        if (e.key === 'Escape') {
            setIsEditing(false);
        }
    };

    // Toggle 1 thuộc tính style giữa 2 giá trị (bật/tắt)
    const toggleStyle = (key, activeValue, inactiveValue) => {
        setStyle((prev) => ({
            ...prev,
            [key]: prev[key] === activeValue ? inactiveValue : activeValue,
        }));
    };

    // Xử lý riêng cho textDecoration vì có thể cần cộng dồn (underline + strikethrough)
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

    useClickOutside(wrapperRef, isEditing ? handleSave : () => { });

    if (isEditing) {
        return (
            <div ref={wrapperRef} onKeyDown={handleKeyDown}>
                <input
                    autoFocus
                    style={style}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
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
            </div>
        );
    }

    return <Type style={style} onClick={() => setIsEditing(true)}>{value}</Type>;
};

export default Item;