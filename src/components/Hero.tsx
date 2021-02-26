import React from 'react';
import { Button, Heading, Text, VStack } from '@chakra-ui/react';
import TextLoop from 'react-text-loop';
import { Wrapper } from './Wrapper';
import { Link } from 'react-scroll';

const TextAnimation: React.FC = () => {
	const words = ['businesses.', 'employees.', 'managers.', 'people.'];

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
					Promovere is a digital marketplace for businesses that increases employee engagement, retention and
					growth
				</Text>
				<Link to='booking' smooth={true}>
					<Button bg='white' boxShadow="base" _hover={{ bg: "white", boxShadow: "lg"}}>
						Learn More
					</Button>
				</Link>
			</VStack>
		</Wrapper>
	);
};
