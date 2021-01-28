import React from 'react';
import { Button, SimpleGrid } from '@chakra-ui/react';
import { animateScroll as scroll, Link } from 'react-scroll';

import { DarkModeSwitch } from './DarkModeSwitch';

export const Header: React.FC = () => {
	return (
		<SimpleGrid
			width='100%'
			position='sticky'
			top='0'
			zIndex={10000}
			justifyContent='end'
			alignItems='center'
			autoFlow='column'
			spacing={4}
			p={4}
			bg='white'
		>
			<Button onClick={() => scroll.scrollToTop()} variant='ghost' to='' colorScheme='purple' height='2rem'>
				Home
			</Button>
			<Link to='test' smooth={true}>
				<Button variant='ghost' colorScheme='purple' height='2rem'>
					Why Promovere
				</Button>
			</Link>
			<Link to='test' smooth={true}>
				<Button variant='ghost' colorScheme='purple' height='2rem'>
					Platform
				</Button>
			</Link>
			<Link to='test' smooth={true}>
				<Button colorScheme='purple' height='2rem'>
					Book a Demo
				</Button>
			</Link>
			<DarkModeSwitch />
		</SimpleGrid>
	);
};
