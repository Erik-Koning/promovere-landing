import React from 'react';
import { Grid, Heading, HStack } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';
import { ImageWrapper } from './ImageWrapper';

export const Companies: React.FC = () => {
	return (
		<Wrapper>
			<Grid templateColumns={{ base: "1fr", lg: 'max-content 1fr' }} alignItems='center' rowGap={6} columnGap={12} py={12}>
				<Heading as='h3' textAlign={{ base: "center", lg: "unset" }}>As featured in:</Heading>
				<Grid justifyItems='center'>
					<HStack spacing={4}>
						<ImageWrapper height="10vw" width={{ base: "18vw", lg: "16vw" }} src='/img/sponsors/ddqic.jpg' alt="Dunin-Deshpande Queen’s Innovation Centre" priority />
						<ImageWrapper height="10vw" width={{ base: "26vw", lg: "22vw" }} src='/img/sponsors/loi.jpg' alt="League of Innovators" priority />
						<ImageWrapper height="10vw" width={{ base: "24vw", lg: "20vw" }} src='/img/sponsors/qec.jpg' alt="The Queen's Entrepreneur's Competition" priority />
					</HStack>
					<HStack spacing={4}>
						<ImageWrapper height="10vw" width={{ base: "32vw", lg: "26vw" }} src='/img/sponsors/ivey.jpg' alt="Ivey" priority />
						<ImageWrapper height="10vw" width={{ base: "24vw", lg: "18vw" }} src='/img/sponsors/launch.jpg' alt="Launch Lab" priority />
					</HStack>
				</Grid>
			</Grid>
		</Wrapper>
	);
};
