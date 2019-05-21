<template>
<div class="console">
        <div v-for="(index,item) in theAllAttr" :key="index+item" class="section" :class="{'more':item=='*flex-flow(abbr)'}">
            <p class="theTitle">{{item}}</p>
            <div>
                <div 
                    class="inputText"
                    value="row" 
                    v-for="i in index" 
                    :key="i"
                    @click="setAttr(item,i)"
                    :class="{'isSetIt':theUlAttr[item]==i}"
                >{{i}}</div>
            </div>
        </div>
</div>

</template>

<script>
export default {
  name: 'Console',
  data () {
    return {
        theAllAttr:{
            'flex-direction':['row','row-reverse','column','column-reverse'],
            'flex-wrap': ['nowrap' , 'wrap' , 'wrap-reverse'],
            'justify-content': ['flex-start' , 'flex-end' , 'center' , 'space-between' , 'space-around'],
            'align-items': ['flex-start ', 'flex-end' , 'center' , 'baseline ', 'stretch'],
            'align-content': ['flex-start ', 'flex-end' , 'center ', 'space-between ', 'space-around ', 'stretch'],
            '*flex-flow(abbr)': ['flex-direction', 'flex-wrap'],
        },
        theSetAttr:{
            'flex-direction':'unset',
            'flex-wrap':'unset',
            'justify-content':'unset',
            'align-items':'unset',
            'align-content':'unset',
        },
    }
  },
  props: [
      'theUlAttr',
  ],
  methods:{
      setAttr(item,i){
          if(item=='*flex-flow(abbr)') return;
          this.theUlAttr[item]=i;
      },
  },

}
</script>

<style lang="scss">
.theTitle,
.more{
    color: #f42;
}
.has-flex{
    width: 150px;
    height: 50px;
    line-height: 50px;
    background-color: #00bbb8;
    color: #fff;
}
.console{
    display: flex;
    flex-wrap: wrap;
    .section{
        width: 100%;
        display: flex;
        p{
            width: 50%;
            padding: 8px;
            margin: 4px 0;
        }
        div{
            width: 50%;
            position: relative;
            .show-num{
                display: block;
                position: absolute;
                right: 14%;
                top: 50%;
                transform: translateY(-50%);
            }
            input{
                width: 50%;
                padding: 8px;
                margin: 4px 0;
            }
            .inputText{
                width: unset;
                padding: 8px;
                margin: 4px 0;
                position: relative;
                overflow: hidden;
                &::after,
                &::before{
                    display: block;
                    content: '';
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    right: 100%;
                    transition: all .4s;
                }
                &::after{
                    background-color: #00bbb88a;
                }
                &::before{
                    width: 3px;
                    right: 0;
                    top: 100%;
                    border-right: 3px solid #00bbb8;
                }
                &.isSetIt{
                    &::after{
                        right: 0;
                    }
                    &::before{
                        top: 0;
                    }
                }
            }

        }

    }
    
}
</style>

