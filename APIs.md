# 恒顺项目接口说明
<!-- TOC -->

- [恒顺项目接口说明](#恒顺项目接口说明)
    - [1. 概述](#1-概述)
    - [2. 接口列表](#2-接口列表)
        - [/login GET](#login-get)
        - [/login POST](#login-post)
        - [/api/logout GET](#apilogout-get)
        - [/console GET](#console-get)
        - [/api/my/customers GET](#apimycustomers-get)
        - [/api/customer/{id} GET](#apicustomerid-get)
        - [/api/customer/{id} POST](#apicustomerid-post)
        - [/api/customer/{id} PUT](#apicustomerid-put)
        - [/api/customer/{id} DELETE](#apicustomerid-delete)
        - [/api/customer/{id}/babies GET](#apicustomeridbabies-get)
        - [/api/customer/{id}/babies POST](#apicustomeridbabies-post)
        - [/api/baby/{babyId} GET](#apibabybabyid-get)
        - [/api/baby/{babyId} PUT](#apibabybabyid-put)
        - [/api/baby/{babyId} DELETE](#apibabybabyid-delete)
        - [/api/baby/{babyId}/pes POST](#apibabybabyidpes-post)
        - [/api/pe/{peId} PUT](#apipepeid-put)
        - [/api/pe/{peId} DELETE](#apipepeid-delete)
        - [/api/customer/{id}/orders GET](#apicustomeridorders-get)
        - [/api/users GET](#apiusers-get)
        - [/api/user/{id} GET](#apiuserid-get)
        - [/api/user/{id} DELETE](#apiuserid-delete)
        - [/api/users POST](#apiusers-post)
        - [/api/user/{id} PUT](#apiuserid-put)
        - [/api/user/{id}/password PUT](#apiuseridpassword-put)
        - [/api/user/current GET](#apiusercurrent-get)
        - [/api/fundings GET](#apifundings-get)
        - [/api/funding/{id} GET](#apifundingid-get)
        - [/api/customer/{customerId}/payments GET](#apicustomercustomeridpayments-get)

<!-- /TOC -->
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

### /login POST

描述：登录操作

参数：application/json

``` json
{
    "username": "123456",
    "password": "123456"
}
```

响应： 登录成功后，返回状态码0，并在session中记录登录信息。
       用户名不存在，返回状态码1
       密码错误，返回状态码2

<br/>

### /api/logout GET

描述：注销当前登录的用户

响应：一个空消息

### /console GET

描述：控制台页面

响应： `console.html`

<br/>

### /api/my/customers GET

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

### /api/customer/{id} GET

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
        "gender": "男",             // male 或者 female
        "phoneNumber": "15644448888"
    },
    "client": {
        "id": 1,
        "name": "王女士",
        "phoneNumber": "15651656873",
    },
    "superior": {
        "id": 1,
        "name": "张女士",
        "phoneNumber": "15651656876",
    }
}
```

### /api/customer/{id} POST

描述：新建一个顾客

请求Body：
``` json
{
    "id": 1,
    "name": "大哥",
    "register": "2015-01-01",   
    "gender": "男",        
    "phoneNumber": "15644448888"
}
```

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": {   // 新建成功后的用户信息
        "id": 1,
        "name": "大哥",
        "register": "2015-01-01", 
        "gender": "男",             
        "phoneNumber": "15644448888"
    }
}
```

### /api/customer/{id} PUT

描述：更新一个顾客信息

请求Body：
``` json
{
    "id": 1,
    "name": "大哥",
    "register": "2015-01-01",   
    "gender": "男",        
    "phoneNumber": "15644448888"
}
```

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": {   // 更新后的用户信息
        "id": 1,
        "name": "大哥",
        "register": "2015-01-01", 
        "gender": "男",             
        "phoneNumber": "15644448888"
    }
}
```

### /api/customer/{id} DELETE

描述：将一个顾客标记为删除

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": null
}
```

### /api/customer/{id}/babies GET

描述：获取某个顾客的宝宝信息

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": [
        {
            "name": "大哥",
            "birthday": "2015-01-01",
            "gender": "女",
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
    ]
}
```

### /api/customer/{id}/babies POST

描述：给某个顾客添加一个宝宝

请求body：
``` json
{
    "name": "大哥",
    "birthday": "2015-01-01",
    "gender": "女",
}
```

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": {       // 创建成功后的信息
        "name": "大哥",
        "birthday": "2015-01-01",
        "gender": "女"
    }
}
```

### /api/baby/{babyId} GET

描述：获取某个宝宝的信息

相应：
``` json
{
    "name": "大哥",
    "birthday": "2015-01-01",
    "gender": "女",
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
```
### /api/baby/{babyId} PUT

描述：更新某个顾客的宝宝信息

请求body：
``` json
{
    "name": "大哥",
    "birthday": "2015-01-01",
    "gender": "女",
}
```

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": {       // 更新后的信息
        "name": "大哥",
        "birthday": "2015-01-01",
        "gender": "女"
    }
}
```

错误代码：1 - 不存在这个宝宝的信息

### /api/baby/{babyId} DELETE

描述：删除某个宝宝的信息

响应：
``` json
{
    "error": 0,
    "message": ""
}
```

错误代码：1 - 不存在这个宝宝的信息

### /api/baby/{babyId}/pes POST

描述：新建一个宝宝的体检报告

请求Body：
``` json
{
    "time": "2015-01-01",
    "items": [
        {
            "title": "content",
            "content": "content"
        }
    ]
}
```

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": [   // 这个宝宝的所有体检报告
        ...
    ]
}
```

### /api/pe/{peId} PUT

描述：修改一份体检报告

请求Body：
``` json
{
    "time": "2015-01-01",
    "items": [
        {
            "title": "content",
            "content": "content"
        }
    ]
}
```

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": [   // 这个体检报告所属宝宝的所有体检报告
        ...
    ]
}
```

### /api/pe/{peId} DELETE

描述：删除一份体检报告

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": [   // 这个体检报告所属宝宝的所有体检报告
        ...
    ]
}
```

### /api/customer/{id}/orders GET

描述：根据获取某个顾客的消费信息

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": [
        {
            "time": "2015-01-01 00:00:00",
            "items": [
                {
                    "id": 1,    // 产品id    
                    "name": "衡水老白干",    // 产品名称
                    "amount": 3 // 购买数量
                }, 
                ... 
            ],
            "sum": 123456.5, // 总金额
        }
    ]
}
```

### /api/users GET

描述：获取当前所有用户

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": [
        {
            "id": 1,
            "username": "alpaca233",
            "name": "姓名",
            "type": "admin", // 用户身份，可能是admin/storeOwner/clerk
            "phoneNumber": "15651656873"
        }
    ]
}
```

### /api/user/{id} GET

描述：获取某个用户的详细信息

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": 
    {
        "id": 1,
        "username": "alpaca233",
        "name": "姓名",
        "type": "admin", // 用户身份，可能是admin/storeOwner/clerk
        "phoneNumber": "15651656873"
    }
}
```

### /api/user/{id} DELETE

描述：将一个用户标记为删除

响应：
删除成功则返回 `error` 为 `0` 否则返回其他值。
``` json
{
    "error": 0,
    "message": "",
    "data": null
}
```

### /api/users POST

描述：创建一个用户

请求Body：
``` json
{
    "username": "alpaca233",
    "name": "姓名",
    "type": "admin", // 用户身份，可能是admin/storeOwner/clerk
    "phoneNumber": "15651656873"
}
```

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": {   // 创建成功后的用户信息
        "id": 1,
        "username": "alpaca233",
        "name": "姓名",
        "type": "admin", // 用户身份，可能是admin/storeOwner/clerk
        "phoneNumber": "15651656873"
    }
}
```

### /api/user/{id} PUT

描述：更新一个用户的信息。

请求Body：
``` json
{
    "id": 1,
    "username": "alpaca233",
    "name": "姓名",
    "type": "admin", // 用户身份，可能是admin/storeOwner/clerk
    "phoneNumber": "15651656873"
}
```

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": {   // 更新成功后的用户信息
        "id": 1,
        "username": "alpaca233",
        "name": "姓名",
        "type": "admin", // 用户身份，可能是admin/storeOwner/clerk
        "phoneNumber": "15651656873"
    }
}
```

### /api/user/{id}/password PUT

描述：更改一个用户的密码。如果当前用户的身份是系统管理员，则不需要oldPassword,
     否则需要oldPassword.

错误代码： 1 - 旧密码错误或者没有提供

请求body：
``` json
{
    "oldPassword": "123",
    "newPassword": "555555"
}
```

### /api/user/current GET

描述：获取当前登录的用户信息

错误代码：1 - 当前没有登录

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": {   // 更新成功后的用户信息
        "id": 1,
        "username": "aplaca",
        "name": "王女士",
        "type": "clerk"
    }
    
}
```

### /api/fundings GET

描述：获取所有众筹信息

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": [
        {
            "id": 1,
            "name": "新品高钙补品",
            "description": "新品众筹，七折即可获得新品",
            "price": 128,
            "targetNum": 200,       // 众筹的目标人数
            "currentNum": 90,       // 当前参加的众筹人数
            "product": {            // 众筹的目标产品信息
                "id": 1,
                "name": 123,
                "price": 190
            },
            "time": "2018-01-01 00:00:00",  // 众筹截止时间
        }
    ]
}
```
### /api/funding/{id} GET

描述：获取某个众筹的详细信息

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": {
        "id": 1,
        "name": "新品高钙补品",
        "description": "新品众筹，七折即可获得新品",
        "price": 128,
        "targetNum": 200,       // 众筹的目标人数
        "currentNum": 90,       // 当前参加的众筹人数
        "product": {            // 众筹的目标产品信息
            "id": 1,
            "name": 123,
            "price": 190
        },
        "time": "2018-01-01 00:00:00",  // 众筹截止时间
        "members": [        // 当前参加众筹的顾客
            {
                "id": 1,
                "name": "王女士",
                "phoneNumber": "15651656873",
                "amount": 1
            }
        ]
    }
}
```

### /api/customer/{customerId}/payments GET

描述：获取某个顾客的消费信息列表

响应：
``` json
{
    "error": 0,
    "message": "",
    "data": [
        {
            "id": 1,
            "time": "2015-01-01 11:11:11",
            "sum": 630.5,
            "products": [
                {
                    "id": 1,
                    "name": "老坛酸菜牛肉面",
                    "amount": 3,
                    "price": 5.5
                },
                ...
            ]
        },
        ...
    ]
}
```