import React from 'react';
import { Box, Grid, HStack, Text } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const Footer: React.FC = () => {
	return (
		<Wrapper bg='black'>
			<Grid templateColumns={{ base: "1fr max-content", md: 'max-content 1fr max-content'}} color='white' py={6} gap={4}>
				<Text>PROMOVERE</Text>
				<Text gridColumn={{ base: "span 2", md: "2 / 3"}} gridRow={{ base: "2 / 3", md: "1 / 2" }} justifySelf='center'>&copy; 2020 Promovere. All rights reserved</Text>
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
