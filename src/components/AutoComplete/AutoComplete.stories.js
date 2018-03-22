import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';
import AutoComplete from './AutoComplete';
import AsyncAutoComplete from './AsyncAutoComplete';
import { Form, FormGroup, MenuItem, Button } from '../../index';
import Mocks from './mock';

const AutoCompleteStories = storiesOf('AutoComplete', module);

AutoCompleteStories.addDecorator(withKnobs);

AutoCompleteStories.addWithInfo('Basic Example', () => {
  const highlightOnlyResult = boolean('highlight Only Result', true);
  const clearButton = boolean('Clear Button', true);
  const multiple = boolean('Multiple Selection', false);
  const allowNew = boolean('Allow Adding New Items', false);
  const selectHintOnEnter = boolean('select Hint On Enter', true);
  const minLength = number('Min Length to Autocomplete', 0);
  const bsSize = select('Size', [undefined, 'default', 'small', 'large']);
  const align = select('Dropdown Alignment', [
    undefined,
    'justify',
    'left',
    'right'
  ]);
  const props = {
    bsSize,
    align,
    clearButton,
    multiple,
    allowNew,
    minLength,
    selectHintOnEnter,
    highlightOnlyResult
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Basic Example</h2>
      <AutoComplete
        {...props}
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

AutoCompleteStories.addWithInfo('Use With Forms', () => {
  const submitFormOnEnter = boolean('Submit Form On Enter', true);
  const highlightOnlyResult = boolean('highlight Only Result', true);
  const clearButton = boolean('Clear Button', true);
  const multiple = boolean('Multiple Selection', false);
  const allowNew = boolean('Allow Adding New Items', false);
  const selectHintOnEnter = boolean('select Hint On Enter', true);
  const minLength = number('Min Length to Autocomplete', 0);
  const align = select('Dropdown Alignment', [
    undefined,
    'justify',
    'left',
    'right'
  ]);
  const props = {
    align,
    clearButton,
    multiple,
    allowNew,
    minLength,
    selectHintOnEnter,
    highlightOnlyResult,
    submitFormOnEnter
  };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Submit Form On 'Enter'</h2>
      <Form horizontal onSubmit={e => alert('Form submitted!')}>
        <div className="col-sm-10">
          <FormGroup>
            <AutoComplete
              {...props}
              labelKey="name"
              options={Mocks.countries}
              placeholder="Choose a state..."
            />
          </FormGroup>
        </div>
        <div className="col-sm-2">
          <FormGroup>
            <Button bsStyle="btn-secondary" type="submit">
              Submit
            </Button>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
});

AutoCompleteStories.addWithInfo('Using Async Calls', () => {
  const selectHintOnEnter = boolean('select Hint On Enter', true);
  const minLength = number('Min Length to Autocomplete', 0);
  const bsSize = select('Size', [undefined, 'default', 'small', 'large']);
  const align = select('Dropdown Alignment', [
    undefined,
    'justify',
    'left',
    'right'
  ]);
  const props = { bsSize, align, minLength, selectHintOnEnter };

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Search a Forker</h2>
      <AsyncAutoComplete
        {...props}
        labelKey="login"
        minLength={0}
        placeholder="Search someone who have forked Patternfly-react.."
        onSearch={() => Mocks.forks.map(fork => fork.owner)}
        renderMenuItemChildren={result => (
          <MenuItem key={result.id}>
            <img
              alt="avatar"
              height="20px"
              src={result.avatar_url}
              style={{ borderRadius: '10px', margin: '5px' }}
            />
            {result.login}
          </MenuItem>
        )}
      />
      <br />
      <br />
      <h4>
        <b>The 'onSearch' prop</b>
      </h4>
      <p>An async function that have to return data.</p>
      <br />
      <h4>
        <b>The 'renderMenuItemChildren' prop</b>
      </h4>
      <p>
        A function that can manipulate the returned data and present it as
        options, returns an element.
      </p>
    </div>
  );
});
