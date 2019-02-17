import styled from 'react-emotion';
import {
    Text,
    Heading,
    List,
    ListItem,
    Slide
} from 'spectacle';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
import React from "react";

const colors = {
    tertiary: "#83B4FC",
    quartenary: "#304670",
    secondary: "#1B2A4B",
    primary: "white"
};

const fonts = {
    primary: 'Montserrat',
    secondary: 'Helvetica'
};

export const theme = createTheme(colors, fonts);

// Tak można customizować style poszczególnych elementów jak w emotion

const SolvroText = styled(Text)`
    font-size: 0.8em;
    color: ${colors.quartenary};
`;

const SolvroHeading = styled(Heading)`
    font-size: 1.2em;
    font-weight: bold;
    color: ${colors.secondary};
`;

const SolvroTitleText = styled(Text)`
    font-size: 1.6em;
    font-weight: bold;
    margin: 0.5em;
    color: ${colors.secondary};
`;

const SolvroList = styled(List)`
`;

const SolvroListItem = styled(ListItem)`
    font-size: 0.8em;
    color: ${colors.quartenary};
`;

export {
    SolvroText as Text,
    SolvroHeading as Heading,
    SolvroTitleText as Title,
    SolvroList as List,
    SolvroListItem as ListItem,
}
