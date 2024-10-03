import { useEffect, useState } from "react";

function Avatar() {
    const [avatar, setAvatar] = useState();
    const handleChangeAvatar = (e) => {
        const file = e.target.files[0];
        file.previewUrl = URL.createObjectURL(file);
        setAvatar(file);
    }

    useEffect(() => {
        return () => avatar && URL.revokeObjectURL(avatar.previewUrl)
    }, [avatar]);

    return (
        <div>
            <input type="file" onChange={handleChangeAvatar}/>
            {avatar && <img src={avatar.previewUrl} alt={avatar.name} width="50%"/>}
        </div>
    )
}

export default Avatar;