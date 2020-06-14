export default ({$axios, store}) => {
  $axios.onRequest(config => {
    config.headers.common['x-csrf-token'] = store.state.csrfToken
    console.log(config.headers);
  })
}