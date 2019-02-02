<template>
  <v-ons-page>
    <p class="intro">
      This is a kitchen sink example that shows off the Vue bindings for Onsen UI.<br>
    </p>
    <p class="intro">
      导入官方demo部分代码, 再比较一下其他框架, 待定。 -- SXP --龚龙。<br/>
      isAndroid: {{md}}
    </p>

    <v-ons-card v-for="page of pages" :key="page.label"
      @click="push(page.component, page.label)"
    >
      <div class="title">{{ page.label }}</div>
      <div class="content">{{ page.desc }}</div>
    </v-ons-card>
  </v-ons-page>
</template>

<script>
import PullHook from './PullHook.vue';
import Dialogs from './Dialogs.vue';
import Buttons from './Buttons.vue';
import Carousel from './Carousel.vue';
import InfiniteScroll from './InfiniteScroll.vue';
import Progress from './Progress.vue';

export default {
  data () {
    return {
      pages: [
        {
          component: PullHook,
          label: 'Pull Hook-下拉刷新',
          desc: 'Simple "pull to refresh" functionality to update data.'
        },
        {
          component: Dialogs,
          label: 'Dialogs--对话框',
          desc: 'Components and utility methods to display many types of dialogs.'
        },
        {
          component: Buttons,
          label: 'Buttons--按钮',
          desc: 'Different styles for buttons, floating action buttons and speed dials.'
        },
        {
          component: Carousel,
          label: 'Carousel-走马灯-轮播图',
          desc: 'Customizable carousel that can be optionally fullscreen.'
        },
        {
          component: InfiniteScroll,
          label: 'Infinite Scroll-无限滚动加载',
          desc: 'Two types of infinite lists: "Load More" and "Lazy Repeat".'
        },
        {
          component: Progress,
          label: 'Progress-进度条, 加载效果',
          desc: 'Linear progress, circular progress and spinners.'
        }
      ]
    };
  },

  methods: {
    push(page, key) {
      console.log(`HOME --> PUSH!`)
      this.$store.commit('navigator/push', {
        extends: page,
        data() {
          return {
            toolbarInfo: {
              backLabel: '主页',
              title: key
            }
          }
        }
      });
    }
  }
};
</script>

<style>
.intro {
  text-align: left;
  padding: 0 22px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.4;
  color: rgba(0, 0, 0, .54);
}

ons-card {
  cursor: pointer;
  color: #333;
}

.card__title, .card--material__title {
  font-size: 20px;
}
</style>
