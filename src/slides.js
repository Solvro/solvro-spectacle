import React from 'react';
import {
    Slide,
    Text,
    Layout,
    Fit
} from 'spectacle';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export const IframeSlide = (
    <Slide>
        <Text
            textSize={20}
            margin={20}
        >
            Embeddowanie nigdy nie było prostsze
        </Text>
        <Layout
            style={{justifyContent: 'center'}}
        >
            <Fit>
                <iframe
                    title={"code"}
                    src={"https://stackblitz.com/edit/js-3cpgws"}
                    width={"800px"}
                    height={"600px"}
                >
                </iframe>
            </Fit>
        </Layout>
    </Slide>
);

export const YoutubeSlide = (
    <Slide>
        <Text
            textSize={20}
            margin={20}
        >
            Można też pokazać film
        </Text>
        <Layout
            style={{justifyContent: 'center'}}
        >
            <Fit>
                <iframe
                    title={"youtube"}
                    width="640" height="360" src="https://www.youtube.com/embed/dNJdJIwCF_Y" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </Fit>
        </Layout>
    </Slide>
);

export const MathSlide = (
    <Slide>
        <Text
            textSize={24}
            margin={20}
        >
            Dla matematycznych bestii też się coś znajdzie
        </Text>
        <Layout
            style={{justifyContent: 'space-around'}}
        >
            <Fit>
                <Text
                    textSize={18}
                >
                    Block
                </Text>
                <BlockMath>\int_0^\infty x^2 dx</BlockMath>
            </Fit>
            <Fit>
                <Text
                    textSize={18}
                    margin={10}
                >
                    Inline
                </Text>
                <InlineMath>\int_0^\infty x^2 dx</InlineMath>
            </Fit>
        </Layout>
    </Slide>
);

export const MathSlide = (
    <Slide>
        <Text
            textSize={24}
            margin={20}
        >
            Dla matematycznych bestii też się coś znajdzie
        </Text>
        <Layout
            style={{justifyContent: 'space-around'}}
        >
            <Fit>
                <Text
                    textSize={18}
                >
                    Block
                </Text>
                <BlockMath>\int_0^\infty x^2 dx</BlockMath>
            </Fit>
            <Fit>
                <Text
                    textSize={18}
                    margin={10}
                >
                    Inline
                </Text>
                <InlineMath>\int_0^\infty x^2 dx</InlineMath>
            </Fit>
        </Layout>
    </Slide>
);
