import { Grid, Heading, Input } from '@chakra-ui/react';

export const Booking: React.FC = () => {
	return (
		<Grid id='booking'>
			<Heading as='h2'>Booking</Heading>

			<Input type='text' placeholder='Enter name' />
			<Input type='email' placeholder='Enter email' />
		</Grid>
	);
};
