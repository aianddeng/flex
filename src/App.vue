<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
      Footer,
      Header,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
a{
    color: #ccc;
    text-decoration: none;
    transition: all .5s;
    display: inline-block;
    &:hover{
        letter-spacing: 5px;
        &::after{
            transform: scaleX(1);
        }
    }
    &::after{
        display: block;
        content: '';
        width: 100%;
        height: 2px;
        background-color: #fff;
        transform: scaleX(0);
        transition: all .5s ease-in-out;
    }
}
</style>
