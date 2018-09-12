<template>
  <div id="app">
    <tab :resultArr="shuju" :tabBtns="tabs"></tab>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      tabs:['abc','bcd'],
      shuju: [
        {
          key: 0,
          type:'abc',
          children: [
            {
              content:'11111111',
              children:[{
                content:'tree-1',
                children:[
                  {
                    content:'tree-tree-1',
                    children:[]
                  },
                  {
                    content:'tree-tree-2',
                    children:[]
                  }
                ]
              },
              {
                content:'tree-2',
                children:[]
              },
              {
                content:'tree-3',
                children:[]
              }]
            }
          ],
          nextKey: 1
        },
        {
          key: 0,
          type:'bcd',

          children: [
            {
              content: '2222',
              children:[
                {
                  content:'dsfdsfdsf',
                  children:[]
                }
              ]
            }
          ],
          nextKey: 1
        }
      ]
    }
  },

  mounted(){
  },
  methods: {
    childNode(){
      
    }
  }
}
</script>
