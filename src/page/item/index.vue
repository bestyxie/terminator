<template>
  <div class="question">
    <h3>{{questions[current].title}}</h3>
    <div class="item" v-for="(q, i) in questions[current].items">
      <p :class="i === selected ? 'active': ''" @click="fn_select(i, q.goto)">{{q.text}}</p>
    </div>

    <a href="javascript:void(0);" class="next" v-if="selected >= 0 && typeof goto !== 'string'" @click="fn_next">下一题</a>
    <a href="javascript: void(0);" class="commit" v-if="typeof goto === 'string'">提交</a>
  </div>
</template>

<script>
  export default {
    name: "item",
    data: function (){
      return {
        current: 0,
        selected: -1,
        goto: -1,
        questions: [{
          title: "你身边的朋友都觉得你是一个风趣幽默的人吗？",
          items: [
            {text: "是的，都很喜欢我", goto: 2},
            {text: "不这样认为", goto: 3},
            {text: "不清楚", goto: 4}
          ]
        },{
          title: "你是一个情绪多变，常常喜怒无常的人吗？",
          items: [
            {text: "是的", goto: 3},
            {text: "不是", goto: 4},
            {text: "还好", goto: 5}
          ]
        },{
          title: "假如同事不小心冒犯了你，你会怎么办呢？",
          items: [
            {text: "直接发飙", goto: 5},
            {text: "假装淡定", goto: 5},
            {text: "没关系，很大度", goto: 6}
          ]
        },{
          title: "只要是微信好友，每个人你都会点赞吗？",
          items: [
            {text: "是的", goto: 5},
            {text: "不会", goto: 6},
            {text: "不好说，看是谁", goto: 7}
          ]
        },{
          title: "如果让你评价直属领导，你会如何评价呢？",
          items: [
            {text: "能力超群的领导", goto: 6},
            {text: "能力一般的领导", goto: 7},
            {text: "各方面都很差劲的领导", goto: 8}
          ]
        },{
          title: "结婚后你会马上就要孩子吗？",
          items: [
            {text: "是的", goto: 7},
            {text: "不会", goto: 8},
            {text: "不好说，看情况", goto: 'B'}
          ]
        },{
          title: "你喜欢那个国家的喜剧片呢？",
          items: [
            {text: "国产的", goto: 8},
            {text: "美国的", goto: 9},
            {text: "韩国的", goto: 10}
          ]
        },{
          title: "在马路上看到别人乱扔垃圾或者闯红灯，你会？",
          items: [
            {text: "马上去制止", goto: 9},
            {text: "跟风闯红灯", goto: 'B'},
            {text: "视而不见", goto: 'A'}
          ]
        },{
          title: "你的包包里随身到这湿纸巾吗？",
          items: [
            {text: "是的，备用", goto: 'C'},
            {text: "不会", goto: 'D'},
            {text: "偶尔会记得带", goto: 'B'}
          ]
        },{
          title: "心血来潮想要买衣服，你会在什么渠道购买呢？",
          items: [
            {text: "实体店", goto: 'A'},
            {text: "网购", goto: 'C'},
            {text: "都可以", goto: 'D'}
          ]
        }]
      }
    },
    methods: {
      fn_select: function (selected, goto) {
        var self = this;

        self.selected = selected;
        self.goto = goto;
      },
      fn_next: function () {
        var self = this;

        self.current = self.goto;
        self.selected = -1;
      }
    }

  }
</script>

<style lang="scss">
  .question{
    margin-top: 40%;
    padding: 0 50px;
    .item{
      p{
        margin-bottom: 10px;
        &.active{
          color: yellowgreen;
        }
      }
    }
    .next,.commit{
      color: #fff;
      display: block;
      width: 100px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      text-decoration: none;
      border: 1px solid #fff;
      border-radius: 5px;
      margin: 10px auto;
    }
  }
</style>
