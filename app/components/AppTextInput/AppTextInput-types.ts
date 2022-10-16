import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInputProps } from 'react-native'

export interface AppTextInputProps {
    placeholder: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    isPassword?: boolean;
    size?: number;
    otherProps?: TextInputProps;
    backgroundColor?: string; 
}