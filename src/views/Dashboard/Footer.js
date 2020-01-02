import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap'
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    return (
      <Row>
        <span className="col-12">Presented by <a href="example.com">Genius Coders</a></span>
      </Row>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
