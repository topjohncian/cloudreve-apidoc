---
title: 站点路由
---

# 站点路由

## 状态检查

### `GET /site/ping`

### 参数

无

### 返回

```json
{
  "code": 0,
  "data": "3.2.1", // 后端版本号
  "msg": ""
}
```

## 验证码

### `GET /site/captcha`

### 参数

无

### 返回

```json
{
  "code": 0,
  "data": "data:image/png;base64,iVBORw0KGgoAAAAV省略亿堆...cUI=", // 返回验证码的base64
  "msg": ""
}
```

## 站点全局配置

### `GET /site/config`

### 参数

无

### 返回

```json
{
  "code": 0,
  "data": {
    "title": "Cloudreve", // 站点的主标题
    "siteICPId": "浙ICP备11451419号-1", // 网站备案号
    "loginCaptcha": false, // 是否启用登录验证码
    "regCaptcha": false, // 是否启用注册验证码
    "forgetCaptcha": false, // 是否启用忘记密码验证码
    "emailActive": false, // 是否启用注册邮箱验证
    "QQLogin": false, // 是否启用 QQ 登录 (仅 Pro)
    "themes": "{\"#3f51b5\":{\"palette\":{\"primary\":{\"main\":\"#3f51b5\"},\"secondary\":{\"main\":\"#f50057\"}}},\"#2196f3\":{\"palette\":{\"primary\":{\"main\":\"#2196f3\"},\"secondary\":{\"main\":\"#FFC107\"}}},\"#673AB7\":{\"palette\":{\"primary\":{\"main\":\"#673AB7\"},\"secondary\":{\"main\":\"#2196F3\"}}},\"#E91E63\":{\"palette\":{\"primary\":{\"main\":\"#E91E63\"},\"secondary\":{\"main\":\"#42A5F5\",\"contrastText\":\"#fff\"}}},\"#FF5722\":{\"palette\":{\"primary\":{\"main\":\"#FF5722\"},\"secondary\":{\"main\":\"#3F51B5\"}}},\"#FFC107\":{\"palette\":{\"primary\":{\"main\":\"#FFC107\"},\"secondary\":{\"main\":\"#26C6DA\"}}},\"#8BC34A\":{\"palette\":{\"primary\":{\"main\":\"#8BC34A\",\"contrastText\":\"#fff\"},\"secondary\":{\"main\":\"#FF8A65\",\"contrastText\":\"#fff\"}}},\"#009688\":{\"palette\":{\"primary\":{\"main\":\"#009688\"},\"secondary\":{\"main\":\"#4DD0E1\",\"contrastText\":\"#fff\"}}},\"#607D8B\":{\"palette\":{\"primary\":{\"main\":\"#607D8B\"},\"secondary\":{\"main\":\"#F06292\"}}},\"#795548\":{\"palette\":{\"primary\":{\"main\":\"#795548\"},\"secondary\":{\"main\":\"#4CAF50\",\"contrastText\":\"#fff\"}}}}", // 站点配色主题
    "defaultTheme": "#673AB7", // 站点默认配色主题
    "score_enabled": true, // 允许为分享定价
    "share_score_rate": "80", // 积分到账比率
    "home_view_method": "icon", // 个人文件列表默认样式 ("icon" | "smallIcon" | "list")
    "share_view_method": "list", // 目录分享页列表默认样式 ("icon" | "smallIcon" | "list")
    "authn": false, // 启用外部认证器(Web Authn)
    "user": {}, // 详见 数据类型 - 用户类型
    "captcha_IsUseReCaptcha": false, // 是否启用 reCaptcha
    "captcha_ReCaptchaKey": "defaultKey" // reCaptcha 的 key
  },
  "msg": ""
}
```
