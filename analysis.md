# 解析

## 方式一

### Vue.js 运行机制

### 响应式系统基本原理

### 响应式系统的依赖收集追踪原理

### 实现Vietual DOM 下的一个 VNode 节点

### template 模板是怎么通过 Compile 编译的

### 数据状态更新时的差异 diff 及 patch 机制

### 引用

- []()

## 方式二

### Vue 解决了什么痛点

- 解决传统前端开发痛点，优化开发体验。

  - 传统前端开发，比如`jQuery`等前端库是直接操作`DOM`，如果功能复杂，代码量会变得复杂而不好维护；
  - `Vue`其中一个核心思想是数据驱动，我们对于视图的修改，并非直接操作`DOM`，而是通过修改数据。因为`DOM`变成了数据的映射，开发过程不用触碰`DOM`，维护阶段也较为方便高效。
### 准备工作

- Vue 本质上是一个用 Function 实现的 Class ，然后基于他的原型 prototype 以及本身都扩展了一系列的方法和属性。

### 数据驱动

### 简版实现

- [@careteen/vue](https://github.com/careteenL/vue)

### 引用

- [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/prepare/)
- [Vue源码 & 前端进阶体系](https://cloud.tencent.com/developer/column/79378/tag-10197)

