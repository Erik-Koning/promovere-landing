import React from 'react';
import { Grid, GridItem, Button, Heading, Text, VStack, AspectRatio } from '@chakra-ui/react';
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
		<Wrapper bg='brand' pt='10' pb='10'>
			
				<Grid h="100%" templateColumns="repeat(2, 1fr)" gap={6}>
					<GridItem colSpan={1}>
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
					</GridItem>
					<GridItem pt={22} colSpan={1}>
						<AspectRatio maxW="100%" ratio={1.775}>
						<iframe
							title="naruto"
							src="https://www.youtube.com/embed/AiJufeNL6ms"
							allowFullScreen
						/>
						</AspectRatio>
					</GridItem>
				</Grid>
			
		</Wrapper>
	);
};
