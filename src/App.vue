<template>
  <div id="app">
    <topnav></topnav>
    <router-view></router-view>
    <footerArea></footerArea>
  </div>
</template>

<script>
import topnav from './components/layouts/topnav.vue'
import footerArea from './components/layouts/footer.vue'

export default {
  name: 'App',
  components: {
    topnav,
    footerArea
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');

html {
    scroll-behavior: smooth;
}
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Source Sans Pro', Roboto;
}
 body {
    background-color: #FEFEFE;
}
header {
    background-color: #030224;
}
.navbar-custom {
    background-color: #030224;
    padding-left: 2rem;
}
.custom-navbar-logoImage {
    width: 90px;
    height: 70px;
    background-image: url('./assets/Logo.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;
}
.home-hover {
    width: fit-content;
    border-bottom: 5px solid #030224;
}
.home-hover:hover {
    width: fit-content;
    border-bottom: 5px solid #FFD101;
    transition: ease-in-out .5s;
}
a.dropmenu-select {
    background-color: #fefefe;
}
a.dropmenu-select:hover {
    background-color: #FFD101;
}
.custom-navbar-box {
    background-color: #FEFEFE;
    width: 300px;
    background-image: url('./assets/semiellipse.svg');
    background-position-x: 8rem;
    background-repeat: no-repeat;
    background-size: 100%;
}
div.header-image {
    height: 200px;
    background-image: url('./assets/header-image.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
div.overlay {
    height: 200px;
    background-color: rgb(3, 2, 36, .8);
    display: flex;
}
h2.heading-text {
    color: #fefefe;
    align-self: center;
    margin: auto;
}

section#videos {
    padding: 6rem 0 4rem 0;
}
h2.video-text,
h2.image-text {
    padding: 0 0 1rem 0;
}
div.appreciation-box1 {
    background-color: rgb(156, 154, 214);
    background-image: url('./assets/Ellipse17.png');
    background-position-x: 13.5rem;
    background-position-y: 10rem;
    background-repeat: no-repeat;
    background-size: 46%;
}
div.appreciate-box {
    margin: 7rem 4rem 5rem;
}
h4.appreciate {
    font-size: 2rem;
    margin: 3rem 0 .7rem 0;
    color: #FEFEFE;
    font-weight: 300;
}
p.charity {
    font-size: 1rem;
    color: #FEFEFE;
    font-weight: 300;
    margin: 0 0 3rem 0;
}
div.video-box1 {
    background-color: #D9E2EC;
    height: 350px;
    display: flex;
}
div.play-icon {
    width: 60px;
    height: 60px;
    margin: auto;
    align-self: center;
    background-image: url('./assets/play-icon.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

/*IMAGE SECTION*/

section#images {
    padding: 0 0 6rem 0;
}
div.img-gallery1 {
    height: 300px;
    margin-bottom: 20px;
    background-image: url('./assets/img1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
div.img-gallery2 {
    height: 300px;
    margin-bottom: 20px;
    background-image: url('./assets/img2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
div.img-gallery3 {
    height: 300px;
    margin-bottom: 20px;
    background-image: url('./assets/img3.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
div.img-gallery4 {
    height: 300px;
    margin-bottom: 20px;
    background-image: url('./assets/img4.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
div.img-gallery5 {
    height: 300px;
    margin-bottom: 20px;
    background-image: url('./assets/img5.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
div.img-gallery6 {
    height: 300px;
    margin-bottom: 20px;
    background-image: url('./assets/img6.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
div.img-gallery7 {
    height: 300px;
    margin-bottom: 20px;
    background-image: url('./assets/img7.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
div.img-gallery8 {
    height: 300px;
    margin-bottom: 20px;
    background-image: url('./assets/img8.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
/*
div.img-gallery9 {
    height: 300px;
    background-image: url(Assets/img9.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
*/

/* FOOTER SECTION */
footer {
    background-color: #030224;
    padding: 3rem 0 1rem 0;
    display: grid;
    grid-template-columns: 300px 300px auto;
    grid-template-rows: 300px;
    grid-template-areas: "a b c"
    "d d d";
    gap: 50px;
    background-image: url('./assets/Ellipse 20.png');
    background-position-x: 110%;
    background-position-y: 140%;
    background-repeat: no-repeat;
    background-size: 30%;
    /* background-image: url('./assets/footer-ellipse.png');
    background-position-x: 10rem;
    background-position-y: 10rem;
    background-repeat: no-repeat;
    background-size: cover;*/
}
div.footer-logo {
    grid-area: a;
    width: 175px;
    height: 120px;
    justify-self: center;
    align-self: center;
    background-image: url('./assets/weloveLogo.svg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 80%;
}
div.contact-details {
    grid-area: b;
}
div.quicklinks-details {
    grid-area: c;
}
p.contact {
    color: #FEFEFE;
    font-size: 1.2rem;
    padding: 1rem 0;
}
p.address,
p.phone-number {
    color: #FEFEFE;
    font-size: 1rem;
    font-weight: 300;
}
div.social-icons {
    display: flex;
    padding: 1rem 0;
}
a > i.fa-facebook,
a > i.fa-instagram {
    font-size: 1.6rem;
    padding-right: 20px;
    color: #FEFEFE;
}
a > i.fa-twitter {
    font-size: 1.6rem;
    color: #FEFEFE;
}
a > i.fa-facebook:hover,
a > i.fa-instagram:hover,
a > i.fa-twitter:hover {
    color: #FFD101;
    transition: ease-in-out;
}
div.footer-navs {
    display: flex;
}
p.quicklinks {
    color: #FEFEFE;
    font-size: 1.2rem;
    padding: 1rem 0;
}
p.footer-navslink > a {
    color: #FEFEFE;
    padding-right: 20px;
    font-size: 1rem;
    font-weight: 300;
    text-decoration: none;
}
p.footer-navslink > a:hover {
    color: #FFD101;
    transition: ease-in-out .3s;
}

p.footer-bar {
    grid-area: d;
    background-color: #030224;
    text-align: center;
    width: fit-content;
    margin: auto;
    color: #FEFEFE;
    font-weight: 300;
    font-size: .9rem;
}
p.footer-bar2 {
    display: none;
}


/*MEDIA QUERIES*/

@media (max-width: 1037px) {
    .navbar-custom {
        padding-left: 1rem;
    }
    .home-hover {
        font-size: .9rem;
    }
    footer {
        gap: 20px;
    }
    p.contact,
    p.quicklinks {
        font-size: 1rem;
    }
    p.address,
    p.phone-number {
        font-size: .85rem;
    }
    p.footer-navslink > a {
        font-size: .85rem;
    }
    p.footer-navslink > a {
        padding-right: 10px;
    }
    a > i.fa-facebook,
    a > i.fa-instagram,
    a > i.fa-twitter {
        font-size: 1.3rem;
    }
}

@media (max-width: 991px) {
    div.appreciation-box1 {
        background-position-x: 9rem;
        background-position-y: 11rem;
        background-size: 60%;
    }
    footer {
        gap: 10px;
    }
    div.video-box1 {
        height: 362px;
    }
}

@media (max-width: 768px) {
    h4.appreciate {
        font-size: 1.8rem;
    }
    p.charity {
        font-size: .9rem;
    }
    footer {
        display: flex;
        flex-direction: column-reverse;
        background-position-x: 105%;
        background-position-y: 100%;
        background-repeat: no-repeat;
        background-size: 30%;
    }
    div.footer-logo {
        margin: 1rem 0 4rem;
    }
    div.quicklinks-details {
        display: none;
    }
    div.quicklinks-details2 {
        margin: auto;
        color: #FEFEFE;
    }
    li > a.footer-navslinks {
        color: #FEFEFE;
    }
    div.contact-details {
        text-align: center;
    }
    div.social-icons {
        display: inline-flex;
    }
    p.quicklinks {
        text-align: center;
    }
    div.footer-navs {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    p.footer-bar {
        display: none;
    }
    /*
    div.copy {
        margin-top: -2rem;
        background-color: #030224;
    }*/
    p.footer-bar2 {
        display: block;
        color: #FEFEFE;
        width: fit-content;
        margin: -2rem auto 0;
        font-size: .8rem;
        font-weight: 300;
    }
}
@media (max-width: 425px) {
    div.appreciation-box1 {
        background-image: none;
    }
    footer {
        background-position-x: 100%;
        background-position-y: 100%;
        background-size: 45%;
    }
    p.footer-bar2 {
        margin: -3rem auto;
    }
}
@media (max-width: 375px) {
    div.appreciate-box {
        margin: 7rem 2.5rem 5rem;
    }
}
</style>
