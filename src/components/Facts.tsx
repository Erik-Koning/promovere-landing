import React from 'react';
import { Box, Grid, Heading, Image, SlideFade, Text, useBreakpointValue } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';
import { useInView } from 'react-intersection-observer';
interface FactItemProps {
	stat: string;
	subText: string;
}

const FactItem: React.FC<FactItemProps> = ({ stat, subText }) => {
	const headingSize = useBreakpointValue({ base: 'lg', xs: "xl", sm: '2xl' });
	const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true })
 
	return (
		<SlideFade in={inView} offsetY="20px">
			<Grid
				justifyItems='center'
				templateRows={{ base: '45% 55%', xs: '50% 50%' }}
				width='100%'
				maxWidth='16rem'
				gap={{ base: 0, xs: 2 }}
				ref={ref}
			>
				<Image width='100%' src='/img/hexagon.svg' gridRow='1 / 3' gridColumn='1 / 3' />
				<Heading size={headingSize} gridRow='1 / 2' gridColumn='1 / 3' alignSelf='end'>
					{stat}
				</Heading>
				<Text
					gridRow='2 / 3'
					fontSize={{ base: 'xs', sm: 'md' }}
					gridColumn='1 / 3'
					width='calc(100% - 2rem)'
					textAlign='center'
					>
					{subText}
				</Text>
			</Grid>
		</SlideFade>
	);
};

export const Facts: React.FC = () => {
	return (
		<Grid mb={16}>
			<Wrapper bg='brand'>
				<Grid pt={16} pb={6} gap={2}>
					<Heading>The Facts</Heading>
					<Text>Our achievement in the journey depicted in numbers</Text>
				</Grid>
			</Wrapper>
			<Grid templateColumns='1fr 1fr' templateRows='1fr 1fr'>
				<Box gridRow='1 / 2' gridColumn='1 / -1' bg='brand' />
				<Box gridRow='2 / 3' gridColumn='1 / -1' bg='white' />
				<Wrapper gridRow='1 / -1' gridColumn='1 / -1'>
					<Grid
						maxWidth='70rem'
						templateColumns='repeat(3, 1fr)'
						justifyContent='space-between'
						gap={{ base: 0, xs: 2, md: 4 }}
						alignContent='center'
						mx='auto'
					>
						<FactItem stat='52%' subText='Switch jobs in their lifetime' />
						<FactItem stat='15x' subText='Unengaged at work' />
						<FactItem stat='1/2' subText='Expensive to Replace' />
					</Grid>
				</Wrapper>
			</Grid>
		</Grid>
	);
};
