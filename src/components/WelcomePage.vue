<template>
    <div>
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand fw-bold">SUPERMARKET</a>
                <div class="d-flex justify-content-end">
                    <router-link :to="{ name: 'register' }" class="btn btn-md btn-success">Register</router-link>
                    &nbsp;
                    <router-link :to="{ name: 'login' }" class="btn btn-md btn-primary">Login</router-link>
                </div>
            </div>
        </nav>
        <div class="bg">
            <div class="container min-vh-100 d-flex align-items-center justify-content-center">
                <div class="pt-20 mt-20">
                    <h2 class="text-center align-middle text-white">
                        <b>Welcome to SuperMarket</b>
                    </h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .bg {
        background-color: #f8f9fa;
        background-image: url("https://c1.wallpaperflare.com/path/572/808/14/shopping-business-retail-shopping-cart-ec46c507455d91d2e8508e37fe9240be.jpg");
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    * {
        font-family: "Poppins";
    }

    h2 {
        font-size: 50px;
        -webkit-text-stroke: 2px red;
    }
</style>