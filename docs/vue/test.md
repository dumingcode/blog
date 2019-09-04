<template>
  <div class="block">
     <el-timeline>
      <el-timeline-item timestamp="2018/4/12" placement="top" type="success" color="#0bbd87">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import config from '../.vuepress/config'
export default {
  created(){
    console.log(config)
  },
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  }
}
</script>