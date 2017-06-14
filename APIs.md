# 恒顺项目接口说明

## 1. 概述
所有数据接口都放在 `/api` 下，并且尽量遵循 RESTful 风格。所有页面url规则则不在 `/api` 下。

数据接口采用json作为数据传输方式，所有数据接口的返回值至少应该包括以下部分：
``` json
{
    "error": 0,
    "message": "error message",
    "data": { ... } // data object
}
```
其中 `error` 为此次请求的状态码，`0` 表示没有出错，其他值表示有错。在出错的情况下可以在 `message` 中传递出错信息，也可以通过错误码的值表明出错原因。最好在本文档附录中对 `error` 或者 `message` 的取值和含义有详细说明。`data` 则为此次请求实际应返回的数据，在 `error` 不为 `0` 的时候，此项应为空。

另外，数据接口返回的json数据中尽量不要包括 `null` ，因为js在自动解析json的时候对 `null` 值并不认可，所以尽量使用空字符串 `""` 代替。

<br/>

## 2. 接口列表
### /login GET

描述：登录页面

响应： `login.html`

<br/>

### /console GET

描述：控制台页面

响应： `console.html`

<br/>

### /api/my/customers

描述：根据当前登录的门店店主（通过session判断），返回自己所有的顾客列表。

响应： 
``` json
{
    "error": 0,
    "message": "",
    "data": [
        {
            "id": 1,
            "name": "大哥",
            "register": "2015-01-01",     // 成为会员的时间
            "gender": "male",             // male 或者 female
            "phoneNumber": "15644448888"
        },
        ...
    ]
}
```

### /api/customers/{id}

描述：根据顾客id获取顾客详细信息

参数： 
1. **id** - 顾客id

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": {
        "id": 1,
        "name": "大哥",
        "register": "2015-01-01",     // 成为会员的时间
        "gender": "male",             // male 或者 female
        "phoneNumber": "15644448888",
        "pe": [                       // 体检报告列表，最好按时间从近到远排序好
            {
                "id": 1,
                "time": "2017-01-01",    // 这份体检报告的录入时间
                "items": [               // 体检报告项目列表
                    {
                        "title": "肝指标",
                        "content": "肝功能正常"
                    }, 
                    {
                        "title": "血常规",
                        "content": "血XX阳性"
                    }
                ]
            }, 
            ...
        ]
    }
}
```