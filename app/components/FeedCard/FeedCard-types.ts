export interface PubliCardProps {
    avatarSource: any;
    nbComments: number;
    nbLikes?: number;
    textContent: string;
    imageSource?: any;
    userName: string;
    name: string;
    publicationTime: string;
    onPpPress: () => void;
}