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

async function insertAnimeModel(
    nome, 
    ano, 
    nota, 
    genero, 
    episodios, 
    imagem, 
    sinopse
    
){
    await connection.query(`
    INSERT INTO animes (
        nome, 
        ano, 
        nota, 
        genero, 
        episodios, 
        imagem, 
        sinopse
    ) VALUES (
        '${nome}',
        ${ano},
        ${nota},
       ' ${genero}',
        ${episodios},
        '${imagem}',
       ' ${sinopse}'
    )
    `)
    return;
    
}

async function getAllAnimeByNameModel(nome){
    const anime = await connection.query(
        `SELECT * FROM animes WHERE nome LIKE '${nome}'`
    )
}

module.exports = {
    getAllAnimesModel,
    getAnimeByIdModel,
    insertAnimeModel,
    getAllAnimeByNameModel
}