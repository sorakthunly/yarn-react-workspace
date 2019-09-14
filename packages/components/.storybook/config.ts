import { addParameters, configure } from '@storybook/react';
import { themes } from '@storybook/theming';

const stories = require.context('../src', true, /\.stories\.tsx$/);

const loadStories = () => stories.keys().forEach(stories);

addParameters({
	options: {
		theme: themes.light
	}
});

configure(loadStories, module);
