import React, { createContext } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const authInfo = {
        name: 'nodi sagor khal bill'
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part who will have access to this context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


/**
 * 1. create context with null as a default
 * 2. create provider
 * 3. set a value with something (authInfo)
 * 4.[attention please]
 * 5.use the auth provider in the  main.jsx 
 * 6. access the children inside the authProvider in the main.jsx 
 */