// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Deck
} from 'spectacle';

// Import Solvro Theme from theme.js
import {theme} from './theme';

// Slides import

import {
    IframeSlide,
    YoutubeSlide,
    MathSlide,
    GraphSlide,
    PKPSlide
} from "./slides";

import SolvroCorner from 'svg-react-loader?name=SolvroCorner./img/solvro-corner.svg';

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
    render() {
        return (
            <>
                <div style={{position: "fixed", zIndex: 0}}>
                    <SolvroCorner style={{
                        position: "fixed",
                        right: 0,
                        bottom: 0,
                        transform: "rotate(180deg)"
                    }}
                    />
                    <SolvroCorner style={{
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
                >
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
