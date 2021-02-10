import React from 'react';
import { Grid, Flex, Heading } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';
import { ImageWrapper } from './ImageWrapper';

export const Companies: React.FC = () => {
	return (
		<Wrapper>
			<Grid templateColumns={{ base: "1fr", lg: 'max-content 1fr' }} alignItems='center' rowGap={6} columnGap={10} py={12}>
				<Heading as='h3' textAlign={{ base: "center", lg: "unset" }}>As featured in:</Heading>
				<Flex justifyContent='center' wrap="wrap">
					<ImageWrapper mr={4} mb={2} height={{ base: "16vw", sm: "10vw" }} width={{ base: "24vw", sm: "14vw" }} maxWidth="14rem" src='/img/sponsors/ddqic.jpg' alt="Dunin-Deshpande Queen’s Innovation Centre" priority />
					<ImageWrapper mr={4} mb={2} height={{ base: "12vw", sm: "10vw" }} width={{ base: "32vw", sm: "20vw" }} maxWidth="20rem" src='/img/sponsors/loi.png' alt="League of Innovators" priority />
					<ImageWrapper mr={4} mb={2} height={{ base: "12vw", sm: "10vw" }} width={{ base: "28vw", sm: "16vw" }} maxWidth="16rem" src='/img/sponsors/qec.png' alt="The Queen's Entrepreneur's Competition" priority />
					<ImageWrapper mr={4} mb={2} height={{ base: "14vw", sm: "10vw" }} width={{ base: "40vw", sm: "28vw" }} maxWidth="28rem" gridColumn="span 3" src='/img/sponsors/ivey.png' alt="Ivey" priority />
					<ImageWrapper mr={4} mb={2} height={{ base: "16vw", sm: "10vw" }} width={{ base: "32vw", sm: "20vw" }} maxWidth="20rem" gridColumn="span 2" src='/img/sponsors/launch.jpg' alt="Launch Lab" priority />
				</Flex>
			</Grid>
		</Wrapper>
	);
};
