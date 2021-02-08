import React from 'react';
import { Box, Grid, Heading, Image, Text } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

interface FactItemProps {
	stat: string;
	subText: string;
}

const FactItem: React.FC<FactItemProps> = ({ stat, subText }) => (
	<Grid justifyItems='center' gap={2}>
		<Image height='26vw' src='/img/hexagon.svg' gridRow='1 / 3' gridColumn='1 / 3' />
		<Heading size='2xl' gridRow='1 / 2' gridColumn='1 / 3' alignSelf='end'>
			{stat}
		</Heading>
		<Text gridRow='2 / 3' gridColumn='1 / 3'>
			{subText}
		</Text>
	</Grid>
);

export const Facts: React.FC = () => {
	return (
		<Grid mb={16}>
			<Wrapper bg='brand'>
				<Box pt={16} pb={2}>
					<Heading>The Facts</Heading>
					<Text>Our achievement in the journey depicted in numbers</Text>
				</Box>
			</Wrapper>
			<Grid templateColumns='1fr 1fr' templateRows='1fr 1fr'>
				<Box gridRow='1 / 2' gridColumn='1 / -1' bg='brand' />
				<Box gridRow='2 / 3' gridColumn='1 / -1' bg='white' />
				<Wrapper gridRow='1 / -1' gridColumn='1 / -1'>
					<Grid templateColumns='repeat(3, max-content)' justifyContent='space-between' alignContent='center'>
						<FactItem stat='52%' subText='Switch jobs in their lifetime' />
						<FactItem stat='15x' subText='Unengaged at work' />
						<FactItem stat='1/2' subText='Expensive to Replace' />
					</Grid>
				</Wrapper>
			</Grid>
		</Grid>
	);
};
