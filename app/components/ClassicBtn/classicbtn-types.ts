import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface ClassicBtnPorps {
    title: string;
    onPress: () => void;
    color?: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}