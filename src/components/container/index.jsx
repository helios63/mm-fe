import React from "react";
import ReactPlayer from 'react-player'
import { BodyContainer, Project, ProjectIMG, Link, Arrow, Description, Text, Stacks } from "./styles";
import { H2, P } from "../../styles";
import planetExchange from '../../assets/planet-exchange.jpg';
import comicQueens from '../../assets/comic-queens.jpg';
import planetExchangeVideo from '../../assets/planet-echange-video.mp4';
import lddlVideo from '../../assets/lesdisquesdulobby-video.mp4';
import twoemergeVideo from '../../assets/2emerge-video.mp4';
import sobaVideo from '../../assets/soba-video.mp4';
import xaviVideo from '../../assets/xavi-video.mp4';

const Container = () => {
  return (
    <BodyContainer>
      <Project>
          <a href="http://www.planetexchange.org" target="_blank" rel="noreferrer">
            <ReactPlayer
              url={planetExchangeVideo}
              width="100%"
              height="100%"
              muted={true}
              loop={true}
              controls={false}
              playing={true}
              fallback={planetExchange} />
            <Link>
              <H2>planetexchange.org</H2>
              <Arrow />
            </Link>
          </a>
        <Description>
          <Text>
            Mobile website to connect people who wants to save money,
            space and the planet. Built in 2 weeks as final project of Le Wagon's
            Full Stack Developer Bootcamp. My main responsibility was the Front-End
            development and Design conception of this mobile application.
          </Text>
          <Stacks>
            <ul>
              <li>Ruby-on-Rails</li>
              <li>SASS</li>
              <li>Device</li>
              <li>Geocoder</li>
            </ul>
          </Stacks>
          </Description>
      </Project>

      <Project>
        <a href="https://comic-queens.herokuapp.com/" target="_blank" rel="noreferrer">
        <ProjectIMG src={comicQueens}/>
        <Link>
          <H2>comic-queens</H2>
          <Arrow />
        </Link>
        </a>
        <Description>
          <Text>
            React App. Find your favorite female comic character!
          </Text>
          <Stacks>
            <ul>
              <li>React JS</li>
              <li>React-Transitions</li>
            </ul>
          </Stacks>
        </Description>
      </Project>

      <Project>
          <a href="http://lesdisquesdulobby.fr" target="_blank" rel="noreferrer">
            <ReactPlayer
              width="100%"
              height="100%"
              url={lddlVideo}
              muted={true}
              loop={true}
              controls={false}
              playing={true}
              fallback={planetExchange} />
            <Link>
              <H2>lesdisquesdulobby.fr</H2>
              <Arrow />
            </Link>
          </a>
        <Description>
          <Text>
            Les Disques du Lobby is a SoundCloud platform of exclusive songs dedicated
            to the promotion of French artists from the LGBTQI + community. This platform
            has been made to be able showcase Label products, inform about the artists and
            communicate about Label last news.
          </Text>
          <Stacks>
            <ul>
              <li>Wordpress</li>
              <li>Canvas</li>
              <li>Soundcloud API</li>
            </ul>
          </Stacks>
        </Description>
      </Project>

      <Project>
            <ReactPlayer
              width="100%"
              height="100%"
              url={twoemergeVideo}
              muted={true}
              loop={true}
              controls={false}
              playing={true}
              fallback={planetExchange} />
            <Link>
              <H2>2-emerge.com</H2>
              <Arrow />
            </Link>
        <Description>
          <Text>
            Under construction
            <P>2 - EMERGE is a fashion growth agency that positions & presents ambitious
            contemporary brands, whose stories and values align with theirs.
				    Offering a comprehensive scope of services and representation, they
            help designers strengthen brand DNA, develop commercial viability to increase
            sales, and improve sales strategy.
            </P>
          </Text>
          <Stacks>
            <ul>
              <li>Wordpress</li>
            </ul>
          </Stacks>
        </Description>
      </Project>

      <Project>
          <a href="http://soba.archi" target="_blank" rel="noreferrer">
            <ReactPlayer
              width="100%"
              height="100%"
              url={sobaVideo}
              muted={true}
              loop={true}
              controls={false}
              playing={true}
              fallback={planetExchange} />
            <Link>
              <H2>soba.archi</H2>
              <Arrow />
            </Link>
          </a>
        <Description>
          <Text>
             Corporate Website for Soba, an architecture agency.
          </Text>
          <Stacks>
            <ul>
              <li>Wordpress</li>
            </ul>
          </Stacks>
        </Description>
      </Project>

      <Project>
          <a href="http://xavinoguera.com" target="_blank" rel="noreferrer">
            <ReactPlayer
              width="100%"
              height="100%"
              url={xaviVideo}
              muted={true}
              loop={true}
              controls={false}
              playing={true}
              fallback={planetExchange} />
            <Link>
              <H2>xavinoguera.com</H2>
              <Arrow />
            </Link>
          </a>
        <Description>
          <Text>
             Xavi Noguera is a 3D Character Artist for video games.
             I was in charge of creating the visual identity, logo, responsive & functionnal website.
          </Text>
          <Stacks>
            <ul>
              <li>Wordpress</li>
            </ul>
          </Stacks>
        </Description>
      </Project>

    </BodyContainer>
  )
}

export default Container
