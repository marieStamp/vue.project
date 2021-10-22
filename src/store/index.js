import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const items = []
          const pages = {
            page1: [
              { id: 1, date: '20.01.2021', category: 'Food', amount: 169 },
              { id: 2, date: '05.02.2021', category: 'Education', amount: 50 },
              { id: 3, date: '22.02.2021', category: 'Sport', amount: 450 }
            ],
            page2: [
              { id: 4, date: '03.03.2021', category: 'Transport', amount: 969 },
              {
                id: 5,
                date: '15.03.2021',
                category: 'Education',
                amount: 1500
              },
              { id: 6, date: '20.04.2021', category: 'Food', amount: 200 }
            ],
            page3: [
              { id: 7, date: '24.05.2021', category: 'Transport', amount: 969 },
              {
                id: 8,
                date: '04.06.2021',
                category: 'Education',
                amount: 1500
              },
              { id: 9, date: '25.08.2021', category: 'Food', amount: 200 }
            ]
          }
          for (const pagesKey in pages) {
            pages[pagesKey].forEach(item => {
              items.push(item)
            })
          }
          resolve(items)
        }, 2000)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    },
    fetchCategory ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(['Food', 'Transport', 'Education', 'Sport', 'Entertainment'])
        }, 1000)
      }).then(res => {
        commit('setCategoryList', res)
      })
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.amount, 0)
    },
    getCategoryList: state => state.categoryList
  }
})
