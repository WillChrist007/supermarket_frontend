<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>PROFILE USER</h4>
                        <hr>
                        <form action="">
                        <div class="form-group mb-3">
                            <label for="inputNama" class="col-sm-3 col-form-label">Nama</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="nama" readonly>
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="inputNama" class="col-sm-3 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="email" readonly>
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="inputTelp" class="col-sm-3 col-form-label">No. Telp</label>
                            <div class="col-sm-10">
                                <input type="number" class="form-control" v-model="telepon" readonly>
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="inputAlamat" class="col-sm-3 col-form-label">Alamat</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" v-model="alamat" readonly>
                            </div>
                        </div>
                        <button to="/editProfile" type="submit" class="btn btn-primary">Change Profile</button>                
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {

    
    setup() {
        //reactive state
        let users = ref([])

        const token = localStorage.getItem('token')

        //mounted
        onMounted(() =>{ 
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

            axios.get('http://localhost:8000/api/user')
            .then(response => {
                users.value = response.data.data
                this.nama = response.data.nama
                this.telepon = response.data.telepon
                this.alamat = response.data.alamat
            }).catch(error=> {
                console.log(error.response.data)
            })
        })

        //return
        return {
            users
        }
    }
}
</script>

<!-- Profile view -->