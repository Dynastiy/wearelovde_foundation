<template>
<div>
     <section>
        <div class="hero">
            <h3 class="text1"> VOLUNTEER </h3>
        </div>

        <div class="container">
            <div class="row">
              <div class="col-md-6 mt-4">
                <div class="mb-5">
                  <h2 class="text1">Requirements</h2>
                <p class="just text1">Charity definition is generosity and helpfulness especially towards the needy or suffering:
                  Also aid given to those in need. How to use charity in a sentence.
                  Charity definition is generosity and helpfulness especially towards the needy or suffering:
                  Also aid given to those in need. How to use charity in a sentence.
                </p>
                <div class="circle">
                <i class="fa fa-circle" aria-hidden="true"></i><span class="ml-1 text1">Charity definition is generosity and helpfulness.</span><br><br>
                <i class="fa fa-circle" aria-hidden="true"></i><span class="ml-1 text1">Charity definition is generosity and helpfulness.</span><br><br>
                <i class="fa fa-circle" aria-hidden="true"></i><span class="ml-1 text1">Charity definition is generosity and helpfulness.</span><br><br>
                <i class="fa fa-circle" aria-hidden="true"></i><span class="ml-1 text1">Charity definition is generosity and helpfulness.</span><br><br>
                </div>
                
                </div>
                <div class="mb-5">
                  <h2 class="text1">Benefits</h2>
                <p class="just text1">Charity definition is generosity and helpfulness especially towards the needy or suffering:
                  Also aid given to those in need. How to use charity in a sentence.
                  Charity definition is generosity and helpfulness especially towards the needy or suffering:
                  Also aid given to those in need. How to use charity in a sentence.</p>
                </div>
              </div>
              <div class="col-md-6 mt-4">
                <div>
                  <div>
                    <h4 class="text1"><i class="fa fa-smile-o" style="color: red;" aria-hidden="true"></i> Makes you happy</h4>
                    <p class="just text1 ml-4">Good for the mind, brings fulifilment to you, just seeing your
                        actions make positive impact in people, good for the mind, brings 
                        fulfilment to you, jus by seeing your actions make positive impact in 
                        people.
                    </p>
                  </div>

                  <div class="mt-4 text1">
                    <h4 class="text1"><i class="fa fa-heartbeat" style="color: red;" aria-hidden="true"></i> Developing<span class=""> a sense of purpose and motivating</span></h4>
                    <p class="just text1 ml-4">Good for the mind, brings fulifilment to you, just seeing your
                        actions make positive impact in people, good for the mind, brings 
                        fulfilment to you, jus by seeing your actions make positive impact in 
                        people.
                    </p>
                  </div>

                  <div class="mt-4 text1">
                    <h4><i class="fa fa-hand-o-right" style="color: red;" aria-hidden="true"></i> Learning new and interesting skills</h4>
                      <p class="just text1 ml-4">Good for the mind, brings fulifilment to you, just seeing your
                        actions make positive impact in people, good for the mind, brings 
                        fulfilment to you, jus by seeing your actions make positive impact in 
                        people.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-5">
                <div class="col-md-3  love">
                 <div class="ml-2 inside">
                  <h4 class="text-white now mb-4 text1">Volunteer now</h4>
                  <img src="@/assets/Logo.svg" alt="" class="mb-4 img">
                  <p class="text-white needy text1" style="font-size: 10px;">Charity definition is generosity and<br>
                     helpfulness especially towards the needy<br>
                      or suffering:
                    Charity definition</p>
                 </div>
               </div>

                <div class="col-md-9 main text1">
                    <form action="">
                      <div class="form-group">
                        <label for="fullname" class="text text1"><b>FULL NAME</b></label>
                        <input type="email" class="form-control" id="exampleInputEmail1" style="padding: 1.3rem;" aria-describedby="emailHelp" placeholder="Enter your full name">
                      </div>
                      <div class="form-row">
                        <div class="col-sm-7">
                          <label for="email" class="text text1"><b>EMAIL</b></label>
                          <input type="text" class="form-control" style="padding: 1.3rem;" placeholder="Enter Email">
                        </div>
                        <div class="col-sm-5">
                          <label for="email" class="text text1"><b>PHONE NUMBER</b></label>
                          <input type="text" class="form-control" style="padding: 1.3rem;" placeholder="Enter Phone Number">
                        </div>
                      </div> 
                      <div class="form-group mt-2">
                        <label for="fullname" class="text text1"><b>Skillset</b></label>
                        <input type="skillset" class="form-control" id="exampleInputEmail1" style="padding: 1.3rem;" aria-describedby="emailHelp" placeholder="What skill can you provide?">
                      </div>
                      <div class="form-group">
                        <label for="message" class="text text1"><b>MESSAGE</b></label>
                        <textarea type="text" class="form-control" name="message" id="Message" cols="49" rows="4" placeholder="Why do you want to volunteer?"></textarea>
                      </div>
                      <div class="form-check mb-2 mr-sm-2">
                        <input class="form-check-input" type="checkbox" id="inlineFormCheck">
                        <label class="form-check-label text text1" for="inlineFormCheck" style="background-color: rgb(221, 230, 246);">Notify me of upcoming events </label>
                      </div>
                      <button type="submit" class="btn my-1 text text1"><b>Volunteer &longrightarrow;</b></button>
                    </form>
                </div>
            </div>
        </div>
    </section>

</div>
</template>

<script>
export default {
    
}
</script>

<style>
.circle{
  position: relative;
  right: 1.5rem;
}
 .hero{
    background-image: url('~@/assets/image1.jpg');
    height: 10rem;
    background-color: rgb(48, 39, 39);
    background-blend-mode: overlay;
    background-repeat: no-repeat;
    background-size: cover;
  }
  h3{
    text-align: center;
    padding: 4rem;
    color: #fff;
  }
  .love{
    background-image: url('~@/assets/image4.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    /* width: 100% !important; */
  }
 
  .btn{
    color: blue;
    border: 2px solid #000;
  }
  .main{
    background-color: rgb(221, 230, 246);
    /* width: 100vw; */
  }
  
  .just{
    text-align: justify;
  }
  .text{
    color: rgb(8, 1, 33) !important;
    font-size: 10px;
  }
  .text1{
    font-family: 'Source Sans Pro';
  }
  .now{
    margin-top: 13rem;
  }
  .needy{
    text-align: left;
  }

  @media (max-width: 320px){
    .circle{
      position: relative;
      left: 8px;
    }
    .inside{
      position: relative;
      bottom: 5rem;
      left: 15px;
    }
    .now{
      font-size: 30px;
    }
    .needy{
      font-size: 13px !important;  
    }
}  

</style>