# simple-koa 实现简单的 koa

## v1 版本

application：封装原生 http 模块并,且暴露 API。

## v2 版本

- request：封装 Node 原生 request。
- response：封装 Node 原生 response。
- context：代理 request 和 response 模块的属性。
- application：集成。

## v3 版本

application：引入中间机制，洋葱模式。

## v4 版本

application：引入事件机制，处理异常事件。

## v5 版本

application：使用 koa2 的 compose 函数。

## v6 版本

context：使用 Object.defineProperty 代理属性。
