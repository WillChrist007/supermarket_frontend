<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">ULASAN</h1>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <router-link :to="{ name: 'user.ulasan.create' }" class="btn btn-md btn-success">TAMBAH
                            ULASAN</router-link>
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">ISI ULASAN</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(ulasan, id_user) in ulasans" :key="id_user">
                                    <td>{{ ulasan.isi }}</td>
                                    <td>{{ ulasan.status }}</td>
                                    <td class="text-center">
                                        <router-link :to="{ name: 'user.ulasan.edit', params: { id: ulasan.id_user } }" 
                                        class="btn btn-sm btn-primary mr-1">EDIT</router-link>
                                        <button @click.prevent="ulasanDelete(ulasan.id_user)" class="btn btn-sm btn-danger ml-1">DELETE</button>
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
        let ulasans = ref([])

        onMounted(() => {
            axios.get('http://localhost:8000/api/ulasan')
            .then(response => {
                ulasans.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        })
        //method delete
        function ulasanDelete(id_user) {
            axios.delete(`http://localhost:8000/api/ulasanByIdUser/${id_user}`)
            .then(() => {
                ulasans.value.splice(ulasans.value.indexOf(id_user), 1);
            }).catch(error => {
                console.log(error.response.data)
            })
        }
        return {
            ulasans,
            ulasanDelete
        }
    }
}
</script>
<style>

</style>