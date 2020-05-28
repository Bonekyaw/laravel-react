import React from 'react';

const AppContainer = ({title,children}) => {
    return (
        <div >
            <div className="card">
                <h4 className="card-header">
                    {title}
                </h4>
                <div className="card-body">
                    {children}
                </div>
            </div>        
        </div>
    );
}

export default AppContainer;
