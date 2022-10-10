import { ViewPropsAndroid } from "react-native";

export interface AccountProProps {
    userName: string;
    accountName: string;
    coverPictureSource?: string;
    profilPictureSource?: string;
    ppSize: number;
    onPressProfilPicture: () => void;
}

export interface BoldProps {
    children: string
}