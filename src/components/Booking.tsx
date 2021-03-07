import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Box, Center, Grid, Heading, Input, Select, Spinner, Text, Textarea, useToast } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';

const serviceID = process.env.NEXT_PUBLIC_SERVICE as string;
const templateID = process.env.NEXT_PUBLIC_TEMPLATE as string;
const userID = process.env.NEXT_PUBLIC_USER as string;

export const Booking: React.FC = () => {
	const toast = useToast();

	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [num_of_employees, setNumOfEmployees] = useState('');
	const [industry, setIndustry] = useState('');
	const [industryText, setIndustryText] = useState('');
	const [notes, setNotes] = useState('');

	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);

	const sendEmail = async (e: React.FormEvent<HTMLDivElement>) => {
		e.preventDefault();
		setSending(true);
		const templateParams = {
			name,
			company,
			email,
			num_of_employees,
			industry: industry === 'Other' ? industryText : industry,
			notes,
		};
		try {
			const response = await emailjs.send(serviceID, templateID, templateParams, userID);
			if (response.status === 200) handleEmailSuccess();
			else handleEmailError();
		} catch (err) {
			handleEmailError();
		}
	};

	const handleEmailSuccess = () => {
		setSending(false);
		setSent(true);
		toast({
			title: 'Email Sent',
			status: 'success',
			duration: 4000,
		});
	};

	const handleEmailError = () => {
		setSending(false);
		toast({
			title: 'Email Failed to Send',
			status: 'error',
			duration: 4000,
		});
	};

	return (
		<Wrapper bg='brand'>
			<Grid id='booking' templateColumns={{ base: '1fr', md: '1fr 1fr' }} py={16}>
				<Box pt={{ base: 0, md: '10%' }} mb={{ base: 8, md: 0 }}>
					<Heading mb={{ base: 0, md: 4 }} as='h2' textAlign={{ base: 'center', md: 'start' }}>
						Book a Demo
					</Heading>
					<Text textAlign={{ base: 'center', md: 'start' }}>Looking forward to connecting!</Text>
				</Box>
				<Grid as='form' templateColumns='1fr 1fr' gap={4} onSubmit={sendEmail}>
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
						placeholder='# of Employees'
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
						placeholder='Industry'
						value={industry}
						onChange={(e) => setIndustry(e.target.value)}
						required
					>

<option>Accounting	</option>
<option>Airlines/Aviation	</option>
<option>Alternative Dispute Resolution	</option>
<option>Alternative Medicine	</option>
<option>Animation	</option>
<option>Apparel/Fashion	</option>
<option>Architecture/Planning	</option>
<option>Arts/Crafts	</option>
<option>Automotive	</option>
<option>Aviation/Aerospace	</option>
<option>Banking/Mortgage	</option>
<option>Biotechnology/Greentech	</option>
<option>Broadcast Media	</option>
<option>Building Materials	</option>
<option>Business Supplies/Equipment	</option>
<option>Capital Markets/Hedge Fund/Private Equity	</option>
<option>Chemicals	</option>
<option>Civic/Social Organization	</option>
<option>Civil Engineering	</option>
<option>Commercial Real Estate	</option>
<option>Computer Games	</option>
<option>Computer Hardware	</option>
<option>Computer Networking	</option>
<option>Computer Software/Engineering	</option>
<option>Computer/Network Security	</option>
<option>Construction	</option>
<option>Consumer Electronics	</option>
<option>Consumer Goods	</option>
<option>Consumer Services	</option>
<option>Cosmetics	</option>
<option>Dairy	</option>
<option>Defense/Space	</option>
<option>Design	</option>
<option>E-Learning	</option>
<option>Education Management	</option>
<option>Electrical/Electronic Manufacturing	</option>
<option>Entertainment/Movie Production	</option>
<option>Environmental Services	</option>
<option>Events Services	</option>
<option>Executive Office	</option>
<option>Facilities Services	</option>
<option>Farming	</option>
<option>Financial Services	</option>
<option>Fine Art	</option>
<option>Fishery	</option>
<option>Food Production	</option>
<option>Food/Beverages	</option>
<option>Fundraising	</option>
<option>Furniture	</option>
<option>Gambling/Casinos	</option>
<option>Glass/Ceramics/Concrete	</option>
<option>Government Administration	</option>
<option>Government Relations	</option>
<option>Graphic Design/Web Design	</option>
<option>Health/Fitness	</option>
<option>Higher Education/Acadamia	</option>
<option>Hospital/Health Care	</option>
<option>Hospitality	</option>
<option>Human Resources/HR	</option>
<option>Import/Export	</option>
<option>Individual/Family Services	</option>
<option>Industrial Automation	</option>
<option>Information Services	</option>
<option>Information Technology/IT	</option>
<option>Insurance	</option>
<option>International Affairs	</option>
<option>International Trade/Development	</option>
<option>Internet	</option>
<option>Investment Banking/Venture	</option>
<option>Investment Management/Hedge Fund/Private Equity	</option>
<option>Judiciary	</option>
<option>Law Enforcement	</option>
<option>Law Practice/Law Firms	</option>
<option>Legal Services	</option>
<option>Legislative Office	</option>
<option>Leisure/Travel	</option>
<option>Library	</option>
<option>Logistics/Procurement	</option>
<option>Luxury Goods/Jewelry	</option>
<option>Machinery	</option>
<option>Management Consulting	</option>
<option>Maritime	</option>
<option>Market Research	</option>
<option>Marketing/Advertising/Sales	</option>
<option>Mechanical or Industrial Engineering	</option>
<option>Media Production	</option>
<option>Medical Equipment	</option>
<option>Medical Practice	</option>
<option>Mental Health Care	</option>
<option>Military Industry	</option>
<option>Mining/Metals	</option>
<option>Motion Pictures/Film	</option>
<option>Museums/Institutions	</option>
<option>Music	</option>
<option>Nanotechnology	</option>
<option>Newspapers/Journalism	</option>
<option>Non-Profit/Volunteering	</option>
<option>Oil/Energy/Solar/Greentech	</option>
<option>Online Publishing	</option>
<option>Other Industry	</option>
<option>Outsourcing/Offshoring	</option>
<option>Package/Freight Delivery	</option>
<option>Packaging/Containers	</option>
<option>Paper/Forest Products	</option>
<option>Performing Arts	</option>
<option>Pharmaceuticals	</option>
<option>Philanthropy	</option>
<option>Photography	</option>
<option>Plastics	</option>
<option>Political Organization	</option>
<option>Primary/Secondary Education	</option>
<option>Printing	</option>
<option>Professional Training	</option>
<option>Program Development	</option>
<option>Public Relations/PR	</option>
<option>Public Safety	</option>
<option>Publishing Industry	</option>
<option>Railroad Manufacture	</option>
<option>Ranching	</option>
<option>Real Estate/Mortgage	</option>
<option>Recreational Facilities/Services	</option>
<option>Religious Institutions	</option>
<option>Renewables/Environment	</option>
<option>Research Industry	</option>
<option>Restaurants	</option>
<option>Retail Industry	</option>
<option>Security/Investigations	</option>
<option>Semiconductors	</option>
<option>Shipbuilding</option>
<option>Software	</option>
<option>Sporting Goods	</option>
<option>Sports	</option>
<option>Staffing/Recruiting	</option>
<option>Supermarkets	</option>
<option>Telecommunications	</option>
<option>Textiles	</option>
<option>Think Tanks	</option>
<option>Tobacco	</option>
<option>Translation/Localization	</option>
<option>Transportation	</option>
<option>Utilities	</option>
<option>Venture Capital/VC	</option>
<option>Veterinary	</option>
<option>Warehousing	</option>
<option>Wholesale	</option>
<option>Wine/Spirits	</option>
<option>Wireless	</option>
<option>Writing/Editing</option>
				
					</Select>
					{industry === 'Other' && (
						<Input
							borderColor='gray.400'
							type='text'
							placeholder='Specify Industry'
							gridColumn='1 / -1'
							value={industryText}
							onChange={(e) => setIndustryText(e.target.value)}
							required
						/>
					)}
					<Textarea
						rows={6}
						placeholder='Notes'
						borderColor='gray.400'
						gridColumn='1 / -1'
						value={notes}
						onChange={(e) => setNotes(e.target.value)}
						resize='none'
					/>
					{sent ? (
						<Center bg='gray.600' color='white' height='2.4rem' borderRadius='md' boxShadow='base'>
							<Text>Sent</Text>
						</Center>
					) : sending ? (
						<Center bg='gray.600' color='white' height='2.4rem' borderRadius='md' boxShadow='base'>
							<Text mr={2}>Sending</Text>
							<Spinner size='sm' color='white' mt='1px' />
						</Center>
					) : (
						<Input
							type='submit'
							height='2.4rem'
							value='Send'
							bg='gray.500'
							color='white'
							borderRadius='md'
							boxShadow='base'
							border='none'
							cursor='pointer'
							_hover={{
								bg: 'gray.600',
							}}
						/>
					)}
				</Grid>
			</Grid>
		</Wrapper>
	);
};
