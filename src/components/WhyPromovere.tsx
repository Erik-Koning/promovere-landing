import React from 'react';
import { Box, Grid, Heading, Text } from '@chakra-ui/react';

const REASONS = [
	{
		title: 'Headline',
		subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
	},
	{
		title: 'Headline',
		subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
	},
	{
		title: 'Headline',
		subText: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Mattis et sed nam sem tellus erat.',
	},
];

interface ReasonItemProps {
	isOdd?: boolean;
	number: number;
	title: string;
	reasons: {
		title: string;
		subText: string;
	}[];
}

const ReasonItem: React.FC<ReasonItemProps> = ({ isOdd, number, title, reasons }) => {
	const graphic = <Box />;

	const listNumber = (
		<Text fontSize='4rem' mr={2} color='gray.500' fontWeight='700' lineHeight='1'>
			{number}.
		</Text>
	);

	const info = (
		<Grid templateColumns={isOdd ? 'max-content 1fr' : '1fr'}>
			{!isOdd && listNumber}
			<Grid templateColumns='max-content 1fr' gridColumn={isOdd ? '1 / -1' : '2 / 3'} alignSelf='end' gap={2}>
				<Heading pb={2} size='lg' alignSelf='end'>
					{title}
				</Heading>
				{isOdd && listNumber}
			</Grid>
			<Grid gap={6} gridColumn='2 / 3' mt={4}>
				{reasons.map((reason, index) => (
					<Grid key={index}>
						<Heading size='md'>{reason.title}</Heading>
						<Text>{reason.subText}</Text>
					</Grid>
				))}
			</Grid>
		</Grid>
	);

	return (
		<Grid
			justifyContent='space-between'
			templateColumns='50% 50%'
			py={6}
			px={20}
			gap={4}
			bg={isOdd ? 'brand' : 'white'}
		>
			{isOdd ? [graphic, info] : [info, graphic]}
		</Grid>
	);
};

export const WhyPromovere: React.FC = () => {
	return (
		<Grid id='why-promovere'>
			<Heading mx={20} as='h2' p={2} bg='brand' borderRadius='full' width='max-content'>
				Why Promovere?
			</Heading>

			<ReasonItem number={1} title='For Employees' reasons={REASONS} />
			<ReasonItem number={2} title='For Managers' reasons={REASONS} isOdd />
			<ReasonItem number={3} title='For Businesses' reasons={REASONS} />
		</Grid>
	);
};
