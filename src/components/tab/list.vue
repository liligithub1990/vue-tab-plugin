<template>
  <div class="list">
    <item-comp :treeData="treeData"></item-comp>
  </div>
</template>
<style lang="less">
.button{
  background-color: #3c81df;
  border-width: 0;
  color: #fff;
  border-radius: 2px;
  font-size: 11px;
  height: 24px;
  line-height: 24px;
  padding-left: 6px;
  padding-right: 6px;
  display: inline-block;
  cursor: pointer;
  transition: none 86ms ease-out;
}
.info-title{
  background-color:#c1c1c1;
  color:#fff;
  line-height:30px;
  font-weight:bold;
  .body-op{
    background:none;
  }
  .body-cont{
    border-right:1px solid #ccc;
    padding-left:5px;
  }
  .no-border{
    border:none;
  }
}
.content{
  background-color: #eee;
  text-align: left;
  width: 95%;
  margin:0 auto;
  padding-top: 10px;
  ul{
    margin-left: 0px;
    margin-top: 0;
  }
  li{
    height: 30px;
    line-height: 30px;
    width: 100%;
  }
}
.body-cont{
  float:left;
  height:30px;
  width: 200px;
}
.body-op{
  width:80px;
  background-color:#F2F2F2;
}
.tab{
  li{
    line-height:30px;
    border-bottom:1px solid #ccc;
    background-color:#b8def5;
    .body-cont{
      border-right:1px solid #ccc;
      padding-left:2px;
      input{
        width:95%;
      }
    }
    .no-border{
      border:none;
    }
    .bold,.tr-wrap{
      display:block;
    }
    .content-list{
      li{
        background-color:#fbfbd0;
        .body-cont{
          padding-left:4px;
        }
        li{
          background-color:#d0ebf2;
          .body-cont{
            padding-left:6px;
          }
          li{
            background-color:#e8f1df;
            .body-cont{
              padding-left:8px;
            }
            li{
              background-color:#efdfe1;
              .body-cont{
                padding-left:10px;
              }
              li{
                background-color:#ff8a8a;
                .body-cont{
                  padding-left:10px;
                }
              }
            }
          }
        }
      }
      
    }
  }
}
</style>

<script>
import itemComp from './item';
export default {
  props:{
    resultArr:{
      type:Array
    }
  },
  name:'list',
  data(){
    return {
    }
  },
  computed:{
    thisArr(){
      return this.resultArr
    },
    treeData(){
      return {
        children: this.thisArr[0].children
      }
    }
  },
  components:{
    itemComp
  },
  mounted(){
  },
  methods:{
  }
}
</script>
