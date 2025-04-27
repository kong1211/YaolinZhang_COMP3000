# JWT-BOOT

## 技术选型：Shiro+JWT

这是基于JWT+Shiro权限认证框架，通过注解驱动设计权限，需要权限在控制器方法上面加上@RequiresPermissions("USER")，这是校验是否已经login



## 配置类：

```
@Configuration
// 继承AbstractJWTConfiguration 实现两个方法
public class JWTConfig extends AbstractJWTConfiguration {

	// 注入UserService，Handle数据库
    @Resource
    private UsersService usersService;

	// 实例化此对象，返回AuthenticationService
    public AuthenticationService authenticationService() {
        return username -> {
            Users users = usersService.query().eq("username", username).one();
            if (users != null)
                return new AuthenticationUser(users.getUsername(), users.getPassword());
            return null;
        };
    }

	// TokenDAO 存储session，默认用的是内存存储，可实现接口进行分布式存储，mysql、redis等
    public TokenDAO tokenDAO() {
        return new DefaultTokenDAO();
    }

}
```



## 配置文件

```
jwt:
  secret: "secret" #密钥，jwt生成的psw
  client: "client" #customerId，customer端的id
  provide_open: true #是否打开login登出校验secret和client
```



## 提供接口

login接口：

```
uri：  /authentication/login

参数：
username : '',
password : '',
client : '', #provide_open开启时需要
secret : '' #provide_open开启时需要
```

注销接口

```
uri: /authentication/logout

参数：
client : '', #provide_open开启时需要
secret : '', #provide_open开启时需要
token : ''
```

