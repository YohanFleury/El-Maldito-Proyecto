import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ViewStyle } from 'react-native'

export interface ClassicBtnPorps {
    title: string;
    onPress: () => void;
    color?: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    style?: ViewStyle
}