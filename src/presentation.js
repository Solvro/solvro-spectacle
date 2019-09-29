// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Deck,
    Slide
} from 'spectacle';

// Import Solvro Theme from theme.js
import { theme } from './solvro-light-components';

// Slides import

import {
    IframeSlide,
    YoutubeSlide,
    MathSlide,
    GraphSlide,
    PKPSlide,
    TechnologiesSlide,
    TitleSlide,
    OtherActivitiesSlide,
    SolvroTalkstSlide,
    SocialMediaSlide
} from "./slides";

// SVG
import SolvroCorner from './img/solvro-corner.svg';

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
    render() {
        return (
            <>
                <div style={{ position: "fixed", zIndex: 1 }}>
                    <img src={SolvroCorner} style={{
                        position: "fixed",
                        right: 0,
                        bottom: 0,
                        transform: "rotate(180deg)",
                        width: '6em',
                        height: '6em'
                    }}
                    />
                    <img src={SolvroCorner} style={{
                        position: "fixed",
                        left: 0,
                        top: 0,
                        width: '6em',
                        height: '6em'
                    }} />
                </div>
                <Deck
                    showFullscreenControl={false}
                    transition={['fade']}
                    transitionDuration={500}
                    theme={theme}
                    padding={200}
                >
                    {TitleSlide}
                    {TechnologiesSlide}
                    {OtherActivitiesSlide}
                    {SolvroTalkstSlide}
                    {SocialMediaSlide}
                </Deck>
            </>
        );
    }
}
