import React from 'react';
import { Box, Flex, Grid, Heading } from '@chakra-ui/react';

export const Companies: React.FC = () => {
	return (
		<Grid templateColumns='max-content 1fr' alignItems='center' px={20}>
			<Heading as='h3'>As featured in:</Heading>
			<Flex justify='center' wrap='wrap'>
				<Box m={2} borderRadius='2xl' height='4rem' width='10rem' bg='purple.600' />
				<Box m={2} borderRadius='2xl' height='4rem' width='10rem' bg='purple.600' />
				<Box m={2} borderRadius='2xl' height='4rem' width='10rem' bg='purple.600' />
				<Box m={2} borderRadius='2xl' height='4rem' width='10rem' bg='purple.600' />
				<Box m={2} borderRadius='2xl' height='4rem' width='10rem' bg='purple.600' />
				<Box m={2} borderRadius='2xl' height='4rem' width='10rem' bg='purple.600' />
			</Flex>
		</Grid>
	);
};
