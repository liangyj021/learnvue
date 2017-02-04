Vue.component('modal', {
	props: ['content'],
	template: `
	<div class="modal is-active">
	  <div class="modal-background"></div>
	  <div class="modal-content">
	    <!-- Any other Bulma elements you want -->
	    <div class="box">
	    	<slot></slot>
	    	{{ content }}
	    </div>
	  </div>
	  <button class="modal-close" @click="$emit('close')"></button>
	</div>
`
})

new Vue({
	el: '#root',
	data: {
		showModal: false
	},
	methods:{
		close: function(){
			this.showModal = false
		}
	}
})