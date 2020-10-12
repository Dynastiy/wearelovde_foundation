<template>
    <div>
        <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-9">
                        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
                            <div class="container-fluid">
                                <router-link to="/" class="navbar-brand custom-navbar-logoImage" href="#"></router-link>
                                <button class="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav">
                                        <li class="nav-item pl-4">
                                            <router-link to="/" class="nav-link home-hover" aria-current="page" href="#">HOME</router-link>
                                        </li>
                                        <li class="nav-item pl-4">
                                            <router-link to="/about" class="nav-link home-hover" href="#">ABOUT US</router-link>
                                        </li>
                                        <li class="nav-item dropdown pl-4">
                                            <a class="nav-link dropdown-toggle active home-hover" href="#"
                                                id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
                                                aria-expanded="false">
                                                OUR WORK
                                            </a>
                                            <ul class="dropdown-menu menu-box rounded-0"
                                                aria-labelledby="navbarDropdownMenuLink">
                                                <li><router-link to="/events" class="dropdown-item dropmenu-select" href="#">EVENTS</router-link></li>
                                                <li><router-link to="/media" class="dropdown-item dropmenu-select" href="#">MEDIA</router-link></li>
                                            </ul>
                                        </li>
                                        <li class="nav-item pl-4">
                                            <a class="nav-link home-hover" href="#">CONTACT US</a>
                                        </li>
                                        <li class="nav-item pl-4">
                                            <a class="nav-link home-hover text-warning" href="#">DONATE<img class="pl-3"
                                                    src="@/assets/arrow3.png" alt="donate arrow"></a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="col-lg-3 custom-navbar-box">
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {}
</script>
<style>
</style>