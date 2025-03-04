import {useAuth} from "auth/useAuth";
import React, {lazy, useState} from "react";
import {ICard} from "../types/CardTypes.ts";
import api from "../utils/api.ts";

import "../blocks/places/places.css";
import "../blocks/card/card.css";

const PopupWithForm = lazy(() => import("ui/PopupWithForm"));

interface CardProps {
    cards: ICard[];
    setCards: (cards: ICard[]) => void;
    selectedCard: ICard;
    onCardClick: (card: ICard) => void;
}

const Card: React.FC<CardProps> = ({cards, setCards, selectedCard, onCardClick}) => {
    const {user} = useAuth();

    const [isRemovePopupOpen, setIsRemovePopupOpen] = useState<boolean>(false);

    const cardStyle = {backgroundImage: `url(${selectedCard.link})`};

    const isLiked = selectedCard.likes.some(i => i._id === user?._id);
    const cardLikeButtonClassName = `card__like-button ${isLiked && "card__like-button_is-active"}`;

    const isOwn = user && selectedCard.owner._id === user._id;
    const cardDeleteButtonClassName = (
        `card__delete-button ${isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"}`
    );

    const handleClick = () => {
        onCardClick(selectedCard);
    };

    const handleLikeClick = () => {
        api.changeLikeCardStatus(selectedCard._id, !isLiked)
            .then((newCard) => {
                const modifiedCards = cards.map((c) => (c._id === selectedCard._id ? newCard : c));
                setCards(modifiedCards);
            })
            .catch((err) => console.log(err));
    };

    const handleDeleteClick = () => {
        setIsRemovePopupOpen(true);
    };

    const handleDeleteApproval = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api
            .removeCard(selectedCard._id)
            .then(() => {
                const modifiedCards = cards.filter((c) => c._id !== selectedCard._id);
                setCards(modifiedCards);
            })
            .catch((err) => console.log(err))
            .finally(() => setIsRemovePopupOpen(false));
    };

    return (
        <li className="places__item card">
            <div className="card__image" style={cardStyle} onClick={handleClick}>
            </div>
            <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteClick}></button>
            <div className="card__description">
                <h2 className="card__title">
                    {selectedCard.name}
                </h2>
                <div className="card__likes">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <p className="card__like-count">{selectedCard.likes.length}</p>
                </div>
            </div>
            <PopupWithForm
                onSubmit={handleDeleteApproval}
                isOpen={isRemovePopupOpen}
                onClose={() => setIsRemovePopupOpen(false)}
                title="Вы уверены?"
                name="remove-card"
                buttonText="Да"
            />
        </li>
    );
};

export default Card;
