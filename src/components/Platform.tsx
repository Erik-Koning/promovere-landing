import { Grid, Heading, Image, Text } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const Platform: React.FC = () => {
	return (
		<Wrapper>
			<Grid
				id='platform'
				py={10}
				gap={{ base: 4, md: 8 }}
				templateColumns='max-content 1fr'
			>
				<Heading
					as='h2'
					px={2}
					py={1}
					bg='brand'
					height='min-content'
					borderRadius='full'
					width='max-content'
					gridColumn={{ base: '1 / 2', sm: '1 / -1' }}
				>
					The Platform
				</Heading>
				<Image
					src='/img/laptop.jpg'
					width='100%'
					maxWidth='20rem'
					gridColumn={{ base: '2 / 3', sm: '1 / 2' }}
					gridRow={{ base: '1 / 3', sm: '2 / 4' }}
					justifySelf='center'
					alignSelf={{ base: 'end', xs: 'center' }}
				/>
				<Heading gridRow='2 / 3' width='max-content'>
					Simple Employee
					<br /> Driven Design
				</Heading>
				<Text gridColumn={{ base: '1 / 3', sm: '2 / 3' }} gridRow='3/4'>
				Increase employee engagement, retention and growth with three key features.
				Primarily an internal job marketplace powered by machine learning to match
				highly relevant jobs with employees, career pathing, and mentorship matching. 
				</Text>
			</Grid>
		</Wrapper>
	);
};
