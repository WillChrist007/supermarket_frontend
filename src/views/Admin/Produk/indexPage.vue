<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">LIST PRODUK ADMIN</h1>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <router-link :to="{ name: 'admin.produk.create' }" class="btn btn-md btn-success mb-4">TAMBAH
                            PRODUK</router-link>
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr class="text-center">
                                    <th scope="col">NAMA BARANG</th>
                                    <th scope="col">JENIS</th>
                                    <th scope="col">HARGA</th>
                                    <th scope="col">KETERSEDIAAN</th>
                                    <th scope="col">AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product, id) in products" :key="id" class="text-center">
                                    <td>{{ product.nama_barang }}</td>
                                    <td>{{ product.jenis }}</td>
                                    <td>{{ product.harga }}</td>
                                    <td v-if="product.ketersediaan=='1'">Tersedia</td>
                                    <td v-else>Kosong</td>
                                    <td class="text-center">
                                        <router-link :to="{ name: 'admin.produk.edit', params: { id: product.id } }" 
                                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        &nbsp;
                                        <button @click.prevent="productDelete(products.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
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

        const token = localStorage.getItem('token')

        onMounted(() => {
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

            axios.get('http://localhost:8000/api/product')
            .then(response => {
                products.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })

            
        })
        //method delete
        function productDelete(id) {
            axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(() => {
                products.value.splice(products.value.indexOf(id), 1);
            }).catch(error => {
                console.log(error.response.data)
            })
        }
        return {
            products,
            productDelete
        }
    }
}
</script>
<style>

</style>