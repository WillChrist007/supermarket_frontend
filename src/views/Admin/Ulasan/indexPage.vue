<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">LIST ULASAN USER</h1>
    </div>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <table class="table table-striped table-bordered mt4">
                            <thead class="thead-dark">
                                <tr class="text-center">
                                    <th scope="col">ULASAN</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">AKSI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(ulasan, id) in ulasans" :key="id" class="text-center">
                                    <td>{{ ulasan.isi }}</td>
                                    <td v-if="ulasan.status=='1'">Sudah Dikonfirmasi</td>
                                    <td v-else>Belum Dikonfirmasi</td>
                                    <td class="text-center">                                        
                                        <button @click.prevent="ulasanDelete(ulasans.id)" class="btn btn-sm btn-primary ml-1">CONFIRM</button>
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

        const token = localStorage.getItem('token')

        onMounted(() => {
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

            axios.get('http://localhost:8000/api/ulasan')
            .then(response => {
                ulasans.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })

            
        })
        //method delete
        function ulasanDelete(id) {
            axios.delete(`http://localhost:8000/api/ulasan/${id}`)
            .then(() => {
                ulasans.value.splice(ulasans.value.indexOf(id), 1);
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