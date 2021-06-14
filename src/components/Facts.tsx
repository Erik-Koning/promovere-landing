import React, { useEffect } from 'react';
import { Box, Grid, Heading, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from 'react-countup';

interface FactItemProps {
	text: string;
	denominator?: number;
	statSymbol?: string;
	numerator?: number;
	isFraction?: boolean;
}

const FactItem: React.FC<FactItemProps> = ({ denominator = 0, numerator = 0, statSymbol, text, isFraction }) => {
	const headingSize = useBreakpointValue({ base: 'lg', xs: 'xl', sm: '2xl' });
	const [ref, inView] = useInView({ threshold: 0.7, triggerOnce: true });

	const { start: startDenominator, countUp: countUpDenominator } = useCountUp({
		start: 0,
		end: denominator,
		duration: 4,
		delay: 1,
	});

	const { start: startNumerator, countUp: countUpNumerator } = useCountUp({
		start: 0,
		end: numerator,
		duration: 4,
		delay: 4,
	});

	useEffect(() => {
		if (inView) {
			startDenominator();
			startNumerator();
		}
	}, [inView]);

	return (
		<Grid
			justifyItems='center'
			templateRows={{ base: '45% 55%', xs: '50% 50%' }}
			width='100%'
			maxWidth='16rem'
			gap={{ base: 0, xs: 2 }}
			ref={ref}
			opacity={0}
			transform='translateY(10px)'
			animation={inView ? 'fadeUp 0.7s ease-in forwards' : ''}
		>
			<Image width='100%' src='/img/hexagon.svg' gridRow='1 / 3' gridColumn='1 / 3' />
			<Heading size={headingSize} gridRow='1 / 2' gridColumn='1 / 3' alignSelf='end'>
				{isFraction ? `${countUpNumerator}/${countUpDenominator}` : countUpNumerator}
				{statSymbol}
			</Heading>
			<Text
				gridRow='2 / 3'
				fontSize={{ base: 'xs', sm: 'md' }}
				gridColumn='1 / 3'
				width='calc(100% - 2rem)'
				textAlign='center'
			>
				{text}
			</Text>
		</Grid>
	);
};

export const Facts: React.FC = () => {
	return (
		<Grid mb='70'>
			<Wrapper bg='brand'>
				<Grid pt={16} pb={6} gap={2}>
					<Heading>The Old Model of Business Isn't Working</Heading>
					<Text>Our mission is to improve these figures</Text>
				</Grid>
			</Wrapper>
				<Wrapper justify-self = 'center' align-content = 'center' bg='brand'>
					<Grid
						pl={75}
						maxWidth='70rem'
						templateColumns = 'repeat(3, 1fr)'
						gap={{ base: 20, xs: 5, md: 30 }}
						mx='auto'
					>	
						<FactItem numerator={15} statSymbol='x' text='Times an employee switches jobs in a lifetime' />
						<FactItem numerator={52} statSymbol='%' text='Percent of employees unengaged at work' />
						<FactItem numerator={1} denominator={2} text="Amount of an employee\'s salary to hire a replacement" isFraction />
					</Grid>
				</Wrapper>
			</Grid>
	);
};
