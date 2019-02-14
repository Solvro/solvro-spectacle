// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Deck
} from 'spectacle';

// Import Solvro Theme from theme.js
import {theme} from './solvro-light-components';

// Slides import

import {
    IframeSlide,
    YoutubeSlide,
    MathSlide,
    GraphSlide,
    PKPSlide,
    TitleSlide
} from "./slides";

// SVG
import SolvroCorner from './img/solvro-corner.svg';

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
    render() {
        return (
            <>
                <div style={{position: "fixed", zIndex: 1}}>
                    <img src={SolvroCorner} style={{
                        position: "fixed",
                        right: 0,
                        bottom: 0,
                        transform: "rotate(180deg)"
                    }}
                    />
                    <img src={SolvroCorner} style={{
                        position: "fixed",
                        left: 0,
                        top: 0
                    }}/>
                </div>
                <Deck
                    transition={['fade']}
                    transitionDuration={500}
                    theme={theme}
                    padding={200}
                    color={"white"}
                >
                    {TitleSlide}
                    {IframeSlide}
                    {YoutubeSlide}
                    {MathSlide}
                    {GraphSlide}
                    {PKPSlide}
                </Deck>
            </>
        );
    }
}
