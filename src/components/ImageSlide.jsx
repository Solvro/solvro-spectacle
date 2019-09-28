import {Title} from "../solvro-light-components";
import React from "react";
import {Slide} from "spectacle";

const JSHistorySlide = ({title, image, imageStyle, background, ...props}) => (
    <Slide
        style={{background}}
        {...props}
    >
        {
            title &&
            <Title style={{
                position: 'absolute',
                transform: 'translate(-50%)',
                top: 30,
                left: '50%',
                margin: '0 !important'
            }}>
                {title}
            </Title>
        }
        <img
            src={image}
            style={{
                width: "70%",
                objectFit: "contain",
                borderRadius: 5,
                ...imageStyle
            }}
        />
    </Slide>
);

export default JSHistorySlide;
