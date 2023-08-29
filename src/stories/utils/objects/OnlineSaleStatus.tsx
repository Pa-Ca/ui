import { IconType } from "../../atoms/icon/Icon";

type OnlineSaleStatusObject = {
    /**
     * Numerical value
     */
    number: number;
    /**
     * Standard name of the status
     */
    name: string;
    /**
     * Name to show to the user
     */
    nameShow: string;

    /**
     * Name to icon that corresponds with the status in UI
     */
    icon: IconType;
};

export { type OnlineSaleStatusObject as default };  