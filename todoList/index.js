const vm = new Vue({
  el: '#app',
  data: {
    inpValue: '',
    toDoList: [],
    completeList: [],
  },

  methods: {
    getInput(e) {
      this.inpValue = e.target.value;
    },

    addToDoList() {
      if (this.inpValue == '') {
        return;
      }
      const curValue = this.inpValue;
      this.toDoList.push({
        title: curValue,
        id: Math.random(),
      });
      this.inpValue = '';
    },

    finishEvevt(toDoIndex) {
      const curEvent = this.toDoList.splice(toDoIndex, 1);
      this.completeList.push(...curEvent);
    },

    noFineshEvevt(completeIndex) {
      const curEvent = this.completeList.splice(completeIndex, 1);
      this.toDoList.push(...curEvent);
    },

    deleteEvent(index, type) {
      if (type == 'toDo') {
        this.toDoList.splice(index, 1);
      } else if (type == 'finish') {
        this.completeList.splice(index, 1);
      }
    },
  },
});
