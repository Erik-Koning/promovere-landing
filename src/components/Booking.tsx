import React, { useState } from 'react';
import emailjs from "emailjs-com"
import { Box, Center, Grid, Heading, Input, Select, Spinner, Text, Textarea, useToast } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';
import { CheckCircleIcon } from '@chakra-ui/icons';

const serviceID = process.env.NEXT_PUBLIC_SERVICE as string
const templateID = process.env.NEXT_PUBLIC_TEMPLATE as string
const userID = process.env.NEXT_PUBLIC_USER as string

export const Booking: React.FC = () => {

	const toast = useToast()

	const [name, setName] = useState("")
	const [company, setCompany] = useState("")
	const [email, setEmail] = useState("")
	const [num_of_employees, setNumOfEmployees] = useState("")
	const [industry, setIndustry] = useState("")
	const [notes, setNotes] = useState("")

	const [sending, setSending] = useState(false)
	const [sent, setSent] = useState(false)

	const sendEmail = async (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault()
		setSending(true)
		const templateParams = {
			name, 
			company, 
			email, 
			num_of_employees, 
			industry, 
			notes
		};
		try {
			const response = await emailjs.send(serviceID, templateID, templateParams, userID)
			if (response.status === 200) handleEmailSuccess()
			else handleEmailError()
		} catch(err) {
			handleEmailError()
		}		
	}

	const handleEmailSuccess = () => {
		setSending(false)
		setSent(true)
		toast({
			title: "Email Sent",
			status: "success",
			duration: 4000				
		})
	}

	const handleEmailError = () => {
		setSending(false)
		toast({
			title: "Email Failed to Send",
			status: "error",
			duration: 4000				
		})
	}

	return (
		<Wrapper bg='brand'>
			<Grid id='booking' templateColumns={{ base: "1fr", md: '1fr 1fr' }} py={16}>
				<Box pt={{ base: 0, md: '10%' }} mb={{base: 8, md: 0 }}>
					<Heading mb={{ base: 0, md: 4 }} as='h2' textAlign={{ base: "center", md: "start" }}>
						Book a Demo
					</Heading>
					<Text textAlign={{ base: "center", md: "start" }}>Let's Set Up A Consultation!</Text>
				</Box>
				<Grid as="form" templateColumns='1fr 1fr' gap={4} onSubmit={sendEmail}>
					<Input 
						borderColor='gray.400' 
						type='text' 
						placeholder='Full Name' 
						gridColumn='1 / -1'
						value={name} 
						onChange={(e) => setName(e.target.value)} 
						required 
					/>
					<Input 
						borderColor='gray.400' 
						type='text' 
						placeholder='Company Name' 
						gridColumn='1 / -1' 
						value={company} 
						onChange={(e) => setCompany(e.target.value)} 
						required 
					/>
					<Input 
						borderColor='gray.400' 
						type='email' 
						placeholder='Email Address' 
						gridColumn='1 / -1' 
						value={email} 
						onChange={(e) => setEmail(e.target.value)} 
						required 
					/>
					<Select 
						borderColor='gray.400' 
						placeholder="# of Employees" 
						value={num_of_employees} 
						onChange={(e) => setNumOfEmployees(e.target.value)} 
						required
					>
						<option>0-10</option>
						<option>10-20</option>
						<option>20-50</option>
						<option>50-100</option>
						<option>100+</option>
					</Select>
					<Select 
						borderColor='gray.400' 
						placeholder="Industry" 
						value={industry} 
						onChange={(e) => setIndustry(e.target.value)} 
						required
					>
						<option>Software</option>
						<option>Construction</option>
						<option>Clothing</option>
						<option>Other</option>
					</Select>
					<Textarea 
						rows={6} 
						placeholder='Notes' 
						borderColor='gray.400' 
						gridColumn='1 / -1' 
						value={notes} 
						onChange={(e) => setNotes(e.target.value)} 
					/>
					{
					sent ? 
						<Center bg="gray.400" color="white" height="2.4rem" borderRadius="md" boxShadow="base" >
							<Text mr={2}>Sent</Text>
							<CheckCircleIcon color="green.400" mt="1px" />
						</Center> :
					sending ?	
						<Center bg="gray.400" color="white" height="2.4rem" borderRadius="md" boxShadow="base" >
							<Text mr={2}>Sending</Text>
							<Spinner size="sm" color="white" mt="1px" />
						</Center> :
						<Input 
							type="submit" 
							height="2.4rem" 
							value="Send" 
							bg="gray.400" 
							color="white" 
							borderRadius="md" 
							boxShadow="base" 
							border="none" 
							cursor="pointer"
							_hover={{
								bg: "gray.500"
							}}
						/> 
					}
				</Grid>
			</Grid>
		</Wrapper>
	);
};
