import firebase from 'firebase'

function googleAuth () {
  const provider = new firebase.auth.GoogleAuthProvider()
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  firebase.auth().useDeviceLanguage()
  firebase.auth().signInWithPopup(provider).then(
    (result) => {
      this.user = result.user
      console.log(this.user)
      console.log(this.user.displayName)
      // var email = user.email
      // var emailVerified = user.emailVerified
      // var photoURL = user.photoURL
      // var uid = user.uid
      this.token = result.credential.accessToken
      this.$router.replace('home')
    }
  ).catch((error) => {
    alert('Ops' + error.code)
    alert('Ops' + error.message)
    alert('Ops' + error.email)
    alert('Ops' + error.credential)
  })
}

export default googleAuth
