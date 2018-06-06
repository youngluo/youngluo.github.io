<template>
  <div class="page">
    <div class="content">
      <ul class="article-list">
        <li
          v-for="article in articles"
          :key="article.path"
        >
          <h3>
            <router-link :to="article.path">{{article.title}}</router-link>
          </h3>
          <ul class="tags">
            <li>上次更新：{{article.date}}</li>
            <li
              v-for="tag in article.tags"
              :key="tag"
            >
              {{tag}}
            </li>
          </ul>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import pages from '../../pages.js'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export default {
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    let articles = []

    for (const page of pages.articles) {
      for (const rawPage of this.$site.pages) {
        if(rawPage.path.includes(page.name)) {
          articles.push({
            ...page,
            path:`${page.name}.html`,
            title:rawPage.title,
            date: dayjs(rawPage.lastUpdated).fromNow()
          })
          break
        }
      }
    }

    this.articles = articles
  }
}
</script>

<style lang="less" scoped>
ul {
  padding: 0;
  list-style: none;
}
.article-list {
  > li {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      margin: 0;
    }
    a {
      color: #2c3e50;
      transition: color 0.2s;
      &:hover {
        text-decoration: none;
        color: #338d6d;
      }
    }
  }
}
.tags {
  margin-top: 12px;
  li {
    margin-left: 10px;
    display: inline-block;
    font-size: 14px;
    &:not(:first-child) {
      color: #338d6d;
    }
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>


