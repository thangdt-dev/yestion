import { useState, useEffect } from 'react';
import { Upload } from '../Icons';

const CoverIcon = () => {
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    useEffect(() => {
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        // dọn URL cũ khi file đổi hoặc component unmount
        return () => URL.revokeObjectURL(url);
    }, [file]);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        setFile(selectedFile);
    };

    return (
        <div className="cover-icon"
            style={{
                backgroundImage: previewUrl ? `url(${previewUrl})` : 'url(https://picsum.photos/300/300?random=1)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <label htmlFor="file-upload-cover"><Upload width="12px" height="12px" /></label>
            <input
                type="file"
                id="file-upload-cover"
                name="file-upload-cover"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />
        </div>
    )
}

export default CoverIcon