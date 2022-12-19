<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">LIST PRODUK ADMIN</h1>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr class="text-center">
                                    <th scope="col">EMAIL</th>
                                    <th scope="col">NAMA</th>
                                    <th scope="col">TELEPON</th>
                                    <th scope="col">ALAMAT</th>
                                    <th scope="col">AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, id) in users" :key="id" class="text-center">
                                    <td>{{ user.email }}</td>
                                    <td>{{ user.nama }}</td>
                                    <td>{{ user.telepon }}</td>
                                    <td>{{ user.alamat }}</td>
                                    <td v-if="user.id=='1'" class="text-center">
                                        <button @click.prevent="userDelete(user.id)" class="btn btn-sm btn-danger ml-1 disabled">DELETE</button>
                                    </td>
                                    <td v-else class="text-center">
                                        <button @click.prevent="userDelete(user.id)" class="btn btn-sm btn-danger ml-1">DELETE</button>
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
        let users = ref([])

        const token = localStorage.getItem('token')

        onMounted(() => {
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

            axios.get('http://localhost:8000/api/user')
            .then(response => {
                users.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })

            
        })
        //method delete
        function userDelete(id) {
            axios.delete(`http://localhost:8000/api/user/${id}`)
            .then(() => {
                users.value.splice(users.value.indexOf(id), 1);
            }).catch(error => {
                console.log(error.response.data)
            })
        }
        return {
            users,
            userDelete
        }
    }
}
</script>
<style>

</style>