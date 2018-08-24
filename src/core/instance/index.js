// 从五个文件导入五个方法
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/**
 * @desc 定义vue构造函数
 * @note 使用 Function 实现 Vue ，而非 ES6 的 Class 。
 *       原因：下面的 xxxMixin 将 Vue 当做参数传入，目的是给 Vue 的 Prototype 做扩展；
 *            Vue 按功能把这些扩展分散到各个模块中实现，而非在一个模块中实现，这在 Class 中是难以实现的。 
 *       目的：便于后续的维护管理。
 */
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// 将vue作为参数传递给五个方法
initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
