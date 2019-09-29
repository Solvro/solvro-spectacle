import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, YAxis } from 'recharts';
import CodeSlide from 'spectacle-code-slide';
import SolvroLogo from './img/logo_solvro.svg';
import JavaScriptLogo from './img/logo_javascript.svg';
import PythonLogo from './img/logo_python.svg';
import AngularLogo from './img/logo_angular.svg';
import ReactLogo from './img/logo_react.svg';
import NodeLogo from './img/logo_node.svg';
import DjangoLogo from './img/logo_django.svg';
import DockerLogo from './img/logo_docker.svg';
import GitlabLogo from './img/logo_gitlab.svg';
import ExpoLogo from './img/logo_expo.svg';
import PostgresLogo from './img/logo_postgres.svg';
import SolvroTalksLogo from './img/solvro_talks_logo.png';
import WilkoszRastrowyImg from './img/wilkosz_and_rastrowy.png';
import HackathonImg from './img/hackathon_img.jpg';
import SolvroTalksQR from './img/solvro_talks_qr.png'
import SolvroFBQR from './img/facebook_qr.png'

import ImageSlide from "./components/ImageSlide";


import {
    Layout,
    Fit,
    Fill,
    Image,
    CodePane,
    Slide
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
        progressColor="#83B4FC"
    >
        <Image
            src={SolvroLogo}
            width={500}
        />
        <Title
            margin={50}
        >
            Koło Naukowe Solvro
        </Title>
    </Slide>
);

export const IframeSlide = (
    <Slide
        progressColor="#83B4FC"
    >
        <Title
            margin={20}
        >
            Embeddowanie nigdy nie było prostsze
        </Title>
        <Layout
            style={{ justifyContent: 'center' }}
        >
            <Fit>
                <iframe
                    title={"code"}
                    src={"https://stackblitz.com/edit/js-3cpgws"}
                    width={"800px"}
                    height={"500px"}
                >
                </iframe>
            </Fit>
        </Layout>
    </Slide>
);

export const YoutubeSlide = (
    <Slide
        progressColor="#83B4FC"
    >
        <Title
            margin={20}
        >
            Można też pokazać film
        </Title>
        <Layout
            style={{ justifyContent: 'center' }}
        >
            <Fit>
                <iframe
                    title={"youtube"}
                    width="800" height="500" src="https://www.youtube.com/embed/dNJdJIwCF_Y" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </Fit>
        </Layout>
    </Slide>
);

export const MathSlide = (
    <Slide
        progressColor="#83B4FC"
    >
        <Title>
            Tytuł
        </Title>
        <Heading>
            Nagłówek
        </Heading>
        <Text
            textSize={24}
            margin={20}
        >
            Dla matematycznych bestii też się coś znajdzie
        </Text>
        <Layout
            style={{ justifyContent: 'space-around' }}
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
    { name: '2015', uv: 400, pv: 2400, amt: 2400 },
    { name: '2016', uv: 300, pv: 2400, amt: 2400 },
    { name: '2017', uv: 213.7, pv: 2400, amt: 2400 },
    { name: '2018', uv: 69.69, pv: 2400, amt: 2400 },
    { name: '2019', uv: 101, pv: 2400, amt: 2400 }
];
export const GraphSlide = (
    <Slide
        progressColor="#83B4FC"
    >
        <Title
            margin={20}
        >
            Interaktywne wykresy
        </Title>
        <Layout
            style={{ justifyContent: 'space-around' }}
        >
            <Fit>
                <Text
                    textSize={18}
                >
                    Np. Recharts
                </Text>
                <LineChart
                    style={{ fontSize: '1em' }}
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
        progressColor="#83B4FC"
        bgColor={"white"}
        transition={['fade']}
        lang="js"
        code={require('./assets/code.txt')}
        showLineNumbers={false}
        textSize={24}
        ranges={[
            { loc: [0, 12], title: "PKP kodzik" },
            { loc: [0, 4], title: "Przygotowanko" },
            { loc: [3, 4], note: "Lubimy regexy" },
            { loc: [5, 8], note: "Jeżeli tak" },
            { loc: [8, 12], note: "Jeżeli nie" },
        ]}
    />
);

export const TechnologiesSlide = (
    <Slide>
        <Title>
            Używane technologie
        </Title>
        <Layout
            style={{
                marginTop: 40,
                justifyContent: 'center'
            }}
        >
            <Image
                src={PythonLogo}
                width={100}
            />
            <Image
                src={JavaScriptLogo}
                width={100}
            />
            <Image
                src={NodeLogo}
                width={100}
            />
            <Image
                src={ReactLogo}
                width={100}
            />
            <Image
                src={AngularLogo}
                width={100}
            />
        </Layout>
        <Layout
            style={{
                marginTop: 40,
                marginBottom: 80,
                justifyContent: 'center'
            }}
        >
            <Image
                src={DjangoLogo}
                width={100}
            />
            <Image
                src={DockerLogo}
                width={100}
            />
            <Image
                src={GitlabLogo}
                width={100}
            />
            <Image
                src={ExpoLogo}
                width={100}
            />
            <Image
                src={PostgresLogo}
                width={100}
            />
        </Layout>
    </Slide>
);

const NoInternetStoryArray = [SolvroTalksLogo, WilkoszRastrowyImg, HackathonImg];
export const OtherActivitiesSlide = NoInternetStoryArray.map((img, idx) =>
    <ImageSlide
        progressColor="#83B4FC"
        title={"Inna działalność"}
        image={img}
        imageStyle={{
            width: idx === 0 ? "800px" : "60%"
        }}
    />);

export const SolvroTalkstSlide = (
    <Slide
        progressColor="#83B4FC"
    >

        <Title
            margin={50}
        >
            Solvro Talks #4
        </Title>
        <Image
            src={SolvroTalksQR}
            width={400}
        />
        <Text>
            Ankieta do prelekcji o Pythonie
        </Text>
    </Slide>
);

export const SocialMediaSlide = (
    <Slide>
        <Title
            margin={50}
        >
            Dziękujemy za uwagę
        </Title>
        <Image
            src={SolvroFBQR}
            width={400}
        />
        <Text>facebook.com/knsolvro/</Text>
    </Slide >
);
