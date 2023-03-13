import { createContext } from 'react';

const AppContext = createContext({
    loading: true,
    posts: [],
    getPostById: () => {},
    setPostById: () => {},
});

export default AppContext;
