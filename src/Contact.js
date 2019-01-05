import React from 'react';

function Contact() {
  return(
    <div id="form-box">
      <style>{`
        #form-box {
          
        }
        .form {
          margin: 10px auto;
          width: 350px;
          padding: 1em;
          border: 1px solid #EAD2AC;
          border-radius: 1em;
          background-color: #EAD2AC;
        }
        h2 {
          text-align: center;
          margin-bottom: 20px;
        }
        input {
          border: 1px solid #CCC;
          border-radius: 5px;
          padding: 5px 0;
          margin: 10px 0;
          padding-left: 5px;
        }
        textarea {
          border: 1px solid #CCC;
          border-radius: 5px;
          width: 93%;
          height: 60px;
          margin: 10px 0;
          padding: 5px;
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
        <br/>
        <label>Tell me a little about you!</label>
        <br/>
        <textarea default="" name="details"></textarea>
        <br/>
        </form>
      </div>
    </div>
  );
}

export default Contact;
