export const createProject = (project) => {
    return(dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            ...project,
            authorId: authorId,
            authorFirstname: profile.firstname,
            authorLastname: profile.lastname,
            createdAt: new Date()
        }).then(()=>{
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });
    };
}