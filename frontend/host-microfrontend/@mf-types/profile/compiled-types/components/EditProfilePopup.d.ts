import React from "react";
export interface EditProfilePopupProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const EditProfilePopup: React.FC<EditProfilePopupProps>;
export default EditProfilePopup;
