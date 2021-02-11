import React from 'react';
import { Box, Button, Grid, HStack, Link, Text } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';
import { FaLinkedinIn } from 'react-icons/fa'

export const Footer: React.FC = () => {
	return (
		<Wrapper bg='black'>
			<Grid templateColumns={{ base: '1fr max-content', md: 'max-content 1fr max-content'}} alignItems='center' color='white' py={6} gap={4}>
				<Text>PROMOVERE</Text>
				<Text gridColumn={{ base: 'span 2', md: '2 / 3'}} gridRow={{ base: '2 / 3', md: '1 / 2' }} justifySelf='center'>&copy; 2020 Promovere. All rights reserved</Text>
				<HStack>
					<Button as={Link} variant='wrapper' isExternal href='https://www.linkedin.com/company/promovereco'>
						<Box bg='white' borderRadius='full' p={2} >
							<FaLinkedinIn color='black' />
						</Box>
					</Button>
				</HStack>
			</Grid>
		</Wrapper>
	);
};
