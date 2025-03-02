import React from "react";
import { ICard } from "../types/CardTypes.ts";
export interface AddPlacePopup {
    cards: ICard[];
    setCards: (cards: ICard[]) => void;
    isOpen: boolean;
    onClose: () => void;
}
declare const AddPlacePopup: React.FC<AddPlacePopup>;
export default AddPlacePopup;
