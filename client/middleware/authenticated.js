export default ({ store, redirect }) => {
  if(process.server) {
    return redirect('/orders')
  }
  if(!store.state.auth.loggedIn) {
    return redirect('/login')
  }
}