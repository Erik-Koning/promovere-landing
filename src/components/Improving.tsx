import React from 'react';
import { Grid, Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const Improving: React.FC = () => {
	const CircleStyle = {
		width: '100%',
		height: '100%',
		borderRadius: 'full',
	};

	const CircleWithBorderStyle = {
		...CircleStyle,
		border: '1px solid',
		borderColor: 'brand',
	};

	const diagramPadding = '1vw';
	const diagramSize = useBreakpointValue({ base: '3vw', xs: '3vw', lg: '2rem' });

	return (
		<Wrapper>
			<Box py={20}>
				<Grid
					position='relative'
					height='max-content'
					width='100%'
					templateColumns={`1fr ${diagramPadding} repeat(16, ${diagramSize}) ${diagramPadding} 1fr`}
					templateRows={`max-content ${diagramPadding} repeat(16, ${diagramSize}) ${diagramPadding} max-content`}
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
						<Text fontSize='sm'>Machine-Learning algorithms provides relevant matches, and adapts with each  </Text>
						<Text fontSize='sm'>new data point to give all stack holders in the company a voice.</Text>
					</Box>
					
					<Text fontWeight='bold' gridRow='1 / 2' gridColumn='1 / -1' justifySelf='center'>
						More opportunities Posted
					</Text>
					<Text
						fontWeight='bold'
						gridRow='1 / -1'
						gridColumn='1 / 2'
						justifySelf='end'
						alignSelf='center'
						width={{ base: 'min-content', md: 'max-content' }}
					>
						Better Platform
					</Text>
					<Text
						fontWeight='bold'
						gridRow='1 / -1'
						gridColumn='-2 / -1'
						justifySelf='start'
						alignSelf='center'
						width={{ base: 'min-content', md: 'max-content' }}
					>
						More Feedback and Data
					</Text>
					<Text fontWeight='bold' gridRow='-2 / -1' gridColumn='1 / -1' justifySelf='center'>
						Better Machine Learning Algorithms
					</Text>

					<Box gridRow='4 / span 14' gridColumn='4 / span 14' {...CircleWithBorderStyle} bg='white' />
					<Box gridRow='6 / span 10' gridColumn='6 / span 10' {...CircleStyle} bg='brand' />
					<Box gridRow='8 / span 6' gridColumn='8 / span 6' {...CircleStyle} bg='white' />

					<Box gridRow='3 / span 2' gridColumn='10 / span 2' {...CircleWithBorderStyle} bg='white' />
					<Box gridRow='17 / span 2' gridColumn='10 / span 2' {...CircleWithBorderStyle} bg='white' />
					<Box gridRow='10 / span 2' gridColumn='3 / span 2' {...CircleWithBorderStyle} bg='white' />
					<Box gridRow='10 / span 2' gridColumn='17 / span 2' {...CircleWithBorderStyle} bg='white' />
				</Grid>
			</Box>
		</Wrapper>
	);
};
