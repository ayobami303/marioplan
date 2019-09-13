const initialState = {
    projects: [
        { id: 1, title: 'just a title', content: 'blah blas the nthsfv obasd' },
        { id: 2, title: 'just a title', content: 'blah blas the nthsfv obasd' },
        { id: 3, title: 'just a title', content: 'blah blas the nthsfv obasd' },
    ]
};

const projectReducer = (state = initialState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return { ...state };
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return { ...state };
        default:
            return { ...state };
    }
}

export default projectReducer;