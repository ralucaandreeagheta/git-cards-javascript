import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "./components/card";
import Nav from "./components/nav";

const App = () => {
    const [gitUser, setGitUser] = useState("")
    const [cardList, setCardList] = useState([])
    const [favoriteRepoList, setFavoriteRepoList] = useState([])
    const [error, setError] = useState("")

    const url = "https://api.github.com/users/";

    const addNewUser = async () => {
        let response = await fetch(url + `${gitUser}`);
        let user = await response.json();

        let alreadyExists = false;
        for (let i = 0; i < cardList.length; i++) {
            if (cardList[i].id === user.id) {
                alreadyExists = true;
            }
        }
        if (!alreadyExists) {
            setCardList([...cardList, user]);
        }
    }

    const remove = (id) => {
        const cards = cardList.filter((item) => item.id !== id);
        setCardList(cards)
    }

    const setFavoriteRepo = async (url) => {
        let repos = await fetch(url) //response
        if (repos.status == 200) {
            let repoList = await repos.json()
            let result = [];
            for (let i = 0; i < 3 && i < repoList.length; i++) {
                result.push(repoList[i])
            } setFavoriteRepoList(result)
        }
    }

    return (
        <div>
            <Nav favoriteRepoList={favoriteRepoList} />

            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <input placeholder="enter github username" value={gitUser} onChange={e => setGitUser(e.target.value)} />
                        <button onClick={addNewUser}>Add new user</button>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-6">
                        {error ? error : ""}
                    </div>
                </div>
                {cardList.map((card) => (
                    <Card
                        setFavoriteHandler={setFavoriteRepo}
                        key={card.id}
                        id={card.id}
                        avatarUrl={card.avatar_url}
                        name={card.name}
                        reposNum={card.public_repos}
                        reposUrl={card.repos_url}
                        remove={remove} />
                ))}
            </div>
        </div>
    )
};

export default App;
