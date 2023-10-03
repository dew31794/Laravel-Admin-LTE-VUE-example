<script setup>
    import axios from "axios";
    import { ref , onMounted , reactive } from 'vue';
    import { Form , Field } from 'vee-validate';
    import * as yup from 'yup';

    const users = ref([]);
    const editing = ref(false);
    const formValues = ref();
    const form = ref(null);

    // 取得資料
    const getUsers = () => {
        // 須注意 axios.get('/api/users') 路徑須加上/ 以免讀不到或讀錯
        axios.get('/api/users').then((response) => {
            users.value = response.data;
        }).catch(error => {
            console.log(`catch error -> ${error}`);
        });
    }

    // 表單驗證
    const createUserSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required().min(8),
    });

    const editUserSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().when((password,schema) => {
            return password ? schema.required().min(8) : schema;
        }),
    });

    const addUser = () => {
        editing.value = false;
        // this.$refs.form.resetForm();
        $('#userFormModal').modal('show');
    }
    
    // 新增資料
    const createUser = (value, { resetForm }) => {
        axios.post('/api/users', value).then((response) => {
            users.value.unshift(response.data);
            $('#userFormModal').modal('hide');
            resetForm();
        }).catch(error => {
            console.log(`catch error -> ${error}`);
        });
    };

    const editUser = (user) => {
        // console.log(user);
        editing.value = true;
        form.value.resetForm();
        $('#userFormModal').modal('show');
        formValues.value = {
            id: user.id,
            name: user.name,
            email: user.email
        };
    };

    // 修改資料
    const updateUser = (values) => {
        // console.log(values);
        axios.put('/api/users/' + formValues.value.id , values).then((response) => {
            const index = users.value.findIndex(user => user.id === response.data.id);
            users.value[index] = response.data;
            $('#userFormModal').modal('hide');
        }).catch(error => {
            console.log(`catch error -> ${error}`);
        }).finally(() => {
            form.value.resetForm();
        });
    };

    const handleSubmit = (values) => {
        if(editing.value) {
            updateUser(values);
        } else {
            createUser(values);
        }
    };

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
                            <button @click="addUser" type="button" class="btn btn-secondary mb-2">
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
                                        <td><a href="#" @click.prevent="editUser(user)"><i class="fa fa-edit"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.card-body -->
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>

        <div class="modal fade" id="userFormModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">
                            <span v-if="editing">Edit User</span>
                            <span v-else>Add New User</span>
                        </h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Form ref="form" @submit="handleSubmit" :validation-schema="editing ? editUserSchema : createUserSchema" v-slot="{ errors }" :initial-values="formValues">
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <Field name="name" type="text" class="form-control" :class="{'is-invalid': errors.name}" id="name" aria-describedby="nameHelp" placeholder="Enter full name" />
                                <span class="invalid-feedback">{{ errors.name }}</span>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <Field name="email" type="email" class="form-control" :class="{'is-invalid': errors.email}" id="email" aria-describedby="nameHelp" placeholder="Enter full email" />
                                <span class="invalid-feedback">{{ errors.email }}</span>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <Field name="password" type="password" class="form-control" :class="{'is-invalid': errors.password}" id="password" aria-describedby="nameHelp" placeholder="Enter password" />
                                <span class="invalid-feedback">{{ errors.password }}</span>
                            </div>
                        </div>
                        <div class="modal-footer justify-content-between">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </div>
                    </Form>
                </div>
            <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>
        <!-- /.modal -->
    </div>
</template>