<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4>EDIT PRODUK</h4>
                        <hr />
                        <form @submit.prevent="update">
                            <div class="form-group mb-3">
                                <label class="form-label">Nama Product</label>
                                <input type="text" class="form-control" v-model="product.nama_barang"
                                    placeholder="Masukkan nama product" />
                                <!-- validation -->
                                <div v-if="validation.nama_barang" class="mt-2 alert alert-danger">
                                    {{ validation.nama_barang[0] }}
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Jenis Product</label>
                                <select class="form-control" v-model="product.jenis">
                                    <option value="" selected hidden disabled>Pilih Jenis Product</option>
                                    <option value="Makanan">Makanan</option>
                                    <option value="Minuman">Minuman</option>
                                    <option value="Kebersihan">Kebersihan</option>
                                    <option value="Perabot">Perabot</option>
                                </select>
                                <!-- validation -->
                                <div v-if="validation.jenis" class="mt-2 alert alert-danger">
                                    {{ validation.jenis[0] }}
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Ketersediaan</label>
                                <select class="form-control" v-model="product.ketersediaan">
                                    <option value="" selected hidden disabled>Pilih Ketersediaan</option>
                                    <option value="1">Tersedia</option>
                                    <option value="0">Kosong</option>
                                </select>
                                <!-- validation -->
                                <div v-if="validation.ketersediaan" class="mt-2 alert alert-danger">
                                    {{ validation.ketersediaan[0] }}
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <label for="content" class="form-label">Harga Product</label>
                                <input class="form-control" type="number" v-model="product.harga"
                                    placeholder="Masukkan Harga Product" />
                                <!-- validation -->
                                <div v-if="validation.ketersediaan" class="mt-2 alert alert-danger">
                                    {{ validation.harga[0] }}
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
    import { reactive, ref, onMounted } from "vue";
    import { useRouter, useRoute } from "vue-router";
    import axios from "axios";
    import { useToast } from "vue-toastification";
    export default {
        setup() {
            //state product
            const product = reactive({
                nama_barang: "",
                jenis: "",
                ketersediaan: "",
                harga: "",
            });
            //state validation
            const validation = ref([]);
            //vue router
            const router = useRouter();
            //params id
            const route = useRoute();
            const id = route.params.id

            const token = localStorage.getItem('token')

            onMounted(() => {
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            //get API from Laravel Backend
            axios
                .get("https://supermarketku.site/api/product/" + id,)
                .then(response => {
                    //assign state posts with response data
                    product.nama_barang = response.data.data.nama_barang
                    product.jenis = response.data.data.jenis
                    product.ketersediaan = response.data.data.ketersediaan
                    product.harga = response.data.data.harga
                }).catch(error => {
                    console.log(error.response.data)
                })
            })

            //method update
            function update() {
                let nama_barang = product.nama_barang;
                let jenis = product.jenis;
                let ketersediaan = product.ketersediaan;
                let harga = product.harga;

                let toast = useToast();
                axios
                    .put("https://supermarketku.site/api/product/" + id, {
                        nama_barang: nama_barang,
                        jenis: jenis,
                        ketersediaan: ketersediaan,
                        harga: harga,
                    })
                    .then(() => {
                        toast.success("Berhasil Edit Data !",{
                            timeout: 2000
                        })
                        //redirect ke post index
                        router.push({
                            name: "admin.produk.index",
                        });
                    })
                    .catch((error) => {
                        //assign state validation with error
                        validation.value = error.response.data;
                    });
            }
            //return
            return {
                product,
                validation,
                router,
                update,
            };
        },
    };
</script>

<style>

</style>
