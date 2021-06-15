import React from 'react';
import { Grid, Heading, Text } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';
import { ImageWrapper } from './ImageWrapper';

export const REASONS_DATA = [
	{
		title: 'For Employees',
		reasons: [
			{
				title: 'Satisfaction',
				subText: 'Connecting projects to employees that balance their skill qualifications, and skill growth aspirations',
			},
			{
				title: 'Retention',
				subText: 'We intelligently match jobs, mentors, and career paths to employees based on their goals, and aspirations',
			},
			{
				title: 'Growth',
				subText: 'Identifying projects that match your growth aspirations, so we can help you develop in the most efficient way possible',
			},
		],
		img: {
			src: '/img/platform/recommendedOps.png',
			alt: 'Recommended Opportunities',
		},
	},
	{
		title: 'For Managers',
		reasons: [
			{
				title: 'Streamlined Communication',
				subText: 'Communicate opportunities across your organization effortlessly, with one-to-many postings',
			},
			{
				title: 'Foster Growth',
				subText: 'A proper system to foster and encourage growth opportunities',
			},
			{
				title: 'Organization',
				subText: 'Manage each employee\'s individual career path, goals, and aspirations in one place',
			},
		],
		img: {
			src: '/img/platform/postOps.png',
			alt: 'Magnifying Glass',
		},
	},
	{
		title: 'For Businesses',
		reasons: [
			{
				title: 'Innovation',
				subText: 'Enables innovative projects that are internal to your company to be connected effectively with the employees who are passionate about achieving it',
			},
			{
				title: 'Employee Retention',
				subText: 'Employees are happier and more likely to grow within your company',
			},
			{
				title: 'Productivity',
				subText: 'With employees that are more engaged, work quality is improved, and more ambitious work is executed',
			},
		],
		img: {
			src: '/img/platform/pastOps.png',
			alt: 'Previous Opportunities',
		},
	},
];

interface ReasonItemProps {
	isEven?: boolean;
	number: number;
	title: string;
	reasons: {
		title: string;
		subText: string;
	}[];
	img: {
		src: string;
		alt: string;
	};
}

const ReasonItem: React.FC<ReasonItemProps> = ({ isEven, number, title, reasons, img }) => {
	const Graphic = () => <ImageWrapper src={img.src} alt={img.alt} display={{ base: 'none', sm: 'block' }} width='425px' height='330px' mt='50' boxShadow="xl" />;

	const ListNumber = () => (
		<Text fontSize='2.2rem' mr={2} color='gray.500' fontWeight='700' lineHeight='1'>
			{number}.
		</Text>
	);

	const Info = () => (
		<Grid
			templateColumns={{
				base: isEven ? 'max-content 1fr' : 'max-content 1fr',
				md: isEven ? 'max-content 1fr' : '1fr',
			}}
			//mt='10'
			//mb='20'
			//pb='20'
		>
			{!isEven && <ListNumber />}
			<Grid
				templateColumns={{ base: isEven ? '1fr max-content' : 'max-content 1fr', md: 'max-content 1fr' }}
				gridColumn={isEven ? '1 / -1' : '2 / 3'}
				alignSelf='end'
				gap={2}
			>
				{isEven && <ListNumber />}
				<Heading pb={2} size='lg' alignSelf='end' justifySelf={{ base: 'start', md: 'start' }}>
					{title}
				</Heading>
			</Grid>
			<Grid gap={6} gridColumn={{ base: '1 / 3', md: '2 / 3' }} mt={4}>
				{reasons.map((reason, index) => (
					<Grid key={index}>
						<Heading size='md'>{reason.title}</Heading>
						<Text>{reason.subText}</Text>
					</Grid>
				))}
			</Grid>
		</Grid>
	);

	return (
		<Wrapper bg={isEven ? 'brand' : 'none'} pt='2' pb='5'>
			<Grid
				justifyContent='space-between'
				templateColumns={{ base: '1fr', sm: isEven ? '60% 40%' : "40% 60%", lg: '50% 50%' }}
				templateRows='1fr'
				py={6}
				gap={4}
				bg={isEven ? 'brand' : 'white'}
			>
				{!isEven && <Info />}
				<Graphic />
				{isEven && <Info />}
			</Grid>
		</Wrapper>
	);
};

export const Reasons: React.FC = () => {
	return (
		<Grid id='why-promovere'>
			<Wrapper>
				<Heading as='h2' px={2} py={1} bg='brand' borderRadius='full' width='max-content'>
					Why Promovere
				</Heading>
			</Wrapper>
			{REASONS_DATA.map((section, index) => (
				<ReasonItem number={index + 1} key={index} {...section} isEven={index % 2 === 1} />
			))}
		</Grid>
	);
};
