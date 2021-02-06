import React from 'react';
import { Box, Button, Grid, Heading, Input, Select, Text, Textarea } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

export const Booking: React.FC = () => {
	return (
		<Wrapper bg='brand'>
			<Grid id='booking' templateColumns='1fr 1fr' py={16}>
				<Box pt='10%'>
					<Heading mb={4} as='h2'>
						Book a Demo
					</Heading>
					<Text>Let's Set Up A Consultation!</Text>
				</Box>
				<Grid templateColumns='1fr 1fr' gap={4}>
					<Input borderColor='gray.400' type='text' placeholder='Name' gridColumn='1 / -1' />
					<Input borderColor='gray.400' type='text' placeholder='Company Name' gridColumn='1 / -1' />
					<Input borderColor='gray.400' type='email' placeholder='Email Address' gridColumn='1 / -1' />
					<Select borderColor='gray.400'>
						<option value='' disabled selected hidden>
							# of Employees
						</option>
						<option>0-10</option>
						<option>10-20</option>
						<option>20-50</option>
						<option>50-100</option>
						<option>100+</option>
					</Select>
					<Select borderColor='gray.400'>
						<option value='' disabled selected hidden>
							Industry
						</option>
						<option>Software</option>
						<option>Construction</option>
						<option>Clothing</option>
					</Select>
					<Textarea placeholder='Notes' borderColor='gray.400' rows={6} gridColumn='1 / -1' />
					<Button bg='white'>Send</Button>
				</Grid>
			</Grid>
		</Wrapper>
	);
};
