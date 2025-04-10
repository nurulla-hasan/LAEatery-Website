import React from 'react';

const HomeContainer = ({children}) => {
    return (
        <>
           <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-full xl:max-w-7xl">
            {children}
          </div> 
        </>
    );
};

export default HomeContainer;