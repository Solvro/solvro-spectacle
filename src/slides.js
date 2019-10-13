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
import MonterailLogo from './img/logo_monterail.svg';
import ExpoLogo from './img/logo_expo.svg';
import PostgresLogo from './img/logo_postgres.svg';
import SolvroTalksLogo from './img/solvro_talks_logo.png';
import WilkoszRastrowyImg from './img/wilkosz_and_rastrowy.png';
import HackathonImg from './img/hackathon_img.jpg';
import SolvroTalksQR from './img/solvro_talks_qr.png'
import SolvroFBQR from './img/facebook_qr.png'
import ScanningAppMobileLogin from './img/mobile_login.png';
import ScanningAppMobileRents from './img/mobile_rents.png';
import ScanningAppMobileReturn from './img/mobile_return_qr.png';
import EbecLogin from './img/ebec_login.png';
import EbecItems from './img/ebec_items.png';
import PapuaFirst from './img/papua_first.jpg';
import PapuaSecond from './img/papua_second.JPG';

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

export const TechnologiesSlide = (
    <Slide
        progressColor="#83B4FC"
    >
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

const OtherActivitiesArray = [SolvroTalksLogo, WilkoszRastrowyImg, HackathonImg];
export const OtherActivitiesSlide = OtherActivitiesArray.map((img, idx) =>
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
    <Slide
        progressColor="#83B4FC"
    >
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

export const ScanningAppSlide = (
    <Slide
        progressColor="#83B4FC"
    >
        <Title>
            Nasze projekty
        </Title>
        <Text>
            Scanning app
        </Text>
        <Layout
            style={{
                marginTop: 20,
                justifyContent: 'center'
            }}
        >
            <Image
                src={ScanningAppMobileReturn}
                width={250}
            />
            <Image
                src={ScanningAppMobileLogin}
                width={250}
            />
            <Image
                src={ScanningAppMobileRents}
                width={250}
            />
        </Layout>
    </Slide>
);

export const EbecSlide = (
    <Slide
        progressColor="#83B4FC"
    >
        <Title>
            Nasze projekty
        </Title>
        <Text>
            BEST app
        </Text>
        <Layout
            style={{
                marginTop: 20,
                justifyContent: 'center',
            }}
        >
            <Image
                src={EbecLogin}
                width={600}
                style={{
                    marginRight: 10
                }}
            />
            <Image
                src={EbecItems}
                width={600}
            />
        </Layout>
    </Slide>
);

export const PapuaSlide = (
    <Slide
        progressColor="#83B4FC"
    >
        <Title>
            Nasze projekty
        </Title>
        <Text>
            Aplikacja dla Papui-Nowej Gwinei
        </Text>
        <Layout
            style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Image
                src={PapuaFirst}
                height={380}
                style={{
                    marginRight: 10
                }}
            />
            <Image
                src={PapuaSecond}
                height={380}
                style={{
                    transform: 'scaleX(-1)'
                }}
            />
        </Layout>
    </Slide>
);

export const MonterailSlide = (
	<Slide
		progressColor="#83B4FC"
	>
		<Title>
			Wykład w Monterail
		</Title>
		<Layout
			style={{
				marginTop: 20,
				justifyContent: 'center'
			}}
		>
			<Image
				src={MonterailLogo}
				height={380}
			/>
			</Layout>
	</Slide>
);