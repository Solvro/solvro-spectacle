import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, YAxis } from 'recharts';
import CodeSlide from 'spectacle-code-slide';
import SolvroTalksLogo from './img/solvro-talks-prototype.svg';

import {
    Slide,
    Layout,
    Fit,
    Image,
    CodePane
} from 'spectacle';

import {
    Text,
    Title,
    Heading,
    List,
    ListItem
} from './solvro-light-components';

export const TitleSlide = (
  <Slide
    bgColor={"white"}
  >
      <Image
        src={SolvroTalksLogo}
        width={900}
      />
      <Title
        margin={50}
      >
          Tytuł prezentacji
      </Title>
  </Slide>
);

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
                    width="800" height="600" src="https://www.youtube.com/embed/dNJdJIwCF_Y" frameBorder="0"
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

const data = [
    {name: '2015', uv: 400, pv: 2400, amt: 2400},
    {name: '2016', uv: 300, pv: 2400, amt: 2400},
    {name: '2017', uv: 213.7, pv: 2400, amt: 2400},
    {name: '2018', uv: 69.69, pv: 2400, amt: 2400},
    {name: '2019', uv: 101, pv: 2400, amt: 2400}
];
export const GraphSlide = (
    <Slide>
        <Text
            textSize={24}
            margin={20}
        >
            Interaktywne wykresy
        </Text>
        <Layout
            style={{justifyContent: 'space-around'}}
        >
            <Fit>
                <Text
                    textSize={18}
                >
                    Np. Recharts
                </Text>
                <LineChart
                    style={{fontSize: '1em'}}
                    width={800} height={400} data={data} margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </Fit>
        </Layout>
    </Slide>
);

export const PKPSlide = (
    <CodeSlide
        bgColor={"#4B9A9B"}
        transition={['fade']}
        lang="elixir"
        code={require('./assets/code.txt')}
        ranges={[
        { loc: [0, 30], title: "Walking through some code" },
        { loc: [0, 1], title: "The Beginning" },
        { loc: [1, 2] },
        { loc: [1, 2], note: "Heres a note!" },
        { loc: [2, 3] },
        { loc: [8, 10] },
        ]}
    />
);
