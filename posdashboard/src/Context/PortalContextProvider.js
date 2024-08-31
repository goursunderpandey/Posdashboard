import React, { createContext } from "react";

const portalContext = createContext();

const PortalContextProvider = ({ children }) => {
    return (
        <portalContext.Provider value={{}}>
            {children}
        </portalContext.Provider>
    );
}


export default PortalContextProvider;
