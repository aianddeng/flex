<template>
    <div class="show">
        <ul :class="{'showit':attr.isFlex}" :style="[theUlAttr,attr.divAttr]">
            <!-- n==attr.bindId -->
            <li 
                :class="{isChoice:checkBindId(n)||attr.bindId===0}"
                v-for="n in parseInt(attr.divNum)" 
                :key="n"
                @click="doBindId(n)"
                :style='theLiAttr[n]'>
                {{n}} 
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'FlexDiv',
  data () {
    return {
    }
  },
    props:[
      'attr',
      'theUlAttr',
      'theLiAttr',
    ],
    methods: {
        doBindId(n) {
            // 取消多选
            if(this.attr.bindId===0){
                this.attr.bindId='';
                return;
            }
            // 首次单选
            if(this.attr.bindId==='') {
                this.attr.bindId=[];
                this.attr.bindId.push(n);
                return;
            } 
            // 多选
            let doit=true;
            for(let i=0;i<this.attr.bindId.length;i++){
                if(this.attr.bindId[i]==n){
                    this.attr.bindId.splice(i,1);
                    if(!this.attr.bindId.length) this.attr.bindId='';
                    doit=false;
                    break;
                }
            }
            if(doit){
                this.attr.bindId.push(n);
                if(this.attr.divNum==this.attr.bindId.length){
                    this.attr.bindId=0;
                }
            }
            
        },
        checkBindId(n){
            // this.attr.bindId.foreach(function(v){
            //     console.log(n,v);
            //     if(n==v) return true;
            // })
            if(this.attr.bindId==='') return false;
            for(let i=0;i<this.attr.bindId.length;i++){
                if(n==this.attr.bindId[i]) return true;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.showit{
    display: flex;
}

.show{
    padding: 20px;
    overflow: auto;
    border-radius: 12px;
    background: #eee;
    @media (min-width:768px){
        &{
            width: calc(100% - 320px);
            margin: 0 0 0 40px;
            padding: 30px;
        }
    }
    ul{
        background: #fff;
        border-radius: 12px;
        padding: 10px;
        box-sizing: border-box;
        margin: 0 auto;
    }
    ul li{
        width: 80px;
        height: 80px;
        line-height: 80px;
        margin: 1px;
        border-radius: 6px;
        background: #00bbb8;
        color: #fff;
        text-align: center;
        transition: all .5s;
        &.isChoice{
            background-color: #f42;
        }
        animation: showLi .5s;
        @keyframes showLi {
            from{
                transform: scale(.3,.3);
                opacity: .3;
            }
        }
    }
}

</style>

