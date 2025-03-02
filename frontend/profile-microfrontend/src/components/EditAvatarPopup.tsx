import {UserData} from "auth/compiled-types/types/AuthTypes";
import {useAuth} from "auth/useAuth";
import React, {lazy} from "react";
import api from "../utils/api.ts";

const PopupWithForm = lazy(() => import("ui/PopupWithForm"));

export interface EditAvatarPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const EditAvatarPopup: React.FC<EditAvatarPopupProps> = ({isOpen, onClose}) => {
    const {setUser} = useAuth();
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onUpdateAvatar = (avatarUpdate: Pick<UserData, "avatar">) => {
        api.setUserAvatar(avatarUpdate)
            .then((newUserData) => {
                setUser(newUserData);
                onClose();
            })
            .catch((err) => console.log(err));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            onUpdateAvatar({avatar: inputRef.current.value});
        }
    };

    return (
        <PopupWithForm
            isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title="Обновить аватар" name="edit-avatar"
        >
            <label className="popup__label">
                <input type="url" name="avatar" id="owner-avatar"
                       className="popup__input popup__input_type_description" placeholder="Ссылка на изображение"
                       required ref={inputRef}/>
                <span className="popup__error" id="owner-avatar-error"></span>
            </label>
        </PopupWithForm>
    );
};

export default EditAvatarPopup;
