import { extendTheme } from '@chakra-ui/react';

import components from './components';
import foundations from './foundations';

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
	components,
	fonts,
	...foundations,
});

export default theme;
