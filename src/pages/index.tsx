import React from 'react';
import { Grid } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Companies } from '../components/Companies';
import { WhyPromovere } from '../components/WhyPromovere';
import { Platform } from '../components/Platform';
import { Booking } from '../components/Booking';
import { Facts } from '../components/Facts';
import { Improving } from '../components/Improving';
import { Footer } from '../components/Footer';

const Index = () => (
	<Grid height='100vh' alignContent='start'>
		<Header />
		<Hero />
		<Companies />
		<Facts />
		<WhyPromovere />
		<Platform />
		<Improving />
		<Booking />
		<Footer />
	</Grid>
);

export default Index;
