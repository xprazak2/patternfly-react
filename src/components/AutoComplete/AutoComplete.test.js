import React from 'react';
import { shallow } from 'enzyme';
import AutoComplete from './AutoComplete';

test('AutoComplete is working !!', () => {
  const bsSize = 'large';
  const align = 'justify';
  const clearButton = true;
  const multiple = true;
  const allowNew = true;
  const options = ['One', 'Two', 'Three'];
  const props = { bsSize, align, clearButton, multiple, allowNew, options };
  const component = shallow(<AutoComplete {...props} />);

  expect(component.render()).toMatchSnapshot();
});
