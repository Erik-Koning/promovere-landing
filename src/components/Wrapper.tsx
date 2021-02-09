import React from 'react';
import { Box, ChakraStyleProps } from '@chakra-ui/react';

interface WrapperProps extends ChakraStyleProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children, bg = 'none', ...props }) => {
	return (
		<Box bg={bg ? bg : 'unset'} width='100%' px={{ base: 12, sm: 14, md: 20 }} {...props}>
			<Box mx='auto' maxW='1200px' w='100%'>
				{children}
			</Box>
		</Box>
	);
};
