"use client"
import { useState } from 'react';
import Image from 'next/image';

const Thumbslider = ({ images }) => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleThumbnailClick = (index) => {
      setSelectedImageIndex(index);
    };


    return (
        <div className="thumbnail-slider">
          <div className="main-image-container">
            <Image
              src={images[selectedImageIndex]}
              alt={`Image ${selectedImageIndex + 1}`}
              width={800}
              height={600}
            />
          </div>
          <div className="thumbnail-container  flex gap-2 mt-2">
            {images.map((image, index) => (
              <div
                key={index}
                className={`thumbnail ${index === selectedImageIndex ? 'selected' : ''}`}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image 
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={100}
                  height={75}
                />
              </div>
            ))}
          </div>
        </div>
      );
}

export default Thumbslider