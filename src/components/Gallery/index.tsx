import React, { useState, useEffect } from 'react';
import { photoObject } from "../../types";
import photosData from '../../data/';
import Photo from "../Photo";
const Gallery = () => {
    const [photos, setPhotos] = useState<photoObject[]>(photosData);
    const [photo, setPhoto] = useState<photoObject | null>(null);

    useEffect(() => {
        if(photo != null)
            setPhotos(p => p.filter((item: photoObject) => photo !== item ));
    },[photo]);

    return (<div className="gallery">
        {photos.map((photo:photoObject, index: number) =>
            <div className="photo">
                <Photo photo={photo} margin={4} direction='column' top={0} left={0} key={index} onClick={() => setPhoto(photo)} />
            </div>
        )}
        </div>)
};

export default Gallery
