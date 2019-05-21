<template>
    <div class="topShow">
        <div class="container">
            <Start
                v-bind:attr=attr
                ></Start>
            <transition name="fade">
                <ConsoleTwo 
                    v-bind:theLiAttr="theLiAttr"
                    :attr=attr
                    v-show="attr.bindId!=='' && attr.isFlex" 
                ></ConsoleTwo>
            </transition>
            <transition name="fade">
                <Console
                    v-bind:theUlAttr="theUlAttr"
                    v-show="attr.isFlex"
                ></Console>
            </transition>

        </div>
        <FlexDiv 
            v-bind:attr=attr 
            :theUlAttr=theUlAttr
            :theLiAttr=theLiAttr
        ></FlexDiv>
    </div>
</template>

<script>
import ConsoleTwo from '@/components/ConsoleTwo'
import Console from '@/components/Console'
import FlexDiv from '@/components/FlexDiv'
import Start from '@/components/Start'
export default {
  name: 'Show',
  data () {
    return {
        attr:{
            isFlex:true,
            divNum:10,
            bindId:'',
            // bindArray:[],
            divAttr:{},
        },
        theUlAttr:{
            'flex-direction':'unset',
            'flex-wrap':'unset',
            'justify-content':'unset',
            'align-items':'unset',
            'align-content':'unset',
        },
        theLiAttr:[],
    }
  },
  components: {
    Console,
    FlexDiv,
    Start,
    ConsoleTwo,

  },
}
</script>

<style lang="scss" scoped>
.topShow{
    padding: 0 20px;
    .container{
        width: 100%;
    }
    @media (min-width:768px){
        &{
            display: flex;
        }
        .container{
            width: 320px;
        }
    }
    @media (min-width:1330px) {
        &{
            max-width: 1290px;
            padding: unset;
            margin: 0 auto;
        }
    }

}

.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
  transform: scale(.4,.4);
  transform-origin: 50% 0;
}
</style>

