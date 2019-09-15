import React from 'react';
import { storiesOf } from '@storybook/react';

import BrandButton from './BrandButton';

storiesOf('Brand Button', module)
	.add('with text', () => <BrandButton>Hello Button </BrandButton>)
	.add('with emoji', () => (
		<BrandButton>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</BrandButton>
	));
