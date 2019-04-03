<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay=true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content" @submit.prevent="login">
        <form>
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button :disabled="!rightPhone" class="get_verification" :class="{right_phone: rightPhone}" @click.prevent="getCode">
                {{countDown > 0 ? `已发送(${countDown}s)` : '获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" v-model="name" maxlength="11" placeholder="手机/邮箱/用户名">
              </section>
              <section class="login_verification">
                <input :type="showPwd?'text':'password'" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button" :class="showPwd?'on':'off'" @click.prevent="showPwd=!showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd ? 'abc': '...'}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" v-model="captcha" placeholder="验证码">
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click.prevent="getCaptcha" ref="captcha">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <AlertTip :alertText="alertText" v-show="showAlert" @closeTip="closeTip" />
  </section>
</template>

<script>
import AlertTip from '@/components/AlertTip/AlertTip'
import {sendCodeApi, smsLoginApi, pwdLoginApi} from '@/api'
const ERROR = {
  phone: '手机号不正确',
  code: '验证必须是6位数字',
  name: '用户名必须指定',
  pwd: '密码必须指定',
  captcha: '验证码必须指定'
}
export default {
  components: {
    AlertTip
  },
  data () {
    return {
      loginWay: true, // 登录方式(true:短信|false:密码)
      phone: '', // 手机号
      countDown: 0, // 倒计时
      code: '', // 验证码
      pwd: '', // 密码
      showPwd: false, // 是否显示密码
      name: '', // 手机/邮箱/用户名
      captcha: '', // 图像验证码
      maxSeconds: 5,
      alertText: '', // 提示文本
      showAlert: false // 是否显示警告框
    }
  },
  computed: {
    rightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    // 异步获取短信验证码
    async getCode () {
      // 判断是否有记时
      if (!this.countDown) {
        // 启动倒计时
        this.countDown = this.maxSeconds
        this.intervalId = setInterval(() => {
          this.countDown--
          if (this.countDown <= 0) {
            clearInterval(this.intervalId)
          }
        }, 1000)

        // 发送请求（向指定手机号发送验证码）
        const result = await sendCodeApi({phone: this.phone})
        if (result.code === 1) {
          // 显示提示
          this.toast(result.msg)

          // Stop count down
          if (this.countDown) {
            this.countDown = 0
            clearInterval(this.intervalId)
            this.intervalId = null
          }
        }
      }
    },
    // 异步登录
    async login () {
      let result
      // 表单数据验证
      if (this.loginWay) { // 短信登录
        const {phone, code} = this
        if (!this.rightPhone) { // 验证手机号
          this.toast(ERROR.phone)
          return null
        } else if (!/^\d{6}$/.test(code)) { // 验证验证码
          // 验证码必须是6位数字
          this.toast(ERROR.code)
          return null
        }
        // 发送 ajax 请求短信登录
        result = await smsLoginApi({phone, code})
      } else {
        // 密码登录
        const {name, pwd, captcha} = this
        if (!name) { // 验证用户
          this.toast(ERROR.name)
          return null
        } else if (!pwd) { // 验证密码
          this.toast(ERROR.pwd)
          return null
        } else if (!captcha) { // 验证验证码
          this.toast(ERROR.captcha)
          return null
        }
        // 密码登录
        result = await pwdLoginApi({name, pwd, captcha})
      }
      // Stop count down
      if (this.countDown) {
        this.countDown = 0
        clearInterval(this.intervalId)
        this.intervalId = null
      }

      if (result.code === 0) {
        const user = result.data
        // user保存到 vuex的state
        this.$store.dispatch('recordUser', user)
        // 去个人中心页面
        this.$router.replace('/profile')
      } else {
        this.getCaptcha()
        this.toast(result.msg)
      }
    },
    // 获取新的图像验证码
    getCaptcha () {
      this.$refs.captcha.src = `${this.$refs.captcha.src}?time=${Date.now()}`
    },
    toast (text) {
      this.showAlert = true
      this.alertText = text
    },
    closeTip () {
      this.showAlert = false
      this.alertText = ''
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins"
  .loginContainer
    width 100%
    height 100%
    background #fff
    .loginInner
      padding-top 60px
      width 80%
      margin 0 auto
      .login_header
        .login_logo
          font-size 40px
          font-weight bold
          color #02a774
          text-align center
        .login_header_title
          padding-top 40px
          text-align center
          >a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.on
              color #02a774
              font-weight 700
              border-bottom 2px solid #02a774
      .login_content
        >form
          >div
            display none
            &.on
              display block
            input
              width 100%
              height 100%
              padding-left 10px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid #02a774
            .login_message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get_verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.right_phone
                  color black
            .login_verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch_button
                font-size 12px
                border 1px solid #ddd
                border-radius 8px
                transition background-color .3s,border-color .3s
                padding 0 6px
                width 30px
                height 16px
                line-height 16px
                color #fff
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                &.off
                  background #fff
                  .switch_text
                    float right
                    color #ddd
                &.on
                  background #02a774
                >.switch_circle
                  //transform translateX(27px)
                  position absolute
                  top -1px
                  left -1px
                  width 16px
                  height 16px
                  border 1px solid #ddd
                  border-radius 50%
                  background #fff
                  box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                  transition transform .3s
                  &.right
                    transform translateX(30px)
            .login_hint
              margin-top 12px
              color #999
              font-size 14px
              line-height 20px
              >a
                color #02a774
          .login_submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background #4cd96f
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .about_us
          display block
          font-size 12px
          margin-top 20px
          text-align center
          color #999
      .go_back
        position absolute
        top 5px
        left 5px
        width 30px
        height 30px
        >.iconfont
          font-size 20px
          color #999
</style>
