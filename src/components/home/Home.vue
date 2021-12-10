<template>
    <div class="container_home">
        <div class="logo_lump">
            <span class="logo"><img src="../../img/logo.png" alt=""></span>
<!--            {{$t("m.title")}}-->
        </div>
        <div class="login_lump">
            <div class="content">

                <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                    <el-form-item prop="name">
                        <el-input v-model="ruleForm.name" :placeholder="$t('m.inputName')"></el-input>
                    </el-form-item>

                    <el-form-item prop="password">
                        <el-input v-model="ruleForm.password" :placeholder="$t('m.inputPassword')" show-password></el-input>
                    </el-form-item>

                    <el-form-item :label="$t('m.password')" prop="rememberPassword">
                        <el-switch v-model="ruleForm.rememberPassword" @change="cancelRememberPassword()"></el-switch>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')"> {{$t("m.login")}}</el-button>
                    </el-form-item>

                </el-form>
            </div>
            <div class="lan-change">
                <el-form v-if="this.lang == 'vn'">
                    <el-radio-group v-model="model1" @change="change">
                        <el-radio v-for="item in lan0"
                                :key="item.id" :label="item.keys">
                            {{item.lang}}
                        </el-radio>
                    </el-radio-group>
                </el-form>
                <el-form v-else-if="this.lang == 'en'">
                    <el-radio-group v-model="model1" @change="change">
                        <el-radio v-for="item in lan1"
                                :key="item.id" :label="item.keys">
                            {{item.lang}}
                        </el-radio>
                    </el-radio-group>
                </el-form>
                <el-form v-else>
                    <el-radio-group v-model="model1" @change="change">
                        <el-radio v-for="item in lan2"
                                :key="item.id" :label="item.keys">
                            {{item.lang}}
                        </el-radio>
                    </el-radio-group>
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
                        {required: true, message:  this.$t('m.inputName'), trigger: 'blur'},
                        {min: 3, max: 12, message: this.$t('m.max'), trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: this.$t('m.inputPassword'), trigger: 'blur'},
                        {min: 6, max: 12, message: this.$t('m.min'), trigger: 'blur'}
                    ],
                },
                 lan0:[
                    {lang:"TIẾNG ANH",keys:0},
                    {lang:"TIẾNG TRUNG GIẢN THỂ",keys:1},
                    // {lang:"Tiếng Việt",keys:2}
                ],
                lan1:[
                    {lang:"English",keys:0},
                    {lang:"Chinese",keys:1},
                    // {lang:"Vietnamese",keys:2}
                ],
                lan2:[
                    {lang:"English",keys:0},
                    {lang:"繁体",keys:1},
                    // {lang:"Tiếng Việt",keys:2}
                ],
                model1:'繁体',
                lang:null
            }
        },
        methods: {
            change(val){
                if(val==0){
                    this.lang='en';
                    localStorage.setItem("locale",this.lang)
                    this.$i18n.locale = this.lang;
                }else if(val==1){
                    this.lang="zh";
                    localStorage.setItem("locale",this.lang)
                    this.$i18n.locale = this.lang;
                }else{
                    this.lang="vn";
                    localStorage.setItem("locale",this.lang)
                    this.$i18n.locale = this.lang;
                }
            },
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
                        this.setStorage('limit_isguaji', res['data']['data']['limit_isguaji']);
                        this.setStorage('isguaji', res['data']['data']['isguaji']);
                        // todo 打印用户登录状态
                        console.log(obj);
                        console.log(res['data']['data']['authToken']);
                        if(res['data']['data']['limit_isguaji']!=='1'){
                            this.$message({message: this.$t('m.noRights'), type: 'error'})
                        }else{
                            this.$router.push({path: '/content'})
                        }


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
            this.lang = localStorage.getItem('locale') || 'zh';
            console.log(this.lang,1)
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
