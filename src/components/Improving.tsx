import React from 'react';
import { Image, Grid, Box, Heading, Text} from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const Improving: React.FC = () => {

	return (
		<Wrapper>
			<Box py={20}>
				<Grid
					position='relative'
					height='100%'
					width='100%'
					pt='8rem'
				>
					<Box position='absolute' top='0' left='0'>
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
							Cyclically Improving
						</Heading>
						<br></br>
						<Text>Machine-Learning algorithms provides relevant matches, and adapts with each  </Text>
						<Text>new data point to give all stack holders in the company a voice.</Text>
						<Image
							src='\img\cycle.png'
							ml={150}
							height="400px"
							width='75%'
							//maxWidth='20rem'
							alignItems='center'
							justifySelf='center'
						/>
					</Box>
					<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
				</Grid>
			</Box>
			
		</Wrapper>
	);
};
