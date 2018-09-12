<template>
  <div class="item">
    <ul class="content-list">
      <li v-for="(item,index) in nowTree" :key="index">
        <div
          :class="{bold: isFolder(item)}"
          @click="toggle">
          <span v-if="isFolder(item)">{{open ? '-' : '+'}}</span>
        </div>
        {{item.content}}
        <template v-if="item.children.length" >
          <item-comp
            class="item-body"
            v-show="open"
            :treeData="item"
            :key="index"
            >
          </item-comp>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'item-comp',
  props:['treeData'],
  data(){
    return {
      open:true
    }
  },
  computed:{
    nowTree(){
      return this.treeData.children;
    }
  },
  mounted(){
  },
  methods:{
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    isFolder: function (item) {
      return item.children &&
        item.children.length
    },
  }
}
</script>
<style lang="less">
.item-content{
  float:left;
}
.content-list{
  li{
    position: relative;
    .add-icon{
      font-size: 18px;
    }
  }
}
.bold{
  font-weight: bold;
  width: 16px;
  height: 18px;
  position: absolute;
  left: -24px;
  top: 0;
  font-size: 20px;
  cursor: pointer;
}

</style>
