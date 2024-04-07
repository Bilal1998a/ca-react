// ContactPage.jsx
import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    setIsSubmitted(true);
   
    setFormData({
      fullName: '',
      subject: '',
      email: '',
      body: ''
    });
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      {isSubmitted ? (
        <div className="alert alert-success" role="alert">
          Thank you! Your message has been sent successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="body">Message</label>
            <textarea id="body" name="body" value={formData.body} onChange={handleInputChange} className="form-control" rows="5" required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )}
    </div>
  );
}

export default ContactPage;
