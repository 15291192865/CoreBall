import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate' // 表单验证  登录  注册
import zh from 'vee-validate/dist/locale/zh_CN'; // 引入中文文件

// 配置中文
Validator.addLocale(zh);

const config = {
  locale: 'zh_CN'
};

Vue.use(VeeValidate,config);

// 自定义validate
const dictionary = {
  zh_CN: {
    messages: {
      phone: () => '请输入正确的手机号格式',
      telphone: () => '请输入六位数字',
      password: () => '请输入6-18位任意数字字母下划线',
      passwordtwo: () => '请再次输入密码',
      required: ( field )=> "请输入" + field
    },
    attributes:{
      password:'密码:',
      phone: '手机号:',
      telphone: '手机号验证码:',
      passwordtwo: '二次确认密码:'
    }
  }
};
Validator.updateDictionary(dictionary);
// 手机号
Validator.extend('phone', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});
// 手机号验证码
Validator.extend('telphone', {
  messages: {
    zh_CN:field => field + '必须是6为数字',
  },
  validate: value => {
    return value.length == 6 && /^[0-9]{6}$/.test(value)
  }
});
// 密码
Validator.extend('password', {
  messages: {
    zh_CN:field => field + '6-18位任意数字字母下划线',
  },
  validate: value => {
    return value.length == 6 || 18 && /[\S]{6,18}$/g.test(value)
  }
});
// 二次确认密码
Validator.extend('passwordtwo', {
  messages: {
    zh_CN:field => field + '请再次输入密码',
  },
  validate: value => {
    return value.length == 6 || 18 && /[\S]{6,18}$/g.test(value)
  }
});
