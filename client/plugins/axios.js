export default ({$axios, store}) => {
  $axios.onRequest(config => {
    config.headers.common['X-CSRF-TOKEN'] = store.state.csrfToken
  })
}