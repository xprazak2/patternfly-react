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

AutoCompleteStories.addWithInfo('Menu Alignment', () => {
  const align = select('Alignment', [undefined, 'justify', 'left', 'right']);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Menu Alignment</h2>
      <AutoComplete
        align={align}
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

AutoCompleteStories.addWithInfo('Input Size', () => {
  const bsSize = select('Size', [undefined, 'small', 'default', 'large']);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Input Size</h2>
      <AutoComplete
        bsSize={bsSize}
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

AutoCompleteStories.addWithInfo('Multiple Selection', () => {
  const clearButton = boolean('Clear Button', true);
  const multiple = boolean('Multiple Selection', true);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Input Size</h2>
      <AutoComplete
        multiple={multiple}
        clearButton={clearButton}
        selected={['Burkina Fasu', 'Papua New Guinea', 'Satellite']}
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

AutoCompleteStories.addWithInfo('Highlight Results', () => {
  const highlightOnlyResult = boolean('highlight Only Result', true);
  const selectHintOnEnter = boolean('select Hint On Enter', true);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Highlight Results</h2>
      <AutoComplete
        highlightOnlyResult={highlightOnlyResult}
        selectHintOnEnter={selectHintOnEnter}
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

AutoCompleteStories.addWithInfo('Allow New Items', () => {
  const allowNew = boolean('Allow Adding New Items', true);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Allow Adding New Items</h2>
      <AutoComplete
        multiple
        allowNew={allowNew}
        options={Mocks.countries}
        labelKey="name"
        placeholder="Choose a state..."
      />
    </div>
  );
});

AutoCompleteStories.addWithInfo('Use With Forms', () => {
  const submitFormOnEnter = boolean('Submit Form On Enter', true);
  const minLength = number('Min Length to Autocomplete', 0);

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Submit Form On Enter</h2>
      <Form horizontal onSubmit={e => alert(`Form submitted!`)}>
        <div className="col-sm-10">
          <FormGroup>
            <AutoComplete
              minLengt={minLength}
              submitFormOnEnter={submitFormOnEnter}
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
  const handleSearch = () =>
    fetch('https://api.github.com/repos/patternfly/patternfly-react/forks')
      .then(response => response.json())
      .then(forks => forks.map(fork => fork.owner));

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <h2>Search a Forker</h2>
      <AsyncAutoComplete
        labelKey="login"
        minLength={0}
        placeholder="Search someone who have forked Patternfly-react.."
        onSearch={handleSearch}
        multiple
        clearButton
        highlightOnlyResult
        renderMenuItemChildren={option => <GithubMenuItem option={option} />}
      />
    </div>
  );
});
