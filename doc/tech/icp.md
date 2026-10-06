# MySQL ICP

## 什么是 ICP

ICP 全称 Index Condition Pushdown，即索引条件下推。

## 为什么需要 ICP

假设存在联合索引：

```sql
CREATE INDEX idx_name_age
ON user(name, age);
```

`SELECT *`
`FROM user`
`WHERE name LIKE '张%'`
`AND age = 30;`

## ICP 的作用

ICP 可以让存储引擎在索引层提前过滤部分不符合条件的数据，
减少回表次数。

## 使用场景

### 联合索引

这里写自己的理解。

### 范围查询

这里继续补充。

## 总结

ICP 的核心目的之一是减少不必要的回表。