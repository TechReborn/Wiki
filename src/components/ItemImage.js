import React from 'react';

export default function ItemImage({file, alt, size}) {
    const imagePath = file ? `/img/techreborn/${file}.png` : '';
    return (
        <img src={imagePath}
            alt={alt}  
            style={{float: 'right'}}
            width={size} />
    );
}

