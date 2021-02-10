import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { HTMLChakraProps, ThemingProps } from '@chakra-ui/system';

interface ImageWrapperProps extends HTMLChakraProps<'img'>, ThemingProps {
	src: string;
	alt: string;
	priority?: boolean;
}

export const ImageWrapper: React.FC<ImageWrapperProps> = ({ src, alt, priority, ...props }) => {
	return (
		<Box position='relative' {...props}>
			<Image src={src} alt={alt} layout='fill' objectFit='contain' priority={priority} />
		</Box>
	);
};
