import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

import loadStories from './loadStories';

addParameters({
	options: {
		theme: themes.light
	}
});

configure(loadStories, module);
