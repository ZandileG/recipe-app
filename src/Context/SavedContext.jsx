import React, { createContext, useEffect, useState } from "react";

export const SavedContext = createContext();

function SavedProvider({ children }) {

  
return (
  <SavedContext.Provider value={{}}>
    {children}
  </SavedContext.Provider>
 ); 
}

export default SavedProvider;