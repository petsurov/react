import React from 'react'

function AnimeCard({anime}) {
    return (
        <article className="anime-card" id="child">
            <a href={anime.url} target="_blank" rel="nereferrer">
                <figure>
                    <img src={anime.image_url} alt="Anime Image" />
                </figure>
                <h3>{anime.title}</h3>
            </a>
        </article>
    )
}

export default AnimeCard
