import React, { useRef } from 'react';
import './Styles/SignupPopup.css';

interface SignUpPopupProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const SignUpPopup: React.FC<SignUpPopupProps> = ({ visible, setVisible }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="popup-overlay" onClick={handleClickOutside}>
      <div className="popup-modal" ref={modalRef}>
        <button
          className="popup-close-button"
          onClick={() => setVisible(false)}
        >
          &times;
        </button>
        <div>
          <h2 className="popup-title">SIGN UP</h2>
        </div>
        <h2 className="popup-subtitle">Create an account to continue</h2>

        <div className="popup-input-group">
          <label className="popup-label">Email</label>
          <input className="popup-input" placeholder="Enter your Email" />
        </div>

        <div className="popup-input-group">
          <label className="popup-label">Username</label>
          <input className="popup-input" placeholder="Enter your username" />
        </div>

        <div className="popup-password-group">
          <div className="popup-password-header">
            <label className="popup-password-label">Password</label>
          </div>
          <input
            type="password"
            className="popup-input"
            placeholder="Enter your Password"
          />
          <label className="popup-footer-label">
            Already have an account?{' '}
            <span className="popup-footer-span">Login Now -</span>
          </label>
        </div>

        <button className="popup-button" onClick={() => setVisible(false)}>
          Login Now
        </button>
      </div>
    </div>
  );
};

export default SignUpPopup;
