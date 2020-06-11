export default ({ store, redirect }) => {
  if(!store.state.auth.loggedIn ) {
    if (process.server) return redirect('/orders')
    return redirect('/login')
  }
}