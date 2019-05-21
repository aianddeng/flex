<template>
    <div class="show">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
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

