import React from 'react'

class Footer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(e) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (document.querySelector(".ctaBtn:not(.sent)") === null) {
      return
    }

    document.querySelector(".ctaBtn:not(.sent)").classList.add("active");
	  document.querySelector("input").focus();

    document.querySelector("input").addEventListener('keyup', function(){
    	if(regex.test(document.querySelector('input').value)) {
    		document.querySelector("button").removeAttribute("disabled");
      } else {
    		document.querySelector("button").setAttribute("disabled", "disabled");
      }
    });

    document.querySelector("form").addEventListener("submit", function(f) {
    	f.preventDefault();
    	if(regex.test(document.querySelector("input").value)) {
    		document.querySelector(".ctaBtn span").innerHTML = "Thanks!"
    		document.querySelector(".ctaBtn").classList.remove("active");
        document.querySelector(".ctaBtn").classList.add("sent");
    	}
    });
  }

  render() {

    return(
      <div>
        {/* <div className="cta">
          <div className="mryum">
            <img src="/Mr_Yum_logo_red.svg" alt="Mr Yum"/>
          </div>

          <h3>Loving photo menus?</h3>

          <p>The Mr Yum free app is launching soon  with photo menus from over 100 of Melbourne’s  best cafes and restaurants.</p>
          <p className="preRegister">Pre-register now to stay updated on our launch!</p>


          <div className='ctaBtn' onClick={ this.handleClick }>
            <span>Notify me</span>
            <form>
              <div className='input'>
                <input placeholder='E-mail'/>
              </div>
              <div className='button'>
                <button disabled='disabled' type='submit'>Send</button>
              </div>
            </form>
          </div>


        </div> */}

        <footer>©Copyright  Mr Yum 2018</footer>
      </div>
    )
  }
}

export default Footer;
