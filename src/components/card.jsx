import React from 'react';

const Card = ({ id, avatarUrl, name, reposNum, reposUrl, setFavoriteHandler, remove }) => {
    return (
        <div>
            <div key={id} className="row justify-content-center m-5">
                <div className="card col-8">
                    <div className="card-body">
                        <img className="card-img-top" src={avatarUrl} alt={name} />
                        <h5 className="card-title text-center">{name}</h5>
                        <p className="card-text text-center">Total Repos: {reposNum}</p>
                        <a href="#" className="card-link" onClick={() => remove(id)}>Delete</a>
                        <a href="#" className="card-link" onClick={() => setFavoriteHandler(reposUrl)}>Pin top 3 repo's to nav</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;