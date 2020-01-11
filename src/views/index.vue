<template>
  <div class="index">
    <div class="header">
      <van-icon name="qr-invalid" />
      <div class="search">
        <van-icon name="search" />
        <span>搜索新闻</span>
      </div>
      <van-icon name="friends-o" @click="$router.push({name:'personal'})" />
    </div>
    <nav>
      <!-- 导航栏 -->
      <van-tabs v-model="active" sticky swipeable>
        <van-tab :title="item.name" v-for="item in newsList" :key="item.id">
          <!-- 上拉加载更多 -->
          <van-list
            v-model="item.loading"
            :finished="item.finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check='false'
            :offset='10'
          >
            <!-- 下拉刷新 -->
            <van-pull-refresh v-model="item.isLoading" @refresh="onRefresh">
              <!-- 内容 -->
              <exhibition v-for="post in item.postlist" :key="post.id" :article="post"></exhibition>
            </van-pull-refresh>
          </van-list>
        </van-tab>
      </van-tabs>
    </nav>
  </div>
</template>

<script>
import { category } from '@/apis/column.js';
import { post } from '@/apis/article.js';
import exhibition from '@/components/exhibition.vue';
export default {
  components: {
    exhibition
  },
  data() {
    return {
      active: localStorage.getItem('token') ? 1 : 0,
      newsList: {}
    };
  },
  async mounted() {
    let res = await category();
    // console.log(res);
    this.newsList = res.data.data;
    this.newsList = this.newsList.map(item => {
      return {
        ...item,
        postlist: [],
        pageIndex: 1,
        pageSize: 5,
        isLoading: false, // 下拉刷新的状态false表示完成
        loading: false, // loading加载状态
        finished: false // 节流阀加载玩全部数据就设置为true
      };
    });
    this.init();
    console.log(this.newsList);
  },
  methods: {
    async init() {
      let res = await post({
        category: this.newsList[this.active].id,
        pageIndex: this.newsList[this.active].pageIndex,
        pageSize: this.newsList[this.active].pageSize
      });
      // 下拉下载 停止下拉加载
      this.newsList[this.active].loading = false;
      // 若果没数据了就提示
      if (res.data.data.length < this.newsList[this.active].pageSize) {
        this.newsList[this.active].finished = true;
      }
      // 上拉刷新 改变加载状态告诉浏览器加载完了
      this.newsList[this.active].isLoading = false;
      // 新闻数据更新
      this.newsList[this.active].postlist.push(...res.data.data)
    },
    // 上拉刷新
    onRefresh() {
      this.newsList[this.active].pageIndex = 1;
      this.newsList[this.active].postlist.length = 0
      setTimeout(() => {
        this.init();
      }, 1000);
    },
    // 下拉加载更多
    onLoad() {
      // 异步更新数据
      this.newsList[this.active].pageIndex++;
      setTimeout(() => {
        this.init();
      }, 500);
    }
  },
  watch: {
    active() {
      if (this.newsList[this.active].postlist.length === 0 && this.newsList[this.active].isLoading === false) {
        this.init();
      }
    }
  }
};
</script>

<style lang='less' scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  align-items: center;
  background: #f00;
  padding: 0 10px;
  font-size: 20px;
  .search {
    flex: 1;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.6);
    text-align: center;
    color: #fff;
  }
}
</style>
