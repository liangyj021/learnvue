Vue.component('tabs', {
	template:`
		<div>
			<div class="tabs">
			  <ul>
			    <li v-for='tab in tabs' :class="{ 'is-active': tab.isActive }">
			    	<a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
			    	</li>
			  </ul>
			</div>
			<div class='tab-details'>
				<slot></slot>
			</div>
		</div>
`,
	  data(){
	  	return { tabs:[] }
	  },
	  mounted(){
	  	console.log(this.$children)
	  },
	  created(){
	  	this.tabs = this.$children
	  },
	  methods: {
	  	selectTab(selectedTab){
	  		this.tabs.forEach(tab=>{
	  			tab.isActive = (tab.name == selectedTab.name)
	  		})
	  	}
	  }
})

Vue.component('tab', {
	template:`
	<!-- 这里是控制tab-detail -->
	<div v-show="isActive">
		<slot></slot>
	</div>
	`,
	props: {
		name: { required: true},
		selected: { default: false }
	},
	data(){
		return {
			isActive: false
		}
	},
	mounted(){
		this.isActive = this.selected
	},
	computed:{
		href(){
			// About Out Culture ->  about-out-culture 
			return '#' + this.name.toLowerCase().replace(/ /g, '-')
		}
	}
})

new Vue({
  el: '#root',
  data: {
    // checkedNames: [],
    // picked: []
  }
})