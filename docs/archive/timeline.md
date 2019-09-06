<template>
  <el-container>
    <el-header>
      <el-form ref="form" label-width="80px">
        <el-form-item label="博客种类">
          <el-radio-group v-for="(ta, index) in tags" v-model="tag" @change="changeTag">
            <el-radio size="small" :label="ta">
              <el-tag hit v-model="tag" :key="ta">{{ta}}</el-tag>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="博客年份">
          <el-date-picker
            @change="changeYear"
            value-format="yyyy"
            v-model="year"
            type="year"
            placeholder="选择博客年份"
          ></el-date-picker>
        </el-form-item>
      </el-form>
    </el-header>
    <el-main>
      <div class="block" style="margin-top:100px;">
        <el-timeline>
          <el-timeline-item
            style="margin-top:-20px;"
            v-for="(activity, index) in post"
            :key="index"
            :timestamp="activity.date"
            placement="top"
            type="success"
            color="#0bbd87"
          >
            <h4>
              <el-link :href="activity.url">{{activity.tag}} --- {{activity.title}}</el-link>
            </h4>
          </el-timeline-item>
        </el-timeline>
        <el-pagination
          background
          layout="total, prev, pager, next"
          @next-click="nextPage"
          @prev-click="prevPage"
          @current-change="currPage"
          :total="allPost.length"
        ></el-pagination>
      </div>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import config from '../.vuepress/config'
export default {
  created() {
    this.currentPage = 1
    this.pageSize = 10
    this.refresh()
  },
  data() {
    return {
      post: [], // 博客文章集合
      tags: new Set(['全部']), // 博客种类
      tag: '', //博客种类前端选择器
      year: '',
      currentPage: 1,
      pageSize: 10,
      allPost: []
    }
  },
  methods: {
    refresh() {
      const tags = config.themeConfig.sidebar
      this.allPost = []
      this.post = []
      tags.forEach(tag => {
        const archives = tag.children
        archives.forEach(archive => {
          const temp = archive.split('/')[3]
          const temps = temp.split('-')
          const date = temps[0] + temps[1] + temps[2]
          temps.shift()
          temps.shift()
          temps.shift()
          this.tags.add(archive.split('/')[2])
          if (
            (!this.year || date.substring(0, 4) === this.year) &&
            (!this.tag ||
              this.tag === '全部' ||
              archive.split('/')[2] === this.tag)
          ) {
            this.post.push({
              date: date,
              tag: archive.split('/')[2],
              title: temps.join('-'),
              url: archive
            })
            this.allPost.push({
              date: date,
              tag: archive.split('/')[2],
              title: temps.join('-'),
              url: archive
            })
          }
        })
      })
      this.post = this.allPost
        .sort((a, b) => parseInt(b.date) - parseInt(a.date))
        .slice(
          (this.currentPage - 1) * this.pageSize,
          this.currentPage * this.pageSize
        )
    },
    changeTag(tag) {
      this.currentPage = 1
      this.refresh()
    },
    changeYear(year) {
      this.currentPage = 1
      this.refresh()
    },
    currPage(val) {
      this.currentPage = val
      this.refresh()
    },
    nextPage(val) {
      console.log(val)
      this.currentPage = val
      this.refresh()
    },
    prevPage(val) {
      console.log(val)
      this.currentPage = val
      this.refresh()
    }
  }
}
</script>