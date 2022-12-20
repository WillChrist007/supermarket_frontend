<template>
    <div class="d-flex justify-content-between flex-wrap flex-mdnowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">LIST ULASAN</h1>
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
                                    <td v-if="ulasan.status=='1'" class="text-center">                                        
                                        <button @click.prevent="ulasanConfirm(ulasan.id)" class="btn btn-sm btn-primary ml-1 disabled">CONFIRM</button>
                                    </td>
                                    <td v-else class="text-center">                                        
                                        <button @click.prevent="ulasanConfirm(ulasan.id)" class="btn btn-sm btn-primary ml-1">CONFIRM</button>
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useToast } from "vue-toastification";
export default {
    setup() {
        let ulasans = ref([])

        const token = localStorage.getItem('token')

        //state validation
        const validation = ref([]);
        //vue router
        const router = useRouter();

        const toast = useToast();

        onMounted(() => {
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

            axios.get('https://supermarketku.site/api/ulasan')
            .then(response => {
                ulasans.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })

            
        })
        //method delete
        function ulasanConfirm(id) {
            let status = 1;

            axios.put("https://supermarketku.site/api/ulasanConfirm/" + id, {
                        status: status
                    })
                    .then(() => {
                        ulasans.value.slice(ulasans.value.indexOf(id), 1);
                        toast.success("Berhasil Mengkonfirmasi Data !", {
                            timeout: 2000
                        })
                        //redirect ke post index
                        router.push({
                            name: "admin.ulasan.index",
                        });
                    })
                    .catch((error) => {
                        //assign state validation with error
                        validation.value = error.response.data;
                    });
        }
        return {
            ulasans,
            ulasanConfirm
        }
    }
}
</script>
<style>

</style>