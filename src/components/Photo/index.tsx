import React from 'react';
import { photoObject, imageStyle } from '../../types';
type PhotoProps = {
    photo: photoObject,
    margin: any,
    direction: string,
    top: number;
    left: number;
    key: number;
    onClick: any;
};

const Photo: React.FC<PhotoProps> = ({ photo, margin, direction, top, left, key, onClick }: PhotoProps) => {
    const imgStyle: imageStyle = { margin: margin, display: 'block' };
    if (direction === 'column') {
        imgStyle.left = left;
        imgStyle.top = top;
    }

    return (
        <img
            key={key}
            style={imgStyle}
            {...photo}
            onClick={onClick}
        />
    );
};

export default Photo;
