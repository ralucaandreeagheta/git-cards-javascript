import React from 'react';


function Nav({ favoriteRepoList }) {
    return (
        <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
            <div className="row bg-info">
                {favoriteRepoList.map(repo =>
                    <div className="col-4 text-center" key={repo.id}>{repo.name}</div>
                )}
            </div>
        </div>
    )
}

export default Nav