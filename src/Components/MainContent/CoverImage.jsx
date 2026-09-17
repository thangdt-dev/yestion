import { useState, useEffect } from 'react';
import { Comment, Upload } from '../Icons';
import CoverIcon from './CoverIcon';

const CoverImage = () => {
    const [file, setFile] = useState()
    const [previewUrl, setPreviewUrl] = useState()

    useEffect(() => {
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        return () => URL.revokeObjectURL(url);
    }, [file])

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        setFile(selectedFile);
    };

    return (
        <div className="cover-image"
            style={{
                backgroundImage: previewUrl ? `url(${previewUrl})` : 'url(https://picsum.photos/1000/700?random=1)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='cover-image-upload'>
                <label htmlFor="file-upload-image"><Upload color="var(--accent)" width="28px" height="28px" /></label>
                <input
                    type="file"
                    id="file-upload-image"
                    name="file-upload-image"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
            </div>
            <CoverIcon />
            <span className="add-comment"><Comment width="12px" height="12px" /> Add comment</span>
        </div>
    )
}

export default CoverImage