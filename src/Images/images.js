import star from './star.png';

const images = {
    star,
};

export function getImage(imageName) {
    return images[imageName];
}
