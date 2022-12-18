<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">ADMIN</h1>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <router-link :to="{ name: 'admin.create' }" class="btn btn-md btn-success">TAMBAH
                            PRODUK</router-link>
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">NAMA BARANG</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">JENIS</th>
                                    <th scope="col">HARGA</th>
                                    <th scope="col">KETERSEDIAAN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(admin, id) in admin" :key="id">
                                    <td>{{ admin.nama_barang }}</td>
                                    <td>{{ admin.id }}</td>
                                    <td>{{ admin.jenis }}</td>
                                    <td>{{ admin.harga }}</td>
                                    <td>{{ admin.ketersediaan }}</td>
                                    <td class="text-center">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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

        let dadmin = ref([])

        onMounted(() => {

            axios.get('http://localhost:8000/api/tambahProduk')
                .then(response => {

                    admin.value = response.data.data
                }).catch(error => {
                    console.log(error.response.data)
                })
        })

        return {
            admin
        }
    }
}
</script>
<style>

</style>