<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>TAMBAH ULASAN</h4>
                        <hr>
                        <form @submit.prevent="store">
                            <div class="form-group mb-3">
                                <label class="form-label">Ulasan Anda</label>
                                <textarea size="lg" type="text" class="form-control" v-model="ulasan.isi" placeholder="Masukkan Ulasan anda disini"></textarea>
                                <!-- validation -->
                                <div v-if="validation.isi" class="mt-2 alert alert-danger">
                                    {{
                                            validation.isi[0]
                                    }}
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">SIMPAN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
export default {
    setup() {
        //state departemen
        const ulasan = reactive({
            isi : '',
        })
        //state validation
        const validation = ref([])
        //vue router
        const router = useRouter()
        //method store
        function store() {
            let isi = ulasan.isi
            axios.post('http://localhost:8000/api/ulasan', {
                isi: isi,
            }).then(() => {
                //redirect ke post index
                router.push({
                    name: 'ulasan.index'
                })
            }).catch(error => {
                //assign state validation with error
                validation.value = error.response.data
            })
        }
        //return
        return {
            ulasan,
            validation,
            router,
            store
        }
    }
}
</script>
<style>

</style>

<!-- ulasan -->