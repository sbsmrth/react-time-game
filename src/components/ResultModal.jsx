import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result} </h2>
      <p>
        The target time was <strong>{targetTime} s.</strong>
      </p>
      <p>
        You stopped the timer with
        <strong>X seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

ResultModal.propTypes = {
  result: PropTypes.string.isRequired,
  targetTime: PropTypes.number.isRequired,
};

export { ResultModal };
