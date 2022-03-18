const state = {
    user: {
        loggedIn: false,
        isSubscribed: false,
    },
    token: localStorage.getItem('token' || '')
}
const action = {}
const mutations = {}
const getters = {
    auth(state) {
        return state.user
    },
    loggedIn(state) {
        return state.token == null
    }
}
export default {
    namespaced: true,
    state,
    action,
    mutations,
    getters,
}
