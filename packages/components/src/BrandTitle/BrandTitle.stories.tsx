import React from 'react';
import { storiesOf } from '@storybook/react';
import BrandTitle from './BrandTitle';

storiesOf('Brand Title', module)
	.add('with text', () => <BrandTitle>Hello Button </BrandTitle>)
	.add('with emoji', () => (
		<BrandTitle>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</BrandTitle>
	));
