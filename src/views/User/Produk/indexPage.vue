<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">LIST PRODUK</h1>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <router-link :to="{ name: 'user.transaksi.create' }" class="btn btn-md btn-success">TAMBAH
                            TRANSAKSI</router-link>
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
                                <tr v-for="(product, id) in products" :key="id">
                                    <td>{{ product.nama_barang }}</td>
                                    <td>{{ product.id }}</td>
                                    <td>{{ product.jenis }}</td>
                                    <td>{{ product.harga }}</td>
                                    <td>{{ product.ketersediaan }}</td>
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
        let products = ref([])

        onMounted(() => {
            axios.get('http://localhost:8000/api/product')
            .then(response => {
                products.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        })

        return {
            products
        }
    }
}
</script>
<style>

</style>