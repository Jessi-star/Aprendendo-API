const connection = require('./connection');

async function getAllAnimesModel() {
    const animes = await connection.query(
        'SELECT * FROM animes'
    )

    return animes.rows;
}

async function getAnimeByIdModel (id){
    const anime = await connection.query(
        `SELECT * FROM animes WHERE id = ${id}`
    )

    return anime.rows[0];
}

module.exports = {
    getAllAnimesModel,
    getAnimeByIdModel,
}