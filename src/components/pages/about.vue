<template>
    <div>
        <div class="heroImage">
          <div class="heroContent">
          <h3 class="text-center">ABOUT US</h3></div>
        </div>

        <!-- The Second Segment -->
        <div class="container segmentOne">
          <div class="row">
            <div class="col-md-6">
              <div class="container">
                <h2 id="fontIncrease">Our History</h2>
                <h3 class="mt-4">Charity defination is generosity</h3>
                <p class="mt-4">Charity defination is generosity and helpfullness especially towards the needy or suffering: Also aid
                  given to those in need. How to use charity in a sentence. charity defination is generosity and helpfullness
                  especially towards the needy or suffering:Also aid given to those in need. How to use charity in a sentence.
                </p>
                <p class="mt-4">
                  Charity defination is generosity and helpfullness especially towards the needy or suffering: Also aid
                  given to those in need. How to use charity in a sentence. charity defination is generosity and helpfullness
                  especially towards the needy or suffering:Also aid given to those in need. How to use charity in a sentence.
                </p>
              </div>
            </div>
            <div class="col-md-6">
                <div class="rightImage">
                  <div class="boxOne"></div>
                  <div class="boxTwo"></div>
                  <div class="innerImage"></div>
                  <div class="row text-light">
                    <div class="col-md-1"></div>
                    <div class="col-md-3 text-left">
                      <h5 class="textDown">20+<br>Projects</h5>
                    </div>
                    <div class="col-md-4 text-left">
                      <h5 class="textDown">300+<br>Children</h5>
                    </div>
                    <div class="col-md-4 text-left">
                      <h5 class="textDown">40+<br>Volunteers</h5>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <!-- The Third Segment -->
        <div class="container">
          <div class="row segmentThree">
            <div class="col-md-6">
              <h2 class="tagName">WHAT WE DO</h2>
              <p class="mt-4">
                Charity defination is generosity and helpfullness especially towards the needy or suffering: Also aid
                given to those in need. How to use charity in a sentence. charity defination is generosity and helpfullness
                especially towards the needy or suffering:Also aid given to those in need. How to use charity in a sentence.
              </p>
              <div class="mt-4">
              <button class="btn text-warning firstBtn">DONATE <span><img class="pl-3"
                                                    src="@/assets/arrow3.png" alt="donate arrow"></span></button>
              <router-link to="/volunteer" class="btn text-dark secondBtn">VOLUNTEER</router-link></div>
            </div>
            <div class="col-md-6 bg">
              <h2 id="fontIncrease">Our Core Values</h2>
              <div class="blendImage mt-4 text-light">
                <div class="container imgContent">
                <p class="mt-4">Charity defination is generosity and helpfullness especially towards the needy or suffering</p>
                <ul>
                  <li>Impact Focus</li>
                  <li>Collaboration</li>
                  <li>Group Aspiration</li>
                  <li>Appreciation</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Fourth Segment -->
      <div class="container segmentFour">
        <h2 id="fontIncrease">Our Team</h2>
        <div class="row mt-5">        
            <div class="col-md-4 bg bg-light text-center">
              <img src="@/assets/img1.jpg" class="imgt">
              <h4 class="mt-3">Chief Team Man</h4>
              <p>Chief Team Man</p>
            </div>
            <div class="col-md-4 bg bg-light text-center">
              <img src="@/assets/img2.jpg" class="imgt">
              <h4 class="mt-3">Chief Team Man</h4>
              <p>Chief Team Man</p>
            </div>
            <div class="col-md-4 bg bg-light text-center">
              <img src="@/assets/img3.jpg" class="imgt">
              <h4 class="mt-3">Chief Team Man</h4>
              <p>Chief Team Man</p>
            </div>
        </div>
      </div>

        <!-- Fifth Segment -->
        <div class="row segmentFifth">
          <div class="container">
            <div class="col-md-6">
              <h2 class="textSize">Where the money goes</h2>
              <p><b>
                Charity defination is generosity and helpfullness especially towards the needy or suffering
              </b></p>
              <p class="mt-2 mio">
                Charity defination is generosity and helpfullness especially towards the needy or suffering: Also aid
                given to those in need. How to use charity in a sentence. charity defination is generosity and helpfullness
                especially towards the needy or suffering:Also aid given to those in need. How to use charity in a sentence.
              </p>
            </div>
          </div>
        </div>

        <!-- Last Segment -->
        <div class="text-center lastSection">
          <button class="btn text-warning firstBtn">DONATE <span><img class="pl-3"
                                                    src="@/assets/arrow3.png" alt="donate arrow"></span></button>
          <router-link to="/volunteer" class="btn text-dark secondBtn">VOLUNTEER</router-link></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.heroImage{
    background: linear-gradient(rgb(41, 41, 53, 0.5), rgb(150, 150, 231)), url('~@/assets/header.png') ;
    background-size: cover;
    background-repeat: no-repeat;
    height: 200px;
    background-position: center;
    z-index: 5;
    background-attachment: fixed;
  }
  .heroContent{
    color: white;
    padding-top: 3rem;
  }
  .rightImage{
      background: #030224;
      position: relative;
      margin-top: 15rem;
  }
  .segmentThree, .segmentOne{
    margin-top: 8rem;
  }
  .segmentOne{
    margin-top: 6rem;
  }
  .segmentFour{
    margin-top: 7rem;
    margin-bottom: 7rem;
  }
  .segmentFifth{
    margin-top: 9rem;
    background: url('~@/assets/img8.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    margin: 0 !important;
    color: #fff;
  }
  .innerImage{
    background: url('~@/assets/img9.jpg');
    position: absolute;
    height: 20.8rem;
    width: 18rem;
    bottom: 8.3rem;
    right: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }
  .imgt{
    height: 25rem;
    width: 99%;
    justify-content: center;
    border-radius: 5px;
  }
  .tagName{
    font-weight: 600;
    font-size: 40px;
  }
  #fontIncrease{
    font-weight: 600;
    font-size: 37px;
  }
  .textDown{
    margin-top: 7.9rem;
    margin-bottom: 4rem;
  }
  .textSize{
    font-size: 45px;
    margin-top: 2.5rem;
  }
  .mio{
    margin-bottom: 3rem;
  }
  .firstBtn{
    background-color: #030224 !important;
    padding: 10px 40px 10px 40px !important;
    margin-right: 2rem;
    font-size: 0.7rem !important;
  }
  .secondBtn{
    background-color: #fff !important;
    padding: 10px 40px 10px 40px !important;
    border: solid 1px #000 !important;
    font-size: 0.7rem !important;
  }
  .lastSection{
    margin-top: 6rem;
    margin-bottom: 6rem;
  }
  .blendImage{
    background:linear-gradient(rgba(15, 15, 15, 0.9), rgba(1, 1, 10, 0.7)), url('~@/assets/image1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 280px;
    position: relative;
    background-position: center;
    z-index: 3;
    background-attachment: fixed;
  }
  .imgContent{
    position: absolute;
    color: #fff;
    padding-left: 3rem !important;
  }
  li{
    text-size-adjust: 2rem;
    line-height: 2.5rem;
  }
  .boxOne{
    position: absolute;
    height: 50px;
    width: 58px;
    border: solid #ffd101;
    background-color: transparent;
    left: -35px;
    top: -20px;
  }
  .boxTwo{
    position: absolute;
    height: 50px;
    width: 58px;
    border: solid #ffd101;
    background-color: transparent;
    left: -35px;
    bottom: -20px;
  }
 @media only screen 
 and (min-device-width: 320px) 
 and (max-device-width: 480px){
     .boxOne{
        display: none;
    }
    .boxTwo{
      display: none;
    } 
    .rightImage{
      margin-top: 4.5rem;
    }
 }
  
</style>