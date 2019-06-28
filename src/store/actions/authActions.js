export const signIn = (credentials) => {
    return (dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();
        
        firebase.auth().signInWithEmailAndPassword(
            credentials.email[0],
            credentials.password[0]
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err})
        });
    } 
}

export const signOut = () => {
    return(dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();


        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser) => {
    return(dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email[0],
            newUser.password[0]
        ).then((res)=>{
            return firestore.collection('users').doc(res.user.uid).set({
                firstName:newUser.firstName[0],
                lastName:newUser.lastName[0],
                initials:newUser.firstName[0].charAt(0) + newUser.lastName[0].charAt(0)
            })
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch(err=> {
            dispatch({type:'SIGNUP_ERROR',err})
        })
    }
}