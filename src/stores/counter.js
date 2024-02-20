import { defineStore } from "pinia";

export const useCounterStore = defineStore('CounterStore', {
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'The Counter'
  }),
  actions: {
    increaseCounter(amount) {
      this.count += amount
    },
    decreaseCounter(amount) {
      this.count -= amount
    }
  },
  getters: {
    oddOrEven: (state) => {
      if (state.count % 2 === 0) return 'even' 
      return 'odd'
    }
  }
})