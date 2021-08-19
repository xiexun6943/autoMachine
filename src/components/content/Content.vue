<template>
    <div class="container">
        <div class="info_lump">
            <div class="logo_lump">
                <span class="logo"><img src="../../img/logo.png" alt=""></span>
                云计算
            </div>
            <div class="info_con">
                <div>
                    用户名: {{geUserNameStorage}}
                </div>
                <div>
                    总资产: {{balance}}
                </div>
                <div>
                    {{infoLabelIncome}}: {{income}}
                </div>
                <div>
                    目前时间: {{currentTime}}
                </div>
            </div>
            <div class="exit" @click="exit">退出</div>
        </div>
        <div class="tab_lump">
            <div :class="tabIndex===index?'tab_menus_active':'tab_menus'" v-for="(ele,index) in tabMenus" :key="index"
                 @click="tabMenusClick(index)">{{ele}}
            </div>
            <div class="table_container_01" v-if="tabIndex === 0">
                <div class="table_01">
                    <span v-for="(ele,index) in tabContentMenus01" :key="index">{{ele}}</span>
                </div>
                <div class="table_con_01" v-for="(ele,index) in planList" :key="index">
                    <span>{{ele['hezhi']}}</span>
                    <span>{{ele['expect']}}</span>
                    <span>{{ele['kongqi']}}</span>
                    <span>{{ele['amount']}}</span>
                    <span>{{ele['status']}}</span>
                </div>
                <div class="table_btn_01">
                    <span v-if="this.isOpen==='1'">
                    <i @click="close()">一键关闭</i>
                    </span>
                    <span v-else>
                    <i @click="open()">一键开启</i>
                    </span>
                    <span>{{this.isOpen==='1'?'已开启':'已关闭'}}</span>
                </div>
            </div>
            <div class="table_container_02" v-if="tabIndex === 1">
                <!--                <div class="table_title_02">D(目前)</div>-->
                <div class="table_02">
                    <span v-for="(ele,index) in tabContentMenus02" :key="index">{{ele}}</span>
                </div>
                <div class="table_con_02" v-for="(ele,index) in programList" :key="index">
                    <span>{{ele['方案']}}</span>
                    <span>{{ele['起金']}}</span>
                    <span>{{ele['空期']}}</span>
                    <span>{{ele['收益%']}}</span>
                    <span>{{ele['触发线1']}}</span>
                    <span>{{ele['触发线1减至%']}}</span>
                    <span>{{ele['触发线2']}}</span>
                    <span>{{ele['触发线2减至%']}}</span>
                </div>
            </div>
            <div class="table_container_03" v-if="tabIndex === 2">
                <div class="table_03">
                    <span v-for="(ele,index) in tabContentMenus03" :key="index">{{ele}}</span>
                </div>
                <div class="table_con_03" v-for="(ele,index) in historyLogInfo" :key="index">
                    <span>{{ele['title']}}</span>
                    <span>{{ele['expect']}}<br/>{{getDateFromMillisecond(ele['opentime'])}}</span>
                    <span>{{ele['opencode']}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        createAmount,
        createLotteryKinds,
        createHistoryLog,
        createLotteryRate,
        getToken,
        geUserNameStorage,
        createOpenClose,
        createPlan,
        createProgram
    } from '../../xhr'

    export default {
        name: 'content',
        data() {
            return {
                isOpen: '0',
                currentTime: '',
                balance: 0,
                lotteryKinds: [],
                historyLogInfo: [],
                infoLabelIncome: '今日收益',
                income: 0,
                tabMenus: [
                    '选取计划',
                    '选取参数',
                    '历史开奖',
                ],
                tabIndex: 0,
                tabContentMenus01: [
                    '和值',
                    '奖期数',
                    '空期',
                    '投注金额',
                    '状态'
                ],
                planList: [
                    {
                        hezhi: 0,
                        expect: '',
                        kongqi: 0,
                        amount: '',
                        status: '',
                    }
                ],
                tabContentMenus02: [
                    '方案',
                    '起金',
                    '空期',
                    '收益%',
                    '触发线1',
                    '减至%',
                    '触发线2',
                    '减至%'
                ],
                programList: [
                    {
                        plan: 1,
                        amount: 0.30,
                        planEmpty: 30,
                        income: 35,
                        trigger01: 60,
                        reduce01: 25,
                        trigger02: 120,
                        reduce02: 15,
                    }
                ],
                tabContentMenus03: [
                    '彩种',
                    '期号/开奖时间',
                    '开奖号码'
                ],
                tabContent03: [
                    {
                        time: '255472782782 20:54:40',
                        number: '06 08 04 03 09 02 07 05 01 10',
                        sumValue: 12
                    },
                    {
                        time: '255472782782 20:54:40',
                        number: '06 08 04 03 09 02 07 05 01 10',
                        sumValue: 12
                    },
                    {
                        time: '255472782782 20:54:40',
                        number: '06 08 04 03 09 02 07 05 01 10',
                        sumValue: 12
                    }
                ],
            }
        },
        computed: {
            geUserNameStorage() {
                return geUserNameStorage()
            }
        },
        methods: {
            setStorage(name, data) {
                localStorage.setItem(name, JSON.stringify(data));
            },
            exit() {
                this.setStorage('loginInfo', '')
                this.setStorage('userName', '')
                this.$router.push({path: '/'})
            },
            //毫秒转换具体时间
            getDateFromMillisecond(millisecond) {
                const date = new Date(millisecond * 1000); //unix时间转换需乘以1000
                // const date = new Date(millisecond);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                const hour = date.getHours();
                const minute = date.getMinutes();
                const second = date.getSeconds();
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
            },
            tabMenusClick(index) {
                this.tabIndex = index
                //选取计划
                if (this.tabIndex === 0) {
                    this.getPlan()
                }
                //选取参数(方案)
                if (this.tabIndex === 1) {
                    this.getProgram()
                }
                //历史开奖
                if (this.tabIndex === 2) {
                    this.getLotteryKinds()
                }
            },
            getLoginInfoStorage() {
                return JSON.parse(localStorage.getItem('loginInfo'))
            },
            checkLoginStatus() {
                if (this.getLoginInfoStorage() !== null && this.getLoginInfoStorage().length > 0) {

                } else {
                    this.$router.push({path: '/'})
                }
            },
            // 顶部本地时间
            getGMTTime() {
                let time = new Date();
                let year = time.getFullYear();
                let month = time.getMonth() + 1;
                if (month < 10) {
                    month = '0' + month;
                }
                let day = time.getDate();
                if (day < 10) {
                    day = '0' + day;
                }
                let hour = time.getHours();
                if (hour < 10) {
                    hour = '0' + hour;
                }
                let minute = time.getMinutes();
                if (minute < 10) {
                    minute = '0' + minute;
                }
                let second = time.getSeconds();
                if (second < 10) {
                    second = '0' + second;
                }
                return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
            },
            getCurrentTime() {
                const that = this
                setInterval(() => {
                    that.currentTime = that.getGMTTime()
                }, 300)
            },

            //一键开启
            open() {
                //0 关闭 1开启
                const obj = {
                    authToken: getToken(),
                    status: 1
                }
                createOpenClose(obj).then(res => {
                    if (res['data']['code'] === 500) {
                        this.$message({message: res['data']['msg'], type: 'error'})
                    } else {
                        this.$message({message: res['data']['msg'], type: 'success'})
                    }
                    //操作后从新获取一次余额查询开启关闭状态
                    this.getBalance()
                }).catch(errs => {
                    console.log(errs)
                })
            },

            //一键关闭
            close() {
                //0 关闭 1开启
                const obj = {
                    authToken: getToken(),
                    status: 0
                }
                createOpenClose(obj).then(res => {
                    if (res['data']['code'] === 500) {
                        this.$message({message: res['data']['msg'], type: 'error'})
                    } else {
                        this.$message({message: res['data']['msg'], type: 'success'})
                    }
                    //操作后从新获取一次余额查询开启关闭状态
                    this.getBalance()
                }).catch(errs => {
                    console.log(errs)
                })
            },

            //获取选取计划
            getPlan() {
                const obj = {
                    authToken: getToken()
                }
                createPlan(obj).then(res => {
                    if (res['data']['code'] === 0) {
                        this.planList = res['data']['data']
                    } else {
                        this.$message({message: res['data']['message'], type: 'error'})
                    }
                }).catch(errs => {
                    console.log(errs)
                })
            },

            //获取选取方案
            getProgram() {
                createProgram().then(res => {
                    if (res['data']['code'] === 0) {
                        this.programList = res['data']['data']
                    } else {
                        this.$message({message: res['data']['message'], type: 'error'})
                    }
                }).catch(errs => {
                    console.log(errs)
                })
            },

            //获取余额
            getBalance() {
                const obj = {
                    authToken: getToken()
                }
                createAmount(obj).then(res => {
                    if (res['data']['code'] === 500) {
                        this.$message({message: res['data']['data']['message'], type: 'error'})
                    } else {
                        this.balance = res['data']['data']['balance']
                        this.income = res['data']['data']['income']
                        this.isOpen = res['data']['data']['isguaji']
                    }
                }).catch(errs => {
                    console.log(errs)
                })
            },

            //获取所有彩种
            getLotteryKinds() {
                createLotteryKinds().then(res => {
                    if (res['data']['code'] === 500) {
                        this.$message({message: res['data']['data']['message'], type: 'error'})
                    } else {
                        res['data']['data'].forEach(ele => {
                            if (ele['typeid'] === 'pk10') {
                                this.lotteryKinds.push(ele)
                            }
                        })
                        this.historyLogInfo = []
                        for (let x = 0; x < this.lotteryKinds.length; x++) {
                            this.getHistoryLog(this.lotteryKinds[x]['name'])
                        }
                        console.log(this.historyLogInfo)
                    }
                }).catch(errs => {
                    console.log(errs)
                })
            },

            //获取历史记录
            getHistoryLog(name) {
                const obj = {
                    gameName: name,
                    limit: ''
                }
                createHistoryLog(obj).then(res => {
                    if (res['data']['code'] === 500) {
                        this.$message({message: res['data']['data']['message'], type: 'error'})
                    } else {
                        if (res['data']['data'].length > 0) {
                            this.historyLogInfo = this.historyLogInfo.concat(res['data']['data'])
                        }
                    }
                }).catch(errs => {
                    console.log(errs)
                })
            },

            //获取彩票赔率
            getLotteryRate() {
                const obj = {
                    type: ''
                }
                createLotteryRate(obj).then(res => {
                    if (res['data']['code'] === 500) {
                        this.$message({message: res['data']['data']['message'], type: 'error'})
                    } else {

                        console.log(res['data']);

                    }
                }).catch(errs => {
                    console.log(errs)
                })
            }
        },
        mounted() {
            this.checkLoginStatus()
            this.getCurrentTime()
            this.getPlan()
            this.getBalance()
            //半分钟获取一次余额和收益
            setInterval(() => {
                this.getBalance()
            }, 30000)
        }
    }
</script>

<style lang="less">
    @import "content";
</style>
