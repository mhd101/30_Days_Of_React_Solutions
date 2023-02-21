import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Footer = () => (
  <div className='main'>
    <div className='card'>
      <div className='card-container'>
        <div className='heading'>
          <h2>SUBSCRIBE</h2>
        </div>
        <div className='heading-2'>
          <p>Sign up with your email address to receive news and updates.</p>
        </div>

        <div className='form-container'>

          <div className='input-container'>
            <input type='text' placeholder='First name' className='input-box'></input>
            <input type='text' placeholder='Last name' className='input-box'></input>
            <input type='text' placeholder='Email' className='input-box'></input>
          </div>

          <div>
            <button type='submit' className='submit-btn'>Subscribe</button>
          </div>
          
        </div>

      </div>
    </div>
  </div>
)







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Footer />, root);

