import React from 'react';
import { Grid, Heading, HStack, Image } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const Companies: React.FC = () => {
	return (
		<Wrapper>
			<Grid templateColumns={{ base: "1fr", lg: 'max-content 1fr' }} alignItems='center' rowGap={6} columnGap={12} py={12}>
				<Heading as='h3' textAlign={{ base: "center", lg: "unset" }}>As featured in:</Heading>
				<Grid justifyItems='center'>
					<HStack spacing={4}>
						<Image width={{ base: "18vw", lg: "16vw" }} src='/img/sponsors/ddqic.jpg' />
						<Image width={{ base: "26vw", lg: "22vw" }} src='/img/sponsors/loi.jpg' />
						<Image width={{ base: "24vw", lg: "20vw" }} src='/img/sponsors/qec.jpg' />
					</HStack>
					<HStack spacing={4}>
						<Image width={{ base: "28vw", lg: "22vw" }} src='/img/sponsors/ivey.jpg' />
						<Image width={{ base: "24vw", lg: "18vw" }} src='/img/sponsors/launch.jpg' />
					</HStack>
				</Grid>
			</Grid>
		</Wrapper>
	);
};
