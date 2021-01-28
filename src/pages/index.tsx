import React from 'react';
import { Grid } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Companies } from '../components/Companies';
import { WhyPromovere } from '../components/WhyPromovere';
import { Platform } from '../components/Platform';
import { Booking } from '../components/Booking';

const Index = () => (
	<Grid height='100vh' gap={10} alignContent='start'>
		<Header />
		<Hero />
		<Companies />
		<WhyPromovere />
		<Platform />
		<Booking />
	</Grid>
);

export default Index;
