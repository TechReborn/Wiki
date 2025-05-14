import React from 'react';

export default function ItemImage({file, alt, size, float = 'right'}) {
    const imagePath = file ? `/img/techreborn/${file}.png` : '';
    return (
        <img src={imagePath}
            alt={alt}  
            style={{float}}
            width={size} />
    );
}

