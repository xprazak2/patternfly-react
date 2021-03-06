import React from 'react';
import { Progress, ProgressVariant } from '@patternfly/react-core';

class ProgressFailure extends React.Component {
  static title = 'Progress Failure';

  render() {
    return <Progress value={33} title="Failure due to an error" variant={ProgressVariant.danger} />;
  }
}

export default ProgressFailure;
