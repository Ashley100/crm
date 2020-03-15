import firebase from 'firebase/app'
import 'firebase/auth'


export default {
    actions: {
        async login ({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } 
            catch(e) {
                throw console.log(e)
            }
        }
    }
}