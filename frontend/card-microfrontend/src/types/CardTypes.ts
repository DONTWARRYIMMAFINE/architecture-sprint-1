export interface Like {
    _id: string;
}

export interface CardOwner {
    _id: string;
}

export interface ICard {
    _id: string;
    name: string;
    link: string;
    likes: Like[];
    owner: CardOwner;
}

export interface CreateCard {
    name: string;
    link: string;
}

export interface CardContextType {
    cards: ICard[];
    setCards: (cards: ICard[]) => void;
}
