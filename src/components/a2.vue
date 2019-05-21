<template>
<div>

</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
    methods:{
        doit(e){
            this.$emit('changeTheUlValue', e.target.value,'flex-direction');
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.show ul{
    display: flex;
}
.show ul li{
    width: 80px;
    height: 80px;
    line-height: 80px;
    margin: 0 1px;
    border-radius: 6px;
    background: #008edd;
    color: #fff;
}
</style>

