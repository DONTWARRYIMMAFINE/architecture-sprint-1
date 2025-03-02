import React from "react";
import "../blocks/popup/popup.css";
import "../blocks/popup/_is-opened/popup_is-opened.css";
export interface InfoTooltipProps {
    isOpen: boolean;
    onClose: () => void;
    status: "success" | "fail" | null;
}
declare const InfoTooltip: React.FC<InfoTooltipProps>;
export default InfoTooltip;
