import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs';
import AutoComplete from './AutoComplete';
import AsyncAutoComplete from './AsyncAutoComplete';
import { Form, FormGroup, Button } from '../../index';
import Mocks from './mock';
import GithubMenuItem from './GithubMenuItem';

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
      <h2>Submit Form On &quot;Enter&quot;</h2>
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

  const handleSearch = callback =>
    fetch('https://api.github.com/repos/patternfly/patternfly-react/forks')
      .then(response => response.json())
      .then(forks => callback(forks.map(fork => fork.owner)));

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
        onSearch={handleSearch}
        renderMenuItemChildren={option => <GithubMenuItem option={option} />}
      />
      <br />
      <br />
      <h4>
        <b>The &quot;onSearch&quot; prop</b>
      </h4>
      <p>A function that returns the options that we want to display.</p>
      <p>
        This function recieves a callback and <b>MUST</b> pass the async results
        into it.
      </p>
      <p>
        This process is <b>required</b> for the component to update its state
        and options properly.
      </p>
      <br />
      <h4>
        <b>The &quot;renderMenuItemChildren&quot; prop</b>
      </h4>
      <p>
        A function that can manipulate the returned data and present it as
        options, recieves an option and returns an element.
      </p>
    </div>
  );
});
