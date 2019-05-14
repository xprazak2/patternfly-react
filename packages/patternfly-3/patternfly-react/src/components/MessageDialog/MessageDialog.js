import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { noop } from '../../common/helpers';
import { Modal } from '../Modal';
import { Button } from '../Button';
import { Spinner } from '../Spinner';

const MessageDialog = ({
  show,
  onHide,
  primaryAction,
  secondaryAction,
  title,
  icon,
  primaryContent,
  secondaryContent,
  primaryActionButtonBsStyle,
  secondaryActionButtonBsStyle,
  primaryActionButtonContent,
  secondaryActionButtonContent,
  className,
  footer,
  enforceFocus,
  accessibleName,
  accessibleDescription,
  buttonsDisabled,
  asyncInProgress,
  ...props
}) => {
  const bodyContent = (secondaryContent, asyncInProgress) => {
    if (asyncInProgress) {
      return <Spinner size="sm" loading />
    }

    return secondaryContent && secondaryContent;
  }

  return (
    <Modal
      className={classNames('message-dialog-pf', className)}
      show={show}
      onHide={onHide}
      enforceFocus={enforceFocus}
      aria-modal
      aria-labelledby={accessibleName}
      aria-describedby={accessibleDescription}
      {...props}
    >
      <Modal.Header>
        <Modal.CloseButton onClick={onHide} />
        <Modal.Title id={accessibleName}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {icon && icon}
        <div id={accessibleDescription}>
          {primaryContent && primaryContent}
          {bodyContent(secondaryContent, asyncInProgress)}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {!footer ? (
          <React.Fragment>
            {secondaryActionButtonContent && (
              <Button bsStyle={secondaryActionButtonBsStyle} onClick={secondaryAction} disabled={secondaryButtonDisabled}>
                {secondaryActionButtonContent}
              </Button>
            )}
            <Button autoFocus bsStyle={primaryActionButtonBsStyle} onClick={primaryAction} disabled={primaryButtonDisabled}>
              {primaryActionButtonContent}
            </Button>
          </React.Fragment>
        ) : (
          footer
        )}
      </Modal.Footer>
    </Modal>
  )
};

MessageDialog.propTypes = {
  /** additional class(es) */
  className: PropTypes.string,
  /** When true, the modal will show itself */
  show: PropTypes.bool.isRequired,
  /** A callback fired when the header closeButton or backdrop is clicked */
  onHide: PropTypes.func.isRequired,
  /** callback to trigger when clicking the default footer primary action button */
  primaryAction(props, propName, componentName) {
    if (props.footer) {
      return null;
    }
    return PropTypes.checkPropTypes(
      { primaryAction: PropTypes.func.isRequired },
      { [propName]: props[propName] },
      propName,
      componentName
    );
  },
  /** callback to trigger when clicking the default footer secondary action button */
  secondaryAction: PropTypes.func,
  /** Bootstrap button style for primary action */
  primaryActionButtonBsStyle: PropTypes.string,
  /** Bootstrap button style for secondary action */
  secondaryActionButtonBsStyle: PropTypes.string,
  /** content for default footer primary action button */
  primaryActionButtonContent(props, propName, componentName) {
    if (props.footer) {
      return null;
    }
    return PropTypes.checkPropTypes(
      { primaryActionButtonContent: PropTypes.node.isRequired },
      { [propName]: props[propName] },
      propName,
      componentName
    );
  },
  /** content for default footer secondary action button */
  secondaryActionButtonContent: PropTypes.node,
  /** modal title */
  title: PropTypes.string,
  /** modal body icon */
  icon: PropTypes.node,
  /** modal body primary content */
  primaryContent: PropTypes.node,
  /** modal body secondary content */
  secondaryContent: PropTypes.node,
  /** custom footer */
  footer: PropTypes.node,
  /** When true the modal will prevent focus from leaving the Modal while open */
  enforceFocus: PropTypes.bool,
  /** Gives the modal an accessible name by referring to the element that provides the dialog title. Must be unique, as this sets an id */
  accessibleName: PropTypes.string,
  /** Gives the modal an accessible description by referring to the modal content that describes the primary message or purpose of the dialog. Not used if there is no static text that describes the modal. Must be unique, as this sets an id */
  accessibleDescription: PropTypes.string,
  /** Whether primary button is disabled or not */
  primaryButtonDisabled: PropTypes.bool,
  /** Whether secondary button is disabled or not */
  secondaryButtonDisabled: PropTypes.bool,
  /** Whether async action is in progress or not */
  asyncInProgress: PropTypes.bool
};

MessageDialog.defaultProps = {
  className: '',
  primaryAction: null,
  secondaryAction: noop,
  primaryActionButtonBsStyle: 'primary',
  secondaryActionButtonBsStyle: 'default',
  primaryActionButtonContent: null,
  secondaryActionButtonContent: null,
  title: '',
  icon: null,
  primaryContent: null,
  secondaryContent: null,
  footer: null,
  enforceFocus: true,
  accessibleName: '',
  accessibleDescription: '',
  primaryButtonDisabled: false,
  secondaryButtonDisabled: false,
  asyncInProgress: false
};

export default MessageDialog;
