import React from 'react';
import { Grid } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Companies } from '../components/Companies';
import { Reasons } from '../components/Reasons';
import { Platform } from '../components/Platform';
import { Booking } from '../components/Booking';
import { Facts } from '../components/Facts';
import { Improving } from '../components/Improving';
import { Footer } from '../components/Footer';

const Index = () => (
	<Grid height='100%' width='100%' position="absolute">
		<Header />
		<Hero />
		<Companies />
		<Facts />
		<Reasons />
		<Platform />
		<Improving />
		<Booking />
		<Footer />
	</Grid>
);

export default Index;
