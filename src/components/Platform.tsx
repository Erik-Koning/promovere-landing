import { Grid, Heading, Image, Text } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const Platform: React.FC = () => {
	return (
		<Wrapper>
			<Grid id='platform' py={16} gap={8}>
				<Heading as='h2' px={2} py={1} bg='brand' borderRadius='full' width='max-content'>
					The Platform
				</Heading>
				<Grid templateColumns='1fr 1fr' alignItems='center'>
					<Image src='/img/laptop.jpg' width='35vw' />
					<Grid gap={4}>
						<Heading>
							Simple Employee
							<br /> Driven Design
						</Heading>
						<Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra,
							feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit
							non. Non commodo volutpat, pharetra, vel.
						</Text>
					</Grid>
				</Grid>
			</Grid>
		</Wrapper>
	);
};
