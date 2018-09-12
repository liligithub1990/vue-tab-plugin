<template>
  <div class="tab">
    <div class="tab-box">
      <div class="buttons">
        <a href="javascript:;" :class="{ active: currentTab === item.name }" v-for="(item, index) in tabJson" :key="index" @click="changeTab(index)">{{item.name}}</a>
      </div>
      <div class="content">
        <keep-alive>
          <list-comp :resultArr="contArr"></list-comp>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import listComp from './list';
export default {
  name: '',
  props:{
    resultArr:{
      type:Array
    },
    tabBtns:{
      type:Array
    }
  },
  data () {
    return {
      defaultIndex:0
    }
  },
  components:{
    listComp
  },
  computed:{
    contArr(){
      return this.resultArr.filter((item)=>{
        return item.type == this.currentTab;
      });
    },
    tabJson(){
      let temp = [];
      for(let i=0;i<this.tabBtns.length;i++){
        temp.push({
          key:i,
          name:this.tabBtns[i]
        })
      }
      return temp;
    },
    currentTab(){
      return this.tabBtns[this.defaultIndex];
    }
  },
  mounted(){ 
  },
  methods:{
    changeTab(index){
      this.defaultIndex = index;
    }
  }
}
</script>

<style lang="less">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  padding: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  
  color: #fff;
}
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.clearfix:before, .clearfix:after { content: "\0020"; display: block; height: 0; overflow: hidden; }
.clearfix:after { clear: both; }
.clearfix { zoom: 1; }
.item {
  cursor: pointer;
}
.tab-box{
  width: 100%;
  margin:0;
  margin: 100px auto;
  h3{
    height: 50px;
    line-height: 50px;
  }
}
.buttons{
  font-size: 0;
  a{
    font-size: 20px;
    display: inline-block;
    width: 50%;
    height: 49px;
    text-align: center;
    line-height: 49px;
    background-color: #5597B4;
    text-decoration: none;
    &.active{
      border-bottom: 5px solid #E35885;
			transition: .3s;
    }
  }
}

</style>
