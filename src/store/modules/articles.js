import axios from 'axios'

const state = {
    articles: []
}

const getters = {
  articles (state) {
    return state.articles
  }
}

const mutations = {
  setArticles (state, articlesData) {
    articlesData.forEach(article => {
      state.articles.push(article)
    })
  },
  addArticle (state, articleData) {
    state.articles.push({
      id: articleData.id, 
      title: articleData.title, 
      teaser: articleData.teaser,
      description: articleData.description,
      published: articleData.published,
      featured: articleData.featured
    })
  },
  updateArticle (state, articleData) {
    const article = state.articles.find(item => item.id === articleData.id)
    state.articles.splice(state.articles.indexOf(article), 1, articleData)
  }
}

const actions = {
  getArticles ({commit}) {
    axios.get('api/posts')
    .then(res =>  commit('setArticles', res.data))
  }, 
  addArticle ({commit}, articleData) {
    axios.post('api/posts', {
      title: articleData.title, 
      teaser: articleData.teaser,
      description: articleData.description,
      published: articleData.published,
      featured: articleData.featured
    })
      .then(res => {
        commit('addArticle', {
          id: res.data.id,
          title: articleData.title, 
          teaser: articleData.teaser,
          description: articleData.description,
          published: articleData.published,
          featured: articleData.featured
        })
      })
      .catch(error => {
        if (error) {
          this.setError(error, "Une erreur s'est produite")
        }
      })
  },
  updateArticle ({commit}, articleData) {
    axios.patch(`/api/posts/${articleData.id}`, articleData)
      .then(() => {
        commit('updateArticle', articleData)
      })
      .catch(error => {
        console.log(error)
        if (error) {
          this.setError(error, "Une erreur s'est produite")
        }
      })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}