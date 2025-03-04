import React, { FC, PropsWithChildren } from "react";
import "../blocks/popup/popup.css";
import "../blocks/popup/_is-opened/popup_is-opened.css";
export interface PopupWithFormProps extends PropsWithChildren {
    title: string;
    name: string;
    isOpen: boolean;
    buttonText?: string;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onClose: () => void;
}
declare const PopupWithForm: FC<PopupWithFormProps>;
export default PopupWithForm;
