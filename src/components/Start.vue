<template>
<div class="start">
        <div class="has-flex" @click="hasFlex">
            <p>Display : Flex / Block</p>
            <i :class="{showI:attr.isFlex}"></i>
        </div>
        <div class="has-flex" @click="selectAll">
            <p >Select : All / Cancel</p>
            <i :class="{showI:attr.bindId===0}"></i>
        </div>
        <div 
            class="has-flex"
            v-for="(item) in theDivName"
            :key="item['type']"
            @mousedown.prevent="setPresentNum(item['type'],$event)" 
            @mousemove="setPresentNumTwo(item['type'],$event)"
            @mouseleave="unSetPresentNum(item['type'])"
            @mouseup="unSetPresentNum(item['type'])"   
            @dblclick="item['type']===1 && setHeightAuto()"     
        >
            <div class="banner" :style="bannerTrans(item['type'])"></div>
            <span>{{item['name']}} : </span>
            <span>{{getValueItem(item['type'])}}</span>
            <span class="showhelp" v-show="item['type']===1">(dblclick change value)</span>
            <i :class="{showI:heightAuto&&item['type']==1}"></i>
        </div>
</div>
</template>

<script>
export default {
  name: 'Start',
  data() {
      return {
          heightAuto:true,
          theDivName:[
              {
                  'name':'Div',
                  'type':0
              },
                  {
                      'name':'Height',
                      'type':1
                  },
              {
                  'name':'Width',
                  'type':2
              },
          ],
          theDivAttr:{
              'dheight': 100,
              'dwidth': 100,
          },
          theSideBar:[
              {
                  theClientX: 0,
                  theDivX: 0,
                  theTrans: 100,
                  theDefault: 100,
                  theDivMouse:false,           
              },
              {
                  theClientX: 0,
                  theDivX: 0,
                  theTrans: 100,
                  theDefault: 100,
                  theDivMouse:false,           
              },
              {
                  theClientX: 0,
                  theDivX: 0,
                  theTrans: 100,
                  theDefault: 100,
                  theDivMouse:false,           
              }
          ]
      }
  },
  props: [
    'attr'
  ],
  methods:{
      setHeightAuto(){
          this.heightAuto=!this.heightAuto;
          if(this.heightAuto){
              this.$set(this.attr.divAttr,'height','auto');
          }else{
              this.$set(this.attr.divAttr,'height',this.theDivAttr.dheight+'%');
          }
      },
      hasFlex(){
          this.attr.isFlex=!this.attr.isFlex;
      },
      selectAll(){
          this.attr.bindId===''?this.attr.bindId=0:this.attr.bindId='';
      },
      bannerTrans(i){
          return {'transform':'translateX(-'+this.theSideBar[i].theTrans+'%)',};
      },
      getValueItem(i){
          let ret='';
          switch(i){
              case 0:
                ret = this.attr.divNum;
                break;
              case 1:
                if(!this.heightAuto){
                    ret = this.theDivAttr.dheight+'%';
                }else ret='auto';
                break;
              case 2:
                ret = this.theDivAttr.dwidth+'%';
                break;
          }
          return ret;
      },
      setPresentNum(i,e){
          if(i===1&&this.heightAuto) return;
          this.theSideBar[i].theDivMouse=true;
          this.theSideBar[i].theDivX=e.currentTarget.offsetWidth;
          this.theSideBar[i].theClientX=e.clientX;
      },
      unSetPresentNum(i){
          this.theSideBar[i].theDivMouse=false;
          this.theSideBar[i].theDefault=this.theSideBar[i].theTrans;
      },
      setPresentNumTwo(i,e){
          if(this.theSideBar[i].theDivMouse){
            let length=e.clientX-this.theSideBar[i].theClientX;
            this.theSideBar[i].theTrans=this.theSideBar[i].theDefault-length/this.theSideBar[i].theDivX*100;
            if(this.theSideBar[i].theTrans<0) this.theSideBar[i].theTrans=0;
            else if(this.theSideBar[i].theTrans>100) this.theSideBar[i].theTrans=100;
          }
      }
  },
    watch: {
        'theDivAttr': {
            handler(val) {
                this.$set(this.attr.divAttr,'height',val.dheight+'%');
                if(this.heightAuto) this.$set(this.attr.divAttr,'height','auto');
                this.$set(this.attr.divAttr,'width',val.dwidth+'%');
            },
            deep:true
        },
        // 初始化
        'theSideBar':{
            handler(val,old){
                this.attr.divNum=parseInt(100-val[0].theTrans);
                this.$set(this.theDivAttr,'dheight',100-parseInt(val[1].theTrans));
                this.$set(this.theDivAttr,'dwidth',100-parseInt(val[2].theTrans));
            },
            deep:true
        },
    },
    mounted () {
        this.theSideBar[0].theTrans-=this.attr.divNum;
        this.theSideBar[1].theTrans-=20;
        this.theSideBar[2].theTrans-=90;
        for(let i=0;i<this.theSideBar.length;i++){
            this.theSideBar[i].theDefault=this.theSideBar[i].theTrans;
        }
    },
}
</script>

<style lang="scss" scoped>
.start{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .has-flex{
        width: 100%;
        height: 50px;
        line-height: 50px;
        background-color: #f42;
        color: #fff;
        margin: 0 0 8px 4px;
        transition: all .4s;
        cursor: pointer;
        padding: 0 20px;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        span{
            position: relative;
            z-index: 9;
            &.showhelp{
                font-size: 12px;
                color: #eee;
                opacity: 0;
                animation: showhelps 15s;
                @keyframes showhelps {
                    from{
                        opacity: 1;
                        font-size: 18px;
                    }
                    5%{
                        font-size: 12px;
                    }
                    to{
                        opacity: 1;
                        font-size: 12px;
                    }
                }
            }
        }
        i{
            transform: translateY(-50%);
            top: 50%;
            right: 20px;
            position: absolute;
            display: block;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            opacity: 0;
            transition: all .5s;
            background-color: #fff;
            &.showI{
                opacity: 1;
            }
        }
        &:hover{
            background-color: rgba(0, 0, 0, 0.6);
        }
        .banner{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            background-color: #00bbb8;
            transition: all .4s;
            transform: translateX(-100%);
            animation: theAni .8s .2s;
            @keyframes theAni {
                from{
                    transform: translateX(0);
                }
            }
        }
    }
}
</style>

