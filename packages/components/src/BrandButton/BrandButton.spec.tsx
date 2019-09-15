import React from 'react';
import { shallow } from 'enzyme';

import BrandButton from './BrandButton';

describe('BrandButton', () => {
	test('should render button with the correct prop', () => {
		const wrapper = shallow(<BrandButton>Hello World</BrandButton>);
		expect(wrapper.children().text()).toContain('Hello World');
	});
});
