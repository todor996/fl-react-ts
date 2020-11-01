import React, { useState } from 'react';
import { photoObject } from "../../types";
import photosData from '../../data/';
import Photo from "../Photo";
const Gallery = () => {
    const [photos] = useState<photoObject[]>(photosData);

    return (<div>
        {photos.map((photo:photoObject, index: number) =>
            <Photo photo={photo} margin={4} direction='column' top={0} left={0} key={index} />
        )}
        </div>)
};

export default Gallery
