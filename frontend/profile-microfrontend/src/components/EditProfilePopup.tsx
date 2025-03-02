import {UserData} from "auth/compiled-types/types/AuthTypes";
import {useAuth} from "auth/useAuth";
import React, {lazy, useEffect} from "react";
import api from "../utils/api.ts";

const PopupWithForm = lazy(() => import("ui/PopupWithForm"));

export interface EditProfilePopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const EditProfilePopup: React.FC<EditProfilePopupProps> = ({isOpen, onClose}) => {
    const {user, setUser} = useAuth();

    const [name, setName] = React.useState<string>("");
    const [description, setDescription] = React.useState<string>("");

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setDescription(user.about || "");
        }
    }, [user]);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onUpdateUser({name, about: description});
    };

    const onUpdateUser = (userUpdate: Pick<UserData, "name" | "about">) => {
        api.setUserInfo(userUpdate)
            .then((newUserData) => {
                setUser(newUserData);
                onClose();
            })
            .catch((err) => console.log(err));
    };

    return (
        <PopupWithForm
            isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title="Редактировать профиль" name="edit"
        >
            <label className="popup__label">
                <input type="text" name="userName" id="owner-name"
                       className="popup__input popup__input_type_name" placeholder="Имя"
                       required minLength={2} maxLength={40} pattern="[a-zA-Zа-яА-Я -]{1,}"
                       value={name || ""} onChange={handleNameChange}/>
                <span className="popup__error" id="owner-name-error"></span>
            </label>
            <label className="popup__label">
                <input type="text" name="userDescription" id="owner-description"
                       className="popup__input popup__input_type_description" placeholder="Занятие"
                       required minLength={2} maxLength={200}
                       value={description || ""} onChange={handleDescriptionChange}/>
                <span className="popup__error" id="owner-description-error"></span>
            </label>
        </PopupWithForm>
    );
};

export default EditProfilePopup;
