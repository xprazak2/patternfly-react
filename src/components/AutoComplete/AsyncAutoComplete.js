import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

class AsyncAutoComplete extends React.Component {
  state = {
    options: this.props.options,
    isLoading: this.props.isLoading
  };

  finishCallback = options => this.setState({ options, isLoading: false });

  handleSearch = () => {
    this.setState({ isLoading: true });
    // The user must pass the callback to
    // the 'onSearch' function in order to update the state properly.
    this.props.onSearch(this.finishCallback);
  };

  render = () => (
    <AsyncTypeahead
      {...this.props}
      onSearch={this.handleSearch}
      options={this.state.options}
      isLoading={this.state.isLoading}
    />
  );
}

AsyncAutoComplete.propTypes = {
  onSearch: PropTypes.func.isRequired,
  options: PropTypes.array,
  isLoading: PropTypes.bool,
  delay: PropTypes.number,
  promptText: PropTypes.object,
  searchText: PropTypes.object,
  useCache: PropTypes.bool
};

AsyncAutoComplete.defaultProps = {
  options: [],
  isLoading: false,
  delay: 200,
  promptText: <span>Type to search...</span>,
  searchText: <span>Searching...</span>,
  useCache: true
};

export default AsyncAutoComplete;
