<script setup>
    import axios from "axios";
    import { ref , onMounted , reactive } from 'vue';

    const users = ref([
    // {
    //     id: 1,
    //     name: 'John Doe',
    //     email: 'john@example.com',   
    // },{
    //     id: 2,
    //     name: 'Jimmy',
    //     email: 'jimmy@example.com',   
    // },{
    //     id: 3,
    //     name: 'Sian',
    //     email: 'sian@example.com',   
    // }
    ]);

    const form = reactive({
        name: '',
        email: '',
        password: '',
    });

    const getUsers = () => {
        // 須注意 axios.get('/api/users') 路徑須加上/ 以免讀不到或讀錯
        axios.get('/api/users').then((response) => {
            users.value = response.data;
        }).catch(error => {
            console.log(`catch error -> ${error}`);
        });
    }

    const createUser = () => {
        axios.post('/api/users', form).then((response) => {
            users.value.unshift(response.data);
            
            form.name = '';
            form.email = '';
            form.password = '';
            $('#createUserModal').modal('hide');
        }).catch(error => {
            console.log(`catch error -> ${error}`);
        });
    }


    onMounted(() => {
        getUsers();
    });
    
</script>

<template>
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0">Users</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li class="breadcrumb-item active">Users</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <!-- <div class="card-header">
                            <h3 class="card-title">DataTable with minimal features & hover style</h3>
                        </div> -->
                        <!-- /.card-header -->
                        <div class="card-body">
                            <button type="button" class="btn btn-secondary mb-2" data-toggle="modal" data-target="#createUserModal">
                                ADD
                            </button>
                            <table id="example2" class="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Registered Date</th>
                                        <th>Role</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(user,index) in users" :key="user.id">
                                        <td>{{ index+1 }}</td>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.email }}</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <!-- <tr>
                                        <td>1</td>
                                        <td>Pattie Murazik</td>
                                        <td>flakin@example.com</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Rthoda Kovacek PhD</td>
                                        <td>winifred.koepp@example.com</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>-</td>
                                    </tr> -->
                                </tbody>
                                <!-- <tfoot>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Registered Date</th>
                                        <th>Role</th>
                                        <th>Options</th>
                                    </tr>
                                </tfoot> -->
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>

        <div class="modal fade" id="createUserModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Add New User</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input v-model="form.name" type="text" class="form-control" id="name" placeholder="Enter full name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-model="form.email" type="email" class="form-control" id="email" placeholder="Enter full email">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input v-model="form.password" type="password" class="form-control" id="password" placeholder="Enter password">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button @click="createUser" type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
    </div>
</template>