import star from './star.png';

const images: any = {
    star,
};

export function getImage(imageName: string) {
    return images[imageName];
}
