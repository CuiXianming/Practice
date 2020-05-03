const vm = new Vue({
  el: '#app',
  data: {
    showFilterList: false,
    filterList: {},
    goodsList: [
      {
        title: '上装',
        typeList: [
          '全部',
          '针织衫',
          '毛呢外套',
          'T恤',
          '羽绒服',
          '棉衣',
          '卫衣',
          '风衣',
        ],
        id: 1,
      },
      {
        title: '裤装',
        typeList: [
          '全部',
          '牛仔裤',
          '小脚/铅笔裤',
          '休闲裤',
          '打底裤',
          '哈伦裤',
        ],
        id: 2,
      },
      {
        title: '裙装',
        typeList: ['全部', '连衣裙', '半身裙', '长袖连衣裙', '中长款连衣裙'],
        id: 3,
      },
    ],
  },

  methods: {
    selectType(typeIndex, goods, type, goodsIndex) {
      goods.index = typeIndex;
      if (type === '全部') {
        this.$delete(this.filterList, goodsIndex);
        this.changeshowFilter();
        return;
      }
      this.$set(this.filterList, goodsIndex, type);
      // this.filterList.push(type);
      // console.log(this.filterList);
      // this.filterList.splice(goodsIndex, 1, type);
      this.showFilterList = true;
    },

    deleteType(typeListIndex) {
      this.$delete(this.filterList, typeListIndex);
      this.goodsList[typeListIndex].index = 0;
      this.changeshowFilter();
    },
    changeshowFilter() {
      const filterListObj = JSON.stringify(this.filterList);
      // console.log(filterListObj);
      this.showFilterList = filterListObj !== '{}';
    },
  },
});

vm.goodsList.forEach((item) => vm.$set(item, 'index', 0));
console.log(vm.goodsList);
