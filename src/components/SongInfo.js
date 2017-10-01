import React from 'react'

const SongInfo = ({song}) => 
    <section>
      <h1>{song.title}</h1>
      <h2>{song.author}</h2>      
    </section>

export default SongInfo