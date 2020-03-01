/* eslint-disable react/no-typos */
import React, { Component } from "react";
import PropTypes from "prop-types";
import VSensor from "react-visibility-sensor";

class VisibilitySensor extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      active: true
    };
  }

  render() {
    const { active } = this.state;
    const { once, children, ...otherProps } = this.props;
    return (
      <VSensor
        partialVisibility={true}
        active={active}
        onChange={isVisible => {
          once &&
            isVisible &&
            this.setState({ active: false }, () =>
              {}
            );
        }}
        {...otherProps}
      >
        {({ isVisible }) => {
            // @ts-ignore
            return children({ isVisible })}
        }
      </VSensor>
    );
  }
}

// @ts-ignore
VisibilitySensor.propTypes = {
  children: PropTypes.func.isRequired,
  once: PropTypes.bool
};

// @ts-ignore
VisibilitySensor.defaultProps = {
  once: false
};

export default VisibilitySensor;
