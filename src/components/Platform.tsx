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
					px={5}
					py={2}
					bg='brand'
					height='min-content'
					borderRadius='full'
					width='max-content'
					gridColumn={{ base: '1 / 2', sm: '1 / -1' }}
				>
					The Platform
				</Heading>
				<Image
					src='/img/laptop.png'
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
			<Grid 
				templateColumns="repeat(2, 1fr)"
				gap={40}
				justify-self = 'center'
				alignContent='center'
				alignItems='center'
			>
				<Image
					boxShadow="xl"
					rounded="md"
					objectFit="cover"
					width="100%"
					src="\img\platform\Gig Work with more breakdown (3).png"
					alt="Project Marketplace"
				/>
				<Image
					boxShadow="xl"
					rounded="md"
					objectFit="cover"
					width="92%"
					src="\img\platform\job information.png"
					alt="Project Marketplace"
				/>

			</Grid>
		</Wrapper>
	);
};
