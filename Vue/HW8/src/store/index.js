import { createStore } from 'vuex'
import HomePage from './modules/HomePage'
import BlogPage from './modules/BlogPage'
import ProjectPage from './modules/ProjectPage'
import CategoryPage from './modules/CategoryPage'
import ProjectDetails from './modules/ProjectDetails'

export default createStore({
  modules: {
    HomePage,
    BlogPage,
    ProjectPage,
    CategoryPage,
    ProjectDetails
  }
})
