import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';

const loadStories = () => {
	const defaultStories = storiesOf('Default', module).addDecorator(withKnobs);
	const scenarios = require.context('../src', true, /\.scenario\.tsx$/);

	scenarios.keys().forEach(scenarioKey => {
		const { Component, name } = scenarios(scenarioKey);
		defaultStories.add(name, () => <Component />);
	});
};

export default loadStories;
