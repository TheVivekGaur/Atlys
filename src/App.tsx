import { useState } from 'react';
import './App.css';
import LoginPopup from './Home/LoginScreen/Modals/LoginPopup';
import BlogPost from './Home/BlogPost';
import SignUpPopup from './Home/LoginScreen/Modals/SignupPopup';

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);

  return (
    <>
      <div className="app-container">
        <div className="blogpost-container">
          <BlogPost />
        </div>

        <div className="button-container">
          <button onClick={() => setIsLoginPopupOpen(true)}>Login Modal</button>
          <button onClick={() => setIsSignUpPopupOpen(true)}>
            Sign Up Modal
          </button>
        </div>

        {isLoginPopupOpen && (
          <LoginPopup
            visible={isLoginPopupOpen}
            setVisible={setIsLoginPopupOpen}
          />
        )}

        {isSignUpPopupOpen && (
          <SignUpPopup
            visible={isSignUpPopupOpen}
            setVisible={setIsSignUpPopupOpen}
          />
        )}
      </div>
    </>
  );
}

export default App;
