import React from 'react';
import { Grid, Box, Heading, Text } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const Improving: React.FC = () => {
	return (
		<Wrapper>
			<Grid position='relative' py={40} my={30}>
				<Box position='absolute' top='0' left='0'>
					<Heading mb={2}>Ever-Improving</Heading>
					<Text fontSize='sm'>Machine Learning Algorithm</Text>
					<Text fontSize='sm'>Improvement cycle based on feedback</Text>
					<Text fontSize='sm'>Giving employees a voice</Text>
				</Box>
				<Box
					justifySelf='center'
					alignSelf='center'
					height='36vw'
					width='36vw'
					borderRadius='full'
					border='2px solid'
					borderColor='brand'
					position='relative'
				>
					<Box
						height='26vw'
						width='26vw'
						borderRadius='full'
						border='5vw solid'
						borderColor='brand'
						position='absolute'
						top='50%'
						left='50%'
						transform='translate(-50%, -50%)'
					/>
					<Text
						fontWeight='bold'
						position='absolute'
						top='0'
						left='50%'
						width='max-content'
						transform='translate(-50%, -4.5rem)'
					>
						More Oppurtunities Posted
					</Text>
					<Box
						height='7vw'
						width='7vw'
						borderRadius='full'
						border='3px solid'
						borderColor='brand'
						position='absolute'
						top='0'
						left='50%'
						bg='white'
						transform='translate(-50%, -50%)'
					/>
					<Text
						fontWeight='bold'
						position='absolute'
						top='100%'
						left='50%'
						width='max-content'
						transform='translate(-50%, 3.2rem)'
					>
						Better Machine Learning Algorithms
					</Text>
					<Box
						height='7vw'
						width='7vw'
						borderRadius='full'
						border='3px solid'
						borderColor='brand'
						position='absolute'
						top='100%'
						left='50%'
						bg='white'
						transform='translate(-50%, -50%)'
					/>
					<Text
						fontWeight='bold'
						position='absolute'
						top='50%'
						left='0'
						width='max-content'
						transform='translate(calc(-100% - 4rem), -50%)'
					>
						Better Platform
					</Text>
					<Box
						height='7vw'
						width='7vw'
						borderRadius='full'
						border='3px solid'
						borderColor='brand'
						position='absolute'
						top='50%'
						left='0'
						bg='white'
						transform='translate(-50%, -50%)'
					/>
					<Text
						fontWeight='bold'
						position='absolute'
						top='50%'
						left='100%'
						width='max-content'
						transform='translate(4rem, -50%)'
					>
						More Feedback and Data
					</Text>
					<Box
						height='7vw'
						width='7vw'
						borderRadius='full'
						border='3px solid'
						borderColor='brand'
						position='absolute'
						top='50%'
						left='100%'
						bg='white'
						transform='translate(-50%, -50%)'
					/>
				</Box>
			</Grid>
		</Wrapper>
	);
};
