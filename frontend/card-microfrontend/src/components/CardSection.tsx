import React, {useEffect, useState} from "react";
import {ICard} from "../types/CardTypes.ts";
import api from "../utils/api.ts";
import AddPlacePopup from "./AddPlacePopup.tsx";
import Card from "./Card.tsx";
import ImagePopup from "./ImagePopup.tsx";

const CardSection: React.FC = () => {
    const [cards, setCards] = useState<ICard[]>([]);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<ICard | null>(null);

    useEffect(() => {
        api.getCardList()
            .then(setCards)
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        addEventListener("add-place", handleAddPlaceEvent);
        return () => removeEventListener("add-place", handleAddPlaceEvent);
    }, []);

    const handleOnCardClick = (card: ICard) => {
        setSelectedCard(card);
    };

    const handleAddPlaceEvent = () => {
        setIsAddPlacePopupOpen(true);
    };

    return (<>
        <section className="places page__section">
            <ul className="places__list">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        cards={cards}
                        setCards={setCards}
                        selectedCard={card}
                        onCardClick={handleOnCardClick}
                    />
                ))}
            </ul>
        </section>
        <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)}/>
        <AddPlacePopup
            cards={cards}
            setCards={setCards}
            isOpen={isAddPlacePopupOpen}
            onClose={() => setIsAddPlacePopupOpen(false)}
        />
    </>);
};

export default CardSection;
