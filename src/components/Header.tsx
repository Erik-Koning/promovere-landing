import React from 'react';
import { Button, Grid, SimpleGrid } from '@chakra-ui/react';
import { animateScroll as scroll, Link } from 'react-scroll';
import { Wrapper } from './Wrapper';
import { ImageWrapper } from './ImageWrapper';

export const Header: React.FC = () => {

	return (
		<Wrapper 
			boxShadow='bottom'
			width='100%'
			position='sticky'
			top='0'
			zIndex={10000}
			bg='white'
		>
			<Grid templateColumns="1fr max-content" gap={4}>
				<ImageWrapper width={{ base: "20vw", md: "10vw", lg: "8rem" }} minWidth="12rem" height="100%" display={{ base: "block", sm: "none", md: "block"}} src="/img/logo.png" alt="promovere logo" priority />
				<ImageWrapper width="4vw" height="100%" display={{ base: "none", sm: "block", md: "none"}} src="/img/logo-small.png" alt="promovere logo" priority />
				<SimpleGrid
					autoFlow='column'
					spacing={{base: 2, md: 4 }}
					py={3}
				>
					<Button onClick={() => scroll.scrollToTop()} display={{ base: "none", sm: "inline-flex"}} variant='ghost' color='brandText' colorScheme='purple' height='2rem'>
						Home
					</Button>
					<Link to='why-promovere' smooth={true} offset={-70}>
						<Button variant='ghost' color='brandText' colorScheme='purple' height='2rem' display={{ base: "none", sm: "inline-flex"}}>
							Why Promovere
						</Button>
					</Link>
					<Link to='platform' smooth={true} offset={-30}>
						<Button variant='ghost' color='brandText' colorScheme='purple' height='2rem' display={{ base: "none", sm: "inline-flex"}}>
							Platform
						</Button>
					</Link>
					<Link to='booking' smooth={true} offset={-50}>
						<Button color='white' bg='brand' _hover={{ color:"black", bg: "brandDark"}} height='2rem'>
							Book a Demo
						</Button>
					</Link>
						<Button as='a' target='_blank' variant='outline' href='https://promovere.herokuapp.com/user/login' color='white' bg='brand' _hover={{ color:"black", bg: "brandDark"}} height='2rem'>
							Login
						</Button>
				</SimpleGrid>
			</Grid>
		</Wrapper>
	);
};
