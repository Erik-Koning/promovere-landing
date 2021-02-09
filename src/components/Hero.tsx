import React from 'react';
import { Button, Heading, Link, Text, VStack } from '@chakra-ui/react';
import TextLoop from 'react-text-loop';
import { Wrapper } from './Wrapper';

const TextAnimation: React.FC = () => {
	const words = ['business', 'people', 'groups'];

	return (
		<TextLoop interval={2000}>
			{words.map((word, index) => (
				<Heading as='h2' size='2xl' lineHeight='1.3' key={index}>
					{word}
				</Heading>
			))}
		</TextLoop>
	);
};

export const Hero: React.FC = () => {
	return (
		<Wrapper bg='brand'>
			<VStack py={12} spacing={4} align='start' width="min-content">
				<Heading as='h2' size='2xl' lineHeight='1.3' width="max-content">
					Leading the new<br /> generation of agile<br /> <TextAnimation />
				</Heading>
				<Text>
					Promovere is a digital marketplace for businesses that increases employee engagement, rentention and
					growth
				</Text>
				<Button as={Link} bg="white" href="https://www.google.com" isExternal>Learn More</Button>
			</VStack>
		</Wrapper>
	);
};
