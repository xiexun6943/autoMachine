<template>
    <div class="container_home">
        <div class="logo_lump">
            <span class="logo"><img src="../../img/logo.png" alt=""></span>
            云计算
        </div>
        <div class="login_lump">
            <div class="content">

                <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                    <el-form-item prop="name">
                        <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input v-model="ruleForm.password" placeholder="请输入密码" show-password></el-input>
                    </el-form-item>

                    <el-form-item label="记住密码" prop="rememberPassword">
                        <el-switch v-model="ruleForm.rememberPassword" @change="cancelRememberPassword()"></el-switch>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                    </el-form-item>
                </el-form>


            </div>
        </div>
    </div>
</template>

<script>
    // import cryptoJs from 'crypto-js'
    import Vue from 'vue'
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'
    import {createLogin} from '../../xhr'

    Vue.use(ElementUI)

    export default {
        name: 'home',
        data() {
            return {
                ruleForm: {
                    name: '',
                    password: '',
                    rememberPassword: false,
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
                    ],
                }
            }
        },
        methods: {
            getRememberPassword() {
                return JSON.parse(localStorage.getItem('rememberPassword'))
            },
            setStorage(name, data) {
                localStorage.setItem(name, JSON.stringify(data));
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.sendLogin()
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //取消记住密码
            cancelRememberPassword() {
                this.setStorage('rememberPassword', {
                    rememberStatus: false,
                    username: null,
                    userpassword: null,
                })
            },

            //访问登录
            sendLogin() {
                const obj = {
                    name: this.ruleForm['name'],
                    pass: this.ruleForm['password']
                };
                //登录成功后如果需要记住密码,则存入localStorage
                if (this.ruleForm.rememberPassword === true) {
                    this.setStorage('rememberPassword', {
                        rememberStatus: this.ruleForm.rememberPassword,
                        username: this.ruleForm['name'],
                        userpassword: this.ruleForm['password'],
                    })
                } else {
                    this.setStorage('rememberPassword', {
                        rememberStatus: false,
                        username: null,
                        userpassword: null,
                    })
                }
                createLogin(obj).then(res => {
                    if (res['data']['code'] === 500) {
                        this.$message({message: res['data']['data']['message'], type: 'error'})
                    } else {
                        //存储用户登陆信息
                        this.setStorage('loginInfo', res['data']['data']['authToken']);
                        this.setStorage('userName', this.ruleForm['name']);
                        // todo 打印用户登录状态
                        console.log(obj);
                        console.log(res['data']['data']['authToken']);

                        this.$router.push({path: '/content'})


                        if (this.ruleForm.rememberPassword === true) {
                            //登录成功后如果需要记住密码,则存入localStorage
                            if (this.ruleForm.rememberPassword === true) {
                                this.setStorage('rememberPassword', {
                                    rememberStatus: this.ruleForm.rememberPassword,
                                    username: this.ruleForm.name,
                                    userpassword: this.ruleForm.password
                                })
                            } else {
                                this.setStorage('rememberPassword', {
                                    rememberStatus: false,
                                    username: null,
                                    userpassword: null,
                                })
                            }
                        }
                    }
                }).catch(errs => {
                    console.log(errs)
                })
            }
        },
        created() {
            //存储用户登陆信息
            this.setStorage('loginInfo', "");
        },
        mounted() {
            if (this.getRememberPassword() !== null && this.getRememberPassword()['rememberStatus'] === true) {
                this.ruleForm.rememberPassword = true
                this.ruleForm.name = this.getRememberPassword()['username']
                this.ruleForm.password = this.getRememberPassword()['userpassword']
            }

        }
    }
</script>

<style lang="less">
    @import "home";
</style>
