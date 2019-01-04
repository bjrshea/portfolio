import React from 'react';

function Contact() {
  return(
    <div>
      <style>{`
        .form {
          margin: 10px auto;
          width: 350px;
          padding: 1em;
          border: 1px solid #CCC;
          border-radius: 1em;
        }
        input {
          border: 1px solid #CCC;
          border-radius: 5px;
        }
        textarea {
          margin-top: 20px;
          margin-bottom: 20px;
          border: 1px solid #CCC;
          border-radius: 5px;
          width: 93%;
          height: 30px;
        }
        label {
          margin-right: 10px;
        }
      `}</style>
      <div>
        <form className="form">
        <h2>Interested in working together?</h2>
        <label>Name:</label>
        <input default="" name="name"/>
        <br/>
        <label>Email:</label>
        <input default="" name="email"/>
        <br/>
        <label>Company:</label>
        <input default="" name="company"/>
        <br/>
        <label>Tell us about your event:</label>
        <br/>
        <textarea default="" name="details"></textarea>
        <br/>
        </form>
      </div>
    </div>
  );
}

export default Contact;
