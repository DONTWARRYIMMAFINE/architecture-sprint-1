import React from "react";
import { ICard } from "../types/CardTypes.ts";
import "../blocks/places/places.css";
import "../blocks/card/card.css";
interface CardProps {
    cards: ICard[];
    setCards: (cards: ICard[]) => void;
    selectedCard: ICard;
    onCardClick: (card: ICard) => void;
}
declare const Card: React.FC<CardProps>;
export default Card;
