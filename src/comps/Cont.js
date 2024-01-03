import React from 'react';  
import "./cont.css";
import {Link} from 'react-router-dom';
import Footer from "./Footer"



function Contact()
{
   return(
     
    <>
    

       <div class="container">
  <div class="row header">
    <h1>CONTACT US &nbsp;</h1>
    <h3>Fill out the form below to learn more!</h3>
  </div>
  <div class="row body">
    <form action="#">
      <ul>

        <li>
          <p class="left">
            <label for="first_name">first name</label>
            <input type="text" name="first_name" placeholder="John" required/>
          </p>
          <p class="pull-right">
            <label for="last_name">last name</label>
            <input type="text" name="last_name" placeholder="Smith" required/>
          </p>
        </li>

        <li>
          <p>
            <label for="email">email <span class="req">*</span></label>
            <input type="email" name="email" placeholder="john.smith@gmail.com" required/>
          </p>
        </li>
        <li>
          <div class="divider"></div>
        </li>
        <li>
          <label for="comments">comments</label>
          <textarea cols="46" rows="3" name="comments"></textarea>
        </li>

        <li>
          <small><strong>
          <input class="btn btn-submit" type="submit" value="Submit" />
            </strong></small>
        </li>

      </ul>
    </form>
  </div>
</div>

{/* <Grid container spacing={4} style={{ marginTop: '40px', justifyContent: 'center' }}>
          <Grid item xs={12}>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h5" gutterBottom style={{ color: '#333' }}>
                Connect with Us
              </Typography>
              {/* Add your social media icons and links here */}
              {/* <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="large" style={{ color: '#E4405F', margin: '0 10px' }} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FacebookIcon fontSize="large" style={{ color: '#1877F2', margin: '0 10px' }} />
              </a>
              <a href="https://github.com/Lilly1121/React_IRC" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large" style={{ color: '#333', margin: '0 10px' }} />
              </a>
            </div>
          </Grid>
        </Grid> */} 


        <Footer/>
    </>
    
        )
}
export default Contact;