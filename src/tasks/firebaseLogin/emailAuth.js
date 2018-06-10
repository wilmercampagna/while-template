import firebase from 'firebase'

function emailAuth () {
  firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
    (user) => {
      this.$router.replace('home')
    },
    function (err) {
      alert('Ops' + err.message)
    }
  )
}

export default emailAuth
