<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Profile</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">Profile</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary card-outline">
                        <div class="card-header">
                            <h3 class="card-title">
                            <i class="fas fa-edit"></i>
                            Modal Examples
                            </h3>
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">
                            Launch Default Modal
                            </button>
                        </div>
                    <!-- /.card -->
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modal-default">
            <div class="modal-dialog">
                <div class="modal-content">
                <form @submit.prevent="onSubmit" class="">
                    <div class="modal-header">
                        <h4 class="modal-title">Default Modal</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            <!-- vue-media-upload component -->
                            <div class="mb-4">
                                <label class="form-label">Media</label>
                                <div>
                                    <Uploader server="/api/profiles/media/upload" :is-invalid="errors.media ? true : false" @change="changeMedia" />
                                </div>
                                <p v-if="errors.media" class="text-danger">{{ errors.media[0] }}</p>
                            </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button class="btn btn-primary" :disabled="isLoading">
                            <div v-if="!isLoading">
                                Submit
                            </div>
                            <div v-if="isLoading">
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </div>
                        </button>
                    </div>
                    </form>
                </div>
            <!-- /.modal-content -->
            </div>
        <!-- /.modal-dialog -->
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import Uploader from 'vue-media-upload'

    export default {
        props:{
            indexRoute:{
                type: String,
                required: true
            }
        },
        mounted(){

        },
        data(){
            return{
                post:{
                    media: [],
                },
                errors:[],
                isLoading: false,
            }
        },
        methods:{
            onSubmit(){
                this.isLoading = true
                axios.post('/api/posts/create', this.post)
                    .then(response => {
                        window.location.replace(this.indexRoute);
                    })
                    .catch(error => {
                        if(error.response.data){
                            this.errors = error.response.data.errors
                        }
                        this.isLoading = false
                    })
            },
            changeMedia(media){
                this.post.media = media
            },
        },
        components:{
            Uploader
        }
    }
</script>