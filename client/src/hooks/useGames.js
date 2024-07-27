import { useEffect, useState } from 'react';
import gamesAPI from '../../src/api/games-api';
import gamesApi from '../../src/api/games-api';

export function useGetAllGames() {
const [games, setGames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await gamesAPI.getAll()
            setGames(result);
        })();
    }, []);

    return games
}

export function useGetOneGames(gameId) {
    const [game, setGame] = useState({}); 

    useEffect(() => {
        (async () => {
            const result = await gamesApi.getOne(gameId)

            setGame(result);
        })();
    }, [gameId])

    return [
        game,
        setGame,
    ]
}