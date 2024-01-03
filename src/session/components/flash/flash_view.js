import React from 'react';
import PropTypes from 'prop-types';

function classNameFor(type) {
  switch (type) {
    case 'error':
    case 'form_error':
      return 'alert-danger';
    case 'success':
      return 'alert-success';
    case 'alert':
    case 'warning':
      return 'alert-warning';
    case 'notice':
    default:
      return 'alert-info';
  }
}

// Initialize this once so that we always return the same function for performance.
const noop = () => {};

// Stub $ if undefined
if (typeof global.$ === 'undefined') {
  const elm = { fadeOut: noop };
  global.$ = () => elm;
  elm.parent = global.$;
}

const { $ } = global;

/**
 * This is a function generator which generates a function intended to be passed as a ref to the div.
 * If not passed an onFadeoutComplete function, the generator produces a noop. Otherwise,
 * it generates a function that causes the referenced element to fade out after 4000ms.
 * After the element has finished fading, the function calls onFadeoutComplete.
 * */
function setupFadeout(onFadeoutComplete) {
  if (onFadeoutComplete) {
    return (ref) => {
      window.setTimeout(() => {
        $(ref).fadeOut(800, onFadeoutComplete);
      }, 4000);
    };
  }
  return noop;
}

/**
 * This is a function generator which generates a function intended to be passed as the onClick to the close button.
 * The generated function will cause the parent element to fade out, then, if present, call onFadeoutComplete.
 * */
function setupClose(onFadeoutComplete) {
  return (e) => {
    e.preventDefault();
    $(e.target)
      .parent()
      .fadeOut(800, onFadeoutComplete || noop);
  };
}

/**
 * This React component displays a flash message, formatted like a Rails flash message.
 *
 * Note: It depends on jQuery (or compatible) being loaded as `$`
 * */
const FlashView = ({ msg, type, onFadeoutComplete }) => (
  <div ref={setupFadeout(onFadeoutComplete)} className={`alert ${classNameFor(type)}`}>
    <span>{msg}</span>
    <button type="button" className="alert-close" onClick={setupClose(onFadeoutComplete)}>
      &times;
    </button>
  </div>
);

FlashView.propTypes = {
  /** Corresponds to the Rails flash types */
  type: PropTypes.string,
  /** Message to be displayed to the user (will be html-escaped) */
  msg: PropTypes.string.isRequired,
  /** Callback to fire when message has faded */
  onFadeoutComplete: PropTypes.func,
};

FlashView.defaultProps = {
  type: 'warning',
  onFadeoutComplete: undefined,
};

export default FlashView;
