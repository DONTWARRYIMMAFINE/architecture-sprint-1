import React from "react";
import { ICard } from "../types/CardTypes.ts";
interface ImagePopupProps {
    card: ICard | null;
    onClose: () => void;
}
declare const ImagePopup: React.FC<ImagePopupProps>;
export default ImagePopup;
