# 使用 json-server 模拟数据

## install

全局安装

```bash
$ yarn global add json-server
```

## usage

数据 `db.json`
```json
{
  "posts":[
    {
      "id":1,
      "name":"zhangsan",
      "age":20
    }
  ],
  "comments":[
    {
      "id":1,
      "title":"cmt1",
      "postId":1
    }
  ]
}
```

启动

```bash
$ json-server --watch db.json --port 8000
```


## 关系查询 父子

使用 `_embed=????` 进行查询。 **注意这里是 `_embed=comments`， 有 `s`**。

```bash
$ curl http://localhost:8000/posts?_embed=comments
```

## 关系查询 子父亲

使用 `_exapnd=????` 进行查询。 **注意这里是 `_exapnd=post`， 没有 `s`**。

```bash
$ curl http://localhost:8000/comments?_expand=post
```

