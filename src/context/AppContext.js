import { createContext } from 'react';

const AppContext = createContext({
    loading: true,
    posts: [],
    getPostById: () => {}
});

export default AppContext;
