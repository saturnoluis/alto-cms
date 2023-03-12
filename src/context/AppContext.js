import { createContext } from 'react';

const AppContext = createContext({
    loading: true,
    posts: [],
});

export default AppContext;
