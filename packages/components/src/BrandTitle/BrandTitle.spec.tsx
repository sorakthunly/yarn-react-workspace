import React from 'react';
import { shallow } from 'enzyme';

import BrandTitle from './BrandTitle';

describe('BrandTitle', () => {
	test('should render title with the correct prop', () => {
		const wrapper = shallow(<BrandTitle>Hello World</BrandTitle>);
		expect(wrapper.children().text()).toContain('Hello World');
	});
});
