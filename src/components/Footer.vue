<template>
    <footer>
        <div class="link">
            参考资料：<a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html">廖雪峰的Flex布局教程：语法篇</a>
        </div>
        <div class="copyright">
            <p>copyright &copy; 2019-5-9</p>
            <p>by <a href="https://www.worki.cn">Deng</a></p>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

footer{
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 40px 20px;
    margin-top: 40px;
    text-align: center;
    .link{

    }
    .copyright{
        p{
            padding: 6px 0;
            display: inline-block;
        }
    }
}
</style>

