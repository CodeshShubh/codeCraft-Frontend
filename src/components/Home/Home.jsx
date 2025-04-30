import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text, 
  VStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import vg from '../../assets/images/bg.png';
import introVideo from '../../assets/videos/intro.mp4';
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack 
            width={'full'}
            alignItems={['center', 'flex-start']}
            spacing="8"
          >
            <Heading children="CODE CRAFT" size={'3xl'} textAlign={['center', 'left']} />
            <Heading children=" LEARN MERN STACK DEV" size={'xl'} textAlign={['center', 'left']}/>
            <Text
              fontSize={'3xl'}
              fontFamily="cursive"
              textAlign={['center', 'left']}
              children="Find Valuable Content At Reasonable Price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow" textAlign={'center'}>
              Browse Videos
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={'md'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding={'7'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="MEARN STACK LANGUAGES"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <FaNodeJs />
          <FaReact />
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />

        </HStack>
      </Box>

      <div className="container2">
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
