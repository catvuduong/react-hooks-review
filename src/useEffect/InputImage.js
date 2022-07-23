import React, { useEffect, useState } from 'react';

const InputImage = () => {

    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file);

        setAvatar(file)

        e.target.value = null;
    }

    return (
        <div>
            <input type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar &&
                <img src={avatar.preview} alt="" width={200} />
            }
        </div>
    );
}

export default InputImage;
