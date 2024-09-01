import React, { useRef } from 'react';
import './Styles/LoginPopup.css';

interface LoginPopupProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ visible, setVisible }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setVisible(false);
    }
  };

  return (
    <>
      {visible && (
        <div className="popup-overlay" onClick={handleClickOutside}>
          <div className="popup-container" ref={modalRef}>
            <div className="popup-header">
              <h2 className="popup-header-title">Welcome Back</h2>
              <h2 className="popup-header-subtitle">Log into your account</h2>
            </div>

            <div className="popup-input-container">
              <label className="popup-label-left">Email or Username</label>
              <input
                placeholder="Enter your email or username"
                className="popup-input"
              />
            </div>

            <div className="popup-password-container">
              <div className="popup-password-row">
                <label className="popup-label">Password</label>
                <label className="popup-forgot-label">Forget Password?</label>
              </div>
              <input
                type="password"
                placeholder="Enter your Password"
                className="popup-input"
              />
              <label className="popup-register-label">
                Not Registered yet?{' '}
                <span className="popup-register-span">Register now -</span>
              </label>
            </div>

            <button className="popup-button" onClick={() => setVisible(false)}>
              Login Now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
