import React from 'react';
import { Box, Grid, HStack, Text } from '@chakra-ui/react';

export const Footer: React.FC = () => {
	return (
		<Grid templateColumns='max-content 1fr max-content' bg='black' color='white' px={20} py={6}>
			<Text>PROMOVERE</Text>
			<Text justifySelf='center'>&copy; 2020 Promovere. All rights reserved</Text>
			<HStack>
				<Box bg='white' borderRadius='full' height='1rem' width='1rem' />
				<Box bg='white' borderRadius='full' height='1rem' width='1rem' />
				<Box bg='white' borderRadius='full' height='1rem' width='1rem' />
				<Box bg='white' borderRadius='full' height='1rem' width='1rem' />
			</HStack>
		</Grid>
	);
};
