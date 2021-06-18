import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import './ImageSlider.css';


function ImageSlider() {

    const image = [
        {
            url: "https://image.shutterstock.com/image-photo/double-exposure-businessman-using-digital-600w-1891710454.jpg"
        },
        {
            url: "https://image.shutterstock.com/image-photo/business-people-shaking-hands-finishing-600w-420967090.jpg"
        },
        {
            url: "https://image.shutterstock.com/image-photo/business-people-shaking-hands-finishing-600w-420967090.jpg"
        }
    
    ];

    console.log(image.length);
    const[current, setCurrent]= useState(0);
    const length = image && image.length;

    const nextSlide = ()=> {
        setCurrent(current === length -1 ? 0 : current + 1)

    }

    const prevSlide = ()=> {
        setCurrent(current === 0 ? length - 1 : current - 1)
        
    }

    if(!Array.isArray(image) || image.length <= 0){
        return null;
    }

    return (
        <>
            <section className="slider">
                <FontAwesomeIcon icon={faBackward} className="left_arrow" onClick={prevSlide}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faForward} className="right_arrow" onClick={nextSlide}></FontAwesomeIcon>
                    {image.map((slide, index) => {
                        return(
                        <div className={index === current ? 'slider:active' : 'slider'} key={index}>
                            {index === current && (
                            <img src={slide.url} alt={slide} className="image" id="image"></img>
                            )}
                        </div>
                        )
                    })}
            </section>   
        </>
    )
};

export default ImageSlider;