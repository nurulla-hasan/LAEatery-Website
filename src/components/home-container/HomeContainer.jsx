import React from 'react';

const HomeContainer = ({children}) => {
    return (
        <>
           <div className="px-6 max-w-8/10 bg-green-800 mx-auto">
            {children}
          </div> 
        </>
    );
};

export default HomeContainer;