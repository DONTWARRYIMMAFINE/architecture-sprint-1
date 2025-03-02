import React, {lazy} from "react";
import {CreateCard, ICard} from "../types/CardTypes.ts";
import api from "../utils/api.ts";

const PopupWithForm = lazy(() => import("ui/PopupWithForm"));

export interface AddPlacePopup {
    cards: ICard[],
    setCards: (cards: ICard[]) => void,
    isOpen: boolean;
    onClose: () => void;
}

const AddPlacePopup: React.FC<AddPlacePopup> = ({cards, setCards, isOpen, onClose}) => {
    const [name, setName] = React.useState<string>("");
    const [link, setLink] = React.useState<string>("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLink(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onAddPlace({
            name,
            link,
        });
    };

    const onAddPlace = (newCard: CreateCard) => {
        api.addCard(newCard)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                onClose();
            })
            .catch((err) => console.log(err));
    };

    return (
        <PopupWithForm
            isOpen={isOpen} onSubmit={handleSubmit} onClose={onClose} title="Новое место" name="new-card"
        >
            <label className="popup__label">
                <input type="text" name="name" id="place-name"
                       className="popup__input popup__input_type_card-name" placeholder="Название"
                       required minLength={1} maxLength={30} value={name} onChange={handleNameChange}/>
                <span className="popup__error" id="place-name-error"></span>
            </label>
            <label className="popup__label">
                <input type="url" name="link" id="place-link"
                       className="popup__input popup__input_type_url" placeholder="Ссылка на картинку"
                       required value={link} onChange={handleLinkChange}/>
                <span className="popup__error" id="place-link-error"></span>
            </label>
        </PopupWithForm>
    );
};

export default AddPlacePopup;
