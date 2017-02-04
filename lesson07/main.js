// Vue.component('task', {
// 	template: '<li><slot>Foobar</slot></li>'
// });

Vue.component("task-list",function(){
		template: `<div>
			<task v-for="task in task-list">{{task.task}}</task>
			</div>`,
		data(){
			return {tasks: [
				{task:"go to store", complete: true},
				{task:"go to store", complete: false},
				{task:"go to store", complete: true}
			]}
		}
	}
)
new Vue({
	el: "#root1"
})
