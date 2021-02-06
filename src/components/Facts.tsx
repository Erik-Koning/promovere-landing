import React from 'react';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';

interface FactItemProps {
	stat: string;
	subText: string;
}

const FactItem: React.FC<FactItemProps> = ({ stat, subText }) => (
	<Grid alignContent='center' justifyItems='center' gap={4} height='22vw' width='22vw' boxShadow='base' bg='white'>
		<Heading size='2xl'>{stat}</Heading>
		<Text>{subText}</Text>
	</Grid>
);

export const Facts: React.FC = () => {
	return (
		<Grid templateRows='repeat(3, 1fr)' mb={16}>
			<Box px={20} bg='brand' pt={16} pb={2}>
				<Heading>The Facts</Heading>
				<Text>Our achievement in the journey depicted in numbers</Text>
			</Box>
			<Box gridRow='2 / 3' gridColumn='1 / -1' bg='brand' />
			<Box gridRow='3 / 4' gridColumn='1 / -1' bg='white' />
			<Grid
				px={20}
				gridRow='2 / 4'
				gridColumn='1 / -1'
				templateColumns='repeat(3, max-content)'
				justifyContent='space-between'
				alignContent='center'
			>
				<FactItem stat='52%' subText='Switch jobs in their lifetime' />
				<FactItem stat='15x' subText='Unengaged at work' />
				<FactItem stat='1/2' subText='Expensive to Replace' />
			</Grid>
		</Grid>
	);
};
