import React from 'react';
import { Grid } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Companies } from '../components/Companies';
import { Reasons } from '../components/Reasons';
import { Platform } from '../components/Platform';
import { Booking } from '../components/Booking';
import { Facts } from '../components/Facts';
import { Solution } from '../components/Solution';
import { Footer } from '../components/Footer';

const Index = () => (
	<Grid height='100%' alignContent='start' position="relative">
		<Header />
		<Hero />
		<Companies />
		<Facts />
		<Reasons />
		<Platform />
		<Solution />
		<Booking />
		<Footer />
	</Grid>
);

export default Index;
