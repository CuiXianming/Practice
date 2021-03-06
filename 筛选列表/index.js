const vm = new Vue({
  el: '#app',
  data: {
    inpValue: '',
    optionList: ['Male', 'Female', 'All'],
    classActive: [false, false, true],
    sex: ['m', 'f'],
    personArr: [
      {
        name: '王港',
        src:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4005587090,2408158268&fm=26&gp=0.jpg',
        des: '颈椎不好',
        sex: 'm',
        id: '056482',
      },
      {
        name: '刘莹',
        src:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571915784984&di=a0056fd06188e87b922c60878e5ce6e2&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F79%2F64%2F5c05df1faf3b7_610.jpg',
        des: '我是谁',
        sex: 'f',
        id: '157894',
      },
      {
        name: '刘秀莹',
        src:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571915803971&di=47dc968f55b16a461de3e8f25bdf8600&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F27%2F190426198344.jpg',
        des: '我长得很好看',
        sex: 'f',
        id: '2849245',
      },
      {
        name: '刘金雷',
        src:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571915748758&di=5be825da4d37bcc21959946c101d5609&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201707%2F19%2F20170719211350_4PnBt.jpeg',
        des: '你没有见过陌生的脸',
        sex: 'm',
        id: '348515',
      },
      {
        name: '刘飞翔',
        src:
          'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571915762633&di=49517ca62ecddb638cdfb2158a64e39a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201702%2F05%2F20170205222154_WLdJS.jpeg',
        des: '瓜皮刘',
        sex: 'm',
        id: '478454',
      },
    ],
  },
  methods: {
    optionFilter(option, optionindex) {
      this.classActive = [false, false, false];
      this.classActive.splice(optionindex, 1, true);
      this.sex.length = 0;
      switch (option) {
        case 'Male':
          this.sex.push('m');
          break;
        case 'Female':
          this.sex.push('f');
          break;
        case 'All':
          this.sex.push('m', 'f');
          break;
      }
    },
  },

  computed: {
    personList() {
      const { personArr, inpValue, sex } = this;
      return personArr.filter(
        (item) => item.name.includes(inpValue) && sex.includes(item.sex),
      );
    },
  },
});
