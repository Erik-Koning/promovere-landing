import React from 'react';
import { Box, Grid, HStack, Text } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const Footer: React.FC = () => {
	return (
		<Wrapper bg='black'>
			<Grid templateColumns='max-content 1fr max-content' color='white' py={6}>
				<Text>PROMOVERE</Text>
				<Text justifySelf='center'>&copy; 2020 Promovere. All rights reserved</Text>
				<HStack>
					<Box bg='white' borderRadius='full' height='1rem' width='1rem' />
					<Box bg='white' borderRadius='full' height='1rem' width='1rem' />
					<Box bg='white' borderRadius='full' height='1rem' width='1rem' />
					<Box bg='white' borderRadius='full' height='1rem' width='1rem' />
				</HStack>
			</Grid>
		</Wrapper>
	);
};
