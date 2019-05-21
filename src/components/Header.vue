<template>
    <header>
        <div>
            <router-link to="/case">&lt;--实例演示</router-link>
        </div>
        <h1>flex属性测试</h1>
        <div>
            <router-link to="/doc">文档查询--&gt;</router-link>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
header{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    h1{
        text-align: center;
        line-height: 2.6;
        padding: 20px;
        padding-bottom: 0;
        overflow: hidden;
        order: -1;
        width: 100%;
    }
    div{
        display: flex;
        flex-flow: column;
        justify-content: center;
        a{
            color: initial;
            font-size: 22px;
            padding: 20px;
        }
    }
    @media (min-width:768px) {
        h1{
            order:unset;
            padding: 40px 20px;
            width: auto;
        }
    }
}
</style>

