import React from 'react';
import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import TextLoop from 'react-text-loop';

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
		<VStack borderEndRadius='3xl' px={20} py={6} bg='purple.100' width='60vw' spacing={4} align='start'>
			<Heading as='h2' size='2xl' lineHeight='1.3'>
				Leading the new generation of agile <TextAnimation />
			</Heading>
			<Text>
				Promovere is a digital marketplace for businesses that increases employee engagement, rentention and growth
			</Text>
			<Button>Learn More</Button>
		</VStack>
	);
};
