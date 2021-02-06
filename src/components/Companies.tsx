import React from 'react';
import { Grid, Heading, HStack, Image } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const Companies: React.FC = () => {
	return (
		<Wrapper>
			<Grid templateColumns='max-content 1fr' alignItems='center' gap={6} py={12}>
				<Heading as='h3'>As featured in:</Heading>
				<Grid justifyItems='center'>
					<HStack spacing={4}>
						<Image src='/img/sponsors/ddqic.jpg' />
						<Image src='/img/sponsors/loi.jpg' />
						<Image src='/img/sponsors/qec.jpg' />
					</HStack>
					<HStack spacing={4}>
						<Image src='/img/sponsors/ivey.jpg' />
						<Image src='/img/sponsors/launch.jpg' />
					</HStack>
				</Grid>
			</Grid>
		</Wrapper>
	);
};
