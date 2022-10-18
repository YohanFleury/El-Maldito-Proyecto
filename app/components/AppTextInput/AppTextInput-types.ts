import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputProps, StyleProp, } from 'react-native'

export interface AppTextInputProps {
    placeholder: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    isPassword?: boolean;
    size?: number;
    otherProps?: TextInputProps;
    backgroundColor?: string; 
    autoFocus?: boolean;
    widthContainer?: string;
}