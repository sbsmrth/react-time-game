import PropTypes from 'prop-types';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      <h2>{userLost ? 'You lost' : `Your score: ${score}`}</h2>
      <p>
        The target time was <strong>{targetTime} s.</strong>
      </p>
      <p>
        You stopped the timer with
        <strong> {formattedRemainingTime}s left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

ResultModal.propTypes = {
  targetTime: PropTypes.number.isRequired,
  remainingTime: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};

export { ResultModal };
