

// Vue.component("task-list",function(){
// 		template: `<div>
// 			<task v-for="task in task-list">{{task.task}}</task>
// 			</div>`,
// 		data: function(){
// 			return data
// 		}
// 	}
// )
// new Vue({
// 	el: "#root1"
// })

var data = {tasks: [
				{task:"go to store", complete: true},
				{task:"go to bank", complete: false},
				{task:"go to store", complete: true}
			]};

Vue.component('task-list', {
  template: '<ul><task v-for="task in tasks">{{ task.task }}</task></ul>',
  // data 是一个函数，因此 Vue 不会警告，
  // 但是我们为每一个组件返回了同一个对象引用
  data: function () {
    return data
  }
})

Vue.component('task', {
	template: '<li><slot></slot></li>'
})
new Vue({
  el: '#root1'
})





// var data = { counter: 0 }

Vue.component('simple-counter', {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data 是一个函数，因此 Vue 不会警告，
  // 但是我们为每一个组件返回了同一个对象引用
  data: function () {
    return { counter: 0 }
  }
})
new Vue({
  el: '#example-2'
})