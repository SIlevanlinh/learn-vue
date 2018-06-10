import stringFilter from './stringFilter'

export default {
     install(Vue) {
        Vue.filter('capitalize', stringFilter.capitalize),
        Vue.filter('uppercase', stringFilter.uppercase)
     }
}