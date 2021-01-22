---
title: 返回数据类型
---

# 数据类型

## 全局数据返回格式

```json
{
  "code": 0, // 0为正常，其余请看错误码列表
  "data": "", // 返回数据
  "msg": "", // 信息
  "error": "" // 底层错误信息
}
```

### 错误码列表

```go
// 三位数错误编码为复用http原本含义
// 五位数错误编码为应用自定义错误
// 五开头的五位数错误编码为服务器端错误，比如数据库操作失败
// 四开头的五位数错误编码为客户端错误，有时候是客户端代码写错了，有时候是用户操作错误
const (
	// CodeNotFullySuccess 未完全成功
	CodeNotFullySuccess = 203
	// CodeCheckLogin 未登录
	CodeCheckLogin = 401
	// CodeNoPermissionErr 未授权访问
	CodeNoPermissionErr = 403
	// CodeNotFound 资源未找到
	CodeNotFound = 404
	// CodeUploadFailed 上传出错
	CodeUploadFailed = 40002
	// CodeCredentialInvalid 凭证无效
	CodeCredentialInvalid = 40001
	// CodeCreateFolderFailed 目录创建失败
	CodeCreateFolderFailed = 40003
	// CodeObjectExist 对象已存在
	CodeObjectExist = 40004
	// CodeSignExpired 签名过期
	CodeSignExpired = 40005
	// CodePolicyNotAllowed 当前存储策略不允许
	CodePolicyNotAllowed = 40006
	// CodeGroupNotAllowed 用户组无法进行此操作
	CodeGroupNotAllowed = 40007
	// CodeAdminRequired 非管理用户组
	CodeAdminRequired = 40008
	// CodeDBError 数据库操作失败
	CodeDBError = 50001
	// CodeEncryptError 加密失败
	CodeEncryptError = 50002
	// CodeIOFailed IO操作失败
	CodeIOFailed = 50004
	// CodeInternalSetting 内部设置参数错误
	CodeInternalSetting = 50005
	// CodeCacheOperation 缓存操作失败
	CodeCacheOperation = 50006
	// CodeCallbackError 回调失败
	CodeCallbackError = 50007
	//CodeParamErr 各种奇奇怪怪的参数错误
	CodeParamErr = 40001
	// CodeNotSet 未定错误，后续尝试从error中获取
	CodeNotSet = -1
)
```

## 用户

用户状态：

```go
const (
	// Active 账户正常状态
	Active = 0
	// NotActivicated 未激活
	NotActivicated = 1
	// Baned 被封禁
	Baned = 2
	// OveruseBaned 超额使用被封禁
	OveruseBaned = 3
)
```

真实用户

```json
{
  "id": "NqhG", // 用户 ID 的 HashID
  "user_name": "1145141919810@qq.com", // 用户的邮箱
  "nickname": "admin", // 用户的昵称 (默认从邮箱 @ 号前截取)
  "status": 0, // 详见 用户状态
  "avatar": "", // 用户头像 (请求用户头像详见 用户头像 章节)
  "created_at": 1610547587, // 用户创建时间的 Unix Timestamp
  "preferred_theme": "", // 使用的主题
  "score": 0, // 用户积分点数 (Pro)
  "anonymous": false, // 是否为游客
  "policy": {
    // 储存策略相关
    "saveType": "local", // 储存策略类型
    "maxSize": "0.00mb", // 单文件大小限制
    "allowedType": [], // 允许的文件扩展名
    "upUrl": "/api/v3/file/upload", // 文件上传服务API地址
    "allowSource": false // 是否能获取直链
  },
  "group": {
    // 用户组相关
    "id": 1, // 群组ID
    "name": "管理员", // 群组名称
    "allowShare": true, // 是否允许创建分享
    "allowRemoteDownload": true, // 是否允许用户创建离线下载任务
    "allowArchiveDownload": true, // 是否允许用户多选文件打包下载
    "shareFree": true, // 用户是否可以免费下载需付积分的分享 (Pro)
    "shareDownload": true, // 是否允许下载分享
    "compress": true, // 是否用户创建 压缩/解压缩 任务
    "webdav": true // 是否可以使用 WebDAV
  },
  "tags": [
    {
      "id": "qEhd", // 标签的 HashID
      "name": "Tag", // 标签名称
      "icon": "Circle", // 标签的图标
      "color": "rgba(0, 0, 0, 0.54)", // 标签的颜色
      "type": 0, // 标签类型 (0: 文件分类标签,1:目录快捷方式标签)
      "expression": "" // 标签匹配规则 (type= 0 时为文件名匹配规则, 1 时为目录路径)
    }
  ]
}
```

游客用户

```json
{
  "id": "8rIa",
  "user_name": "",
  "nickname": "",
  "status": 0,
  "avatar": "",
  "created_at": -62135596800,
  "preferred_theme": "",
  "score": 0,
  "anonymous": true,
  "policy": {
    "saveType": "anonymous",
    "maxSize": "0.00mb",
    "allowedType": null,
    "upUrl": "",
    "allowSource": false
  },
  "group": {
    "id": 0,
    "name": "游客",
    "allowShare": false,
    "allowRemoteDownload": false,
    "allowArchiveDownload": false,
    "shareFree": false,
    "shareDownload": true,
    "compress": false,
    "webdav": false
  },
  "tags": []
}
```

​
