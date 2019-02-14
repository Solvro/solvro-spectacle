// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    Deck
} from 'spectacle';

// Import Solvro Theme from theme.js
import { theme } from './theme';

// Slides import

import {
    IframeSlide,
    YoutubeSlide,
    MathSlide
} from "./slides";

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={['fade']}
                transitionDuration={500}
                theme={theme}
                padding={100}
            >
                {IframeSlide}
                {YoutubeSlide}
                {MathSlide}
            </Deck>
        );
    }
}
