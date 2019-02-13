// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Anim,
    Appear,
    CodePane,
    ComponentPlayground,
    Fill,
    Fit,
    GoToAction,
    Image,
    Layout,
    Link,
    Table,
    TableBody,
    TableHeader,
    TableHeaderItem,
    TableItem,
    TableRow,
} from 'spectacle';

// Import Solvro Theme from theme.js
import { theme } from './theme';

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={['zoom', 'slide']}
                transitionDuration={500}
                theme={theme}
            >
                {Object.values(slides)}
            </Deck>
        );
    }
}

const slides = {
    1:
        <Slide>
            <Text>
                Cokolwiek
            </Text>
        </Slide>,
    SlideWithMath:
        <Slide>

        </Slide>,
};
