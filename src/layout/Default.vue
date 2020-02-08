<template>
  <el-container>
  <el-header><Nav></Nav></el-header>
  <el-container>
    <el-aside width="200px">
        <Menu></Menu>
    </el-aside>
    <el-container>
      <el-main>
          <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<script>
import Nav from '../components/Nav'
import Menu from '../components/Menu'
export default {
    components:{
        Nav,
        Menu
    }

}
</script>

<style>

</style>