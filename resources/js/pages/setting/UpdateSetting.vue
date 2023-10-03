<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Setting</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">Setting</li>
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
                    <div>
                        <div v-bind="getRootProps()">
                        <input v-bind="getInputProps()" />
                        <p v-if="isDragActive">Drop the files here ...</p>
                        <p v-else>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        <button @click="open">open</button>
                    </div>
                </div>
            <!-- /.modal-content -->
            </div>
        <!-- /.modal-dialog -->
        </div>
    </div>
</template>

<script setup>
import { useDropzone } from "vue3-dropzone";
import { usePage} from '@inertiajs/inertia-vue3';
import { ref} from 'vue';
import axios from "axios";

const props = defineProps(['modelValue','folder','title','endpoint']);

const emit = defineEmits(['update:modelValue','uploaded']);

const input = ref(null);
let resfiles = ref([]);

resfiles.value = props.modelValue ?  (props.modelValue.length == 0 ?  [] : JSON.parse(props.modelValue)) : [];

const saveFile = (files) => {
    const formData = new FormData();
    formData.append('_token',  usePage().props.value.csrf_token);
    formData.append('name', props.title);
    formData.append('folder', props.folder);
    for (var x = 0; x < files.length; x++) {
    formData.append("file[]", files[x]);
    }
    axios({
        method: 'POST',
        url: props.endpoint ??  route('media.store'),
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        onprocessfileprogress: (e) => {
          console.log(e.lengthComputable, e.loaded, e.total)
        }
    }).then(response => {
        resfiles.value = response.data.data;
        emit('update:modelValue',JSON.stringify(resfiles.value));
        emit('uploaded',resfiles.value);
    }).catch((thrown) => {
        if (axios.isCancel(thrown)) {
            console.log('Request canceled', thrown.message)
        } else {
            // handle error
        }
    })
}
const onDrop = (acceptFiles, rejectReasons) => {
      saveFile(acceptFiles);
      console.log(rejectReasons);
}

const remove = (file) => {
    const formData = new FormData();
    formData.append('_token',  usePage().props.value.csrf_token);
    axios({
        method: 'POST',
        url:  route('media.forceDelete',{media: file.id}),
        data: formData,
    }).then(response => {
        resfiles.value = resfiles.value.filter(f => f.id != file.id);
        emit('update:modelValue',resfiles.value);
        emit('uploaded',resfiles.value);
    }).catch((thrown) => {
            console.log('Request canceled', thrown)
    })
}


const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

</script>