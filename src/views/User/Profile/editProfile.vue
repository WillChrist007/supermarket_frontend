<template>
    <div id="app">
        <b-navbar style="background-color: #1D3557;" type="dark">
            <b-nav-item style="margin-top:-20px" to="/"><img src="http://tubespawkel10.link/img/logo.png"
                    style="width: 75%;"></b-nav-item>
            <b-navbar-nav class="ml-auto" variant="danger">
                <b-dropdown right>
                    <template #button-content style="background-color: #1D3557;">
                        <img :src="url + image" class="mx-auto d-block rounded-circle float-left" alt="Cinque Terre"
                            width="35px" height="35x">
                    </template>
                    <b-dropdown-item to="/indexProfile">Profile</b-dropdown-item>
                    <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
                </b-dropdown>
            </b-navbar-nav>

        </b-navbar>

        <div class="container" style="width: 60%">

            <h1 style="text-align: center; margin: 3rem 0rem; font-weight: bold">UPDATE PROFILE</h1>

            <form action="">
                <div class="form-group row">
                    <label for="inputNama" class="col-sm-3 col-form-label">Nama</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="nama" readonly>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputTelp" class="col-sm-3 col-form-label">No. Telp</label>
                    <div class="col-sm-9">
                        <input type="number" class="form-control" v-model="telepon" readonly>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputAlamat" class="col-sm-3 col-form-label">Alamat</label>
                    <div class="col-sm-9">
                        <input type="text" class="form-control" v-model="alamat" readonly>
                    </div>
                </div>

                <div style="margin: 1rem 0rem;" align="center">
                    <b-button variant="primary" @click="submit()" class="btn-md center-block mr-5" >Submit</b-button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "indexProfile",
    data() {
        return {
            nama: '',
            telepon: '',
            alamat: '',
            userID: '',
            url: this.$image
        }
    },

    methods: {
        readData() {
            var url = this.$api + '/user'
            this.$http.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => {
                    this.nama = response.data.name;
                    this.telepon = response.data.telepon;
                    this.alamat = response.data.alamat;
                })
        },
        logout() {
            localStorage.removeItem('id')
            localStorage.removeItem('token')
            this.$router.push({
                name: 'LoginPage'
            })
        },
        submit() {
            this.load = true;
                this.$http
                    .put(this.$api + "/update/" + this.userID, {
                        name: this.nama,
                        alamat: this.alamat,
                        telepon: this.telepon,
                    })
                    .then((response) => {
                        this.error_message = response.data.message;
                        this.color = "green";
                        this.snackbar = true;
                        this.load = false;                     
                        this.$router.push({
                            name: "indexProfile",
                        });
                    })
                    .catch((error) => {
                        this.error_message = error.response.data.message;
                        this.color = "red";
                        this.snackbar = true;
                        this.load = false;
                    });
        }
    },

    mounted() {
        this.readData();
    }
}
</script>

<style>
@import '../assets/styleToni.css';
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Sriracha");
@import url("https://fonts.googleapis.com/css?family=Roboto");
</style>