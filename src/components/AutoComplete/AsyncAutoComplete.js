import React from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

class AsyncAutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      isLoading: false
    };
  }

  handleSearch = () => {
    this.setState({ isLoading: true });
    const options = this.props.onSearch() || [];
    this.setState({ options, isLoading: false });
  };

  render() {
    return (
      <AsyncTypeahead
        {...this.props}
        onSearch={this.handleSearch}
        options={this.state.options}
        isLoading={this.state.isLoading}
      />
    );
  }
}

AsyncAutoComplete.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default AsyncAutoComplete;
