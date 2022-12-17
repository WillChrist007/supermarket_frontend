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
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://c1.wallpaperflare.com/path/572/808/14/shopping-business-retail-shopping-cart-ec46c507455d91d2e8508e37fe9240be.jpg"
                        class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>SELAMAT DATANG DI SUPERMARKET</h5>
                        <p>Kami memberikan pengalaman berbelanja yang mudah.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://c1.wallpaperflare.com/path/575/864/858/shopping-supermarket-merchandising-store-eefe03eef728bc0652a65b4ec0739e37.jpg"
                        class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>PRODUK TERJAMIN BERKUALITAS</h5>
                        <p>Semua produk di sini memiliki kualitas yang terbaik.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://r4.wallpaperflare.com/wallpaper/115/967/750/family-food-supermarket-shop-wallpaper-e01cda525c37c2e0557482957f5c776d.jpg"
                        class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>MEMENUHI KEBUTUHAN KELUARGA ANDA</h5>
                        <p>Kepuasan keluarga Anda menjadi prioritas kami.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>

<script>

</script>

<style>
    * {
        font-family: "Poppins";
    }

    h2 {
        font-size: 50px;
        -webkit-text-stroke: 2px red;
    }

    .carousel-caption{
        background-color: black;
        opacity: 75%;
        border-radius: 10px;
    }

    .carousel-item {
        max-height: 730px;
    }
</style>