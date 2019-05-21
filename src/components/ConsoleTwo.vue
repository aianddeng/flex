<template>
    <div class="console" :class="{showAni:attr.bindId===''}">
        <div v-for="(index,item) in theAllAttrTwo[0]" :key="index+item" class="section">
            <p class="theTitle">{{item}}</p>
            <div>
                <input type="range" min="-1" :max="theMax(item)" :value="parseInt(getValue(item))" @change="setAttrTwo(item,$event)">
                <span class="show-num">{{getValue(item)}}</span>
            </div>
        </div>
        <div v-for="(index,item) in theAllAttrTwo[1]" :key="index+item" class='section' :class="{'more':item=='*flex(abbr)'}">
            <p class="theTitle">{{item}}</p>
            <div>
                <div 
                    class="inputText"
                    v-for="i in index" 
                    :key="i"
                    @click="setAttrTwo(item,i)"
                    :class="{'isSetIt':getValue(item)==i}"
                    v-html="i"
                    ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ConsoleTwo',
  data () {
    return {
        theBasis:0,
        theAllAttrTwo:
        [
            {
                'order':0,
                'flex-grow':0,
                'flex-shrink':1,
                'flex-basis':0,
            },
            {
                'align-self': ['auto' , 'flex-start' , 'flex-end' , 'center ', 'baseline' , 'stretch'],
                '*flex(abbr)': ['[auto/none]','flex-grow','flex-shrink','flex-basis'],
            }
        ],
        // 多选，maybe多项?
        theDataShow:{},
    }
  },
  props: [
      'attr',
      'theLiAttr'
  ],
  mounted () {
    this.setDefault();
  },
  methods:{
      setDefault(){
          for(let i=0;i<=this.attr.divNum;i++){
              if(typeof this.theLiAttr[i]=='undefined'){
                this.$set(this.theLiAttr,i,{'align-self':'unset'});
            }
        };
      },
      getValue(item){
          //   未选择，退出   
          if(this.attr.bindId===''){
              return;
          }
          //   默认值1
          if(typeof this.theLiAttr[this.attr.bindId]=='undefined'){}
          else if(typeof this.theLiAttr[this.attr.bindId][item] == 'undefined') {}
          //   设置值
          else return this.theLiAttr[this.attr.bindId][item];
          //   默认值2，退出
          if(item=='align-self'){
              return false;
          }
          //   数组的值
          if(this.attr.bindId.length>1){
              if(typeof this.theDataShow[item]=='undefined'){
                  return;
              }
              return this.theDataShow[item];
          }
          //   全选的值
          if(this.attr.bindId===0){
              if(typeof this.theLiAttr[0][item]=='undefined'){
                  return;
              }
              return this.theLiAttr[0][item];
          }
          //   默认值
          return this.theAllAttrTwo[0][item];
      },
      setAttrTwo(item,e){
        //   禁止选择，返回
          if(item=='*flex(abbr)') return;
        //   获取值
          if(typeof e == 'object'){
              e=e.target.value;
            //   添加后缀
              if(item=='flex-basis'){
                e=this.addMore(e);
              }
          }
        //   设置对应值（包括0和多选和单选）
          for(let i=0;i<this.attr.bindId.length;i++){
              let setA=this.attr.bindId[i];
              this.$set(this.theLiAttr[setA],item,e);
          }
          if(this.attr.bindId.length>1){
              //   多选复制一份
              this.$set(this.theDataShow,item,e);
          }
          //   0复制到all
          if(this.attr.bindId===0){
            for(let i=0;i<this.theLiAttr.length;i++){
                this.$set(this.theLiAttr[i],item,e);
            }
            // 拷贝一份到多选
            this.$set(this.theDataShow,item,e);
          }
      },
      addMore(i){
          return i+'%';
      },
      theMax(item){
          let a=10;
          if(item=='order'){
              a=this.attr.divNum;
          }
          if(item=='flex-basis'){
              a=100;
          }
          return a;
      }
  },
      watch: {
        'attr.divNum':{
          handler(val,old){
            if(val>old) this.setDefault();
          },
          deep:true
        }
    },
}
</script>
<style lang="scss" scoped>
    .console{
        border-bottom: 2px solid #f42;
    }
</style>

