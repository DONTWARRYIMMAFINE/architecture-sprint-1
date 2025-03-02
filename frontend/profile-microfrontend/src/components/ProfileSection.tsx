import {useAuth} from "auth/useAuth";
import React, {useEffect, useState} from "react";
import api from "../utils/api.ts";
import EditAvatarPopup from "./EditAvatarPopup.tsx";
import EditProfilePopup from "./EditProfilePopup.tsx";

import "../blocks/profile/profile.css";

const ProfileSection: React.FC = () => {
    const {user, setUser} = useAuth();

    const [isEditeAvatarPopupOpen, setIsEditeAvatarPopupOpen] = useState<boolean>(false);
    const [isEditeProfilePopupOpen, setIsEditeProfilePopupOpen] = useState<boolean>(false);

    useEffect(() => {
        api.getUserInfo()
            .then((res) => setUser({...user, ...res}))
            .catch(err => console.log(err));
    }, []);

    const imageStyle = {backgroundImage: `url(${user?.avatar})`};

    const handleOnAddPlaceClick = () => {
        dispatchEvent(new CustomEvent("add-place"));
    };

    return (<>
        <section className="profile page__section">
            <div className="profile__image" onClick={() => setIsEditeAvatarPopupOpen(true)}
                 style={imageStyle}></div>
            <div className="profile__info">
                <h1 className="profile__title">{user?.name}</h1>
                <button className="profile__edit-button" type="button"
                        onClick={() => setIsEditeProfilePopupOpen(true)}></button>
                <p className="profile__description">{user?.about}</p>
            </div>
            <button className="profile__add-button" type="button" onClick={handleOnAddPlaceClick}></button>
        </section>
        <EditAvatarPopup
            isOpen={isEditeAvatarPopupOpen}
            onClose={() => setIsEditeAvatarPopupOpen(false)}
        />
        <EditProfilePopup
            isOpen={isEditeProfilePopupOpen}
            onClose={() => setIsEditeProfilePopupOpen(false)}
        />
    </>);
};

export default ProfileSection;
