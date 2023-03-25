import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Img, ModalContent, ModalOverlay } from './modalStyled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;

    return (
      <ModalOverlay onClick={this.props.onClose}>
        <ModalContent>
          <Img src={src} alt={alt} />
        </ModalContent>
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
