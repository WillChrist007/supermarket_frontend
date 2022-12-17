<template>
    <v-main class="list">
        <v-card>
            <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title class="headline">Admin</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    outlined
                    hidden
                    details
                    style="margin-top:30px"
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn color="success" dark @click="dialog=true">Tambah</v-btn>
            </v-card-title>
        </v-card>
        <v-card>
            <v-data-table :headers="headers" :items="todos" :search="search">
                <template v-slot:[`item.actions`]="{ item }">
                    <v-btn small class="mr-2 blue-grey lighten-3" @click="editItem(item)">edit</v-btn>
                    <v-btn small class="mr-2 blue-grey lighten-3" @click="deleteItem(item)">delete</v-btn>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline"></span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field
                            v-model=""
                            label="Task"
                            required
                        ></v-text-field>
                        <v-select
                            v-model=""
                            :items="[``]"
                            label=""
                            required
                        ></v-select>

                        <v-textarea
                            v-model=""
                            label=""
                            required
                        ></v-textarea>
                        <v-select
                            v-model=""
                            :items="[``, ``]"
                            label=""
                            required
                        ></v-select>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" text @click="cancel"> Cancel</v-btn>
                    <v-btn color="blue-darken-1" text @click="save"> Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-main>
</template>
<script>
    export default{
        name: "ListItem",
        data() {
            return {
                search: null,
                dialog: false,
                headers: [
                    {
                        text: "Task",
                        align: "start",
                        sortable: true,
                        value: "task",
                    },
                    { text: "", value: "" },
                    { text: "", value: "" },
                    { text: "", value: "" },
                    { text: "", value: "" },
                ],
                todos: [
                    {
                        task: "",
                        priority: "",
                        note: "",
                        status: "",
                    },
                    {
                        task: "",
                        priority: "",
                        note: "",
                        status: "",
                    },
                    {
                        task: "",
                        priority: "",
                        note: "",
                        status: "",
                    },
                ],
                formTodo: {
                    task: null,
                    priority: null,
                    note: null,
                    status: null,
                },
            };
        },
        methods: {
            save () {
                this..push(this.);
                this.resetForm();
                this.dialog = false;
            },
            cancel() {
                this.resetForm();
                this.dialog = false;
            },
            resetForm() {
                this. = {
                    task: null,
                    priority: null,
                    note: null,
                    status: null,
                };
            },
        },
    };
</script>
<style>
    .text {
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
        font-size: 40px;
        font-style: italic;
    }
</style>