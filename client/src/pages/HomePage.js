import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTag } from '../actions';
import { AlbumsList } from '../components/AlbumsList';
import { Link } from 'react-router-dom'


export const HomePage = () => {
  const dispatch = useDispatch()

  const searchQuery = useSelector(state => state.query)
  const tags = useSelector(state => state.tags)
  const playlists = useSelector(state => state.playlists)

  const [albums, setAlbums] = useState({})

  useEffect(() => {
    if (searchQuery.length) {
      fetch(`https://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchQuery}&api_key=${process.env.REACT_APP_API_KEY}&limit=10&format=json`).then(res => res.json()).then(data => {
        let lastFmAlbums = data.results.albummatches.album;
        setAlbums(lastFmAlbums)
      })
    } else {
      fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${process.env.REACT_APP_LASTFM_USERNAME}&api_key=${process.env.REACT_APP_API_KEY}&period=6month&format=json`).then(res => res.json()).then(data => {
        let lastFmAlbums = data.topalbums?.album;
        setAlbums(lastFmAlbums.filter((album, i) => i === lastFmAlbums.indexOf(album)))
      })
    }


    Object.values(playlists).map(playlist => {
      playlist.map(album => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=album.gettoptags&artist=${album.artist.name || album.artist}&album=${album.name}&api_key=${process.env.REACT_APP_API_KEY}&format=json`).then(res => res.json()).then(data => {
          if (data.toptags.tag[0]) {
            dispatch(updateTag(data.toptags.tag[0].name))
          }
        })
        return album
      })
      return playlist
    })
  }, [searchQuery, dispatch, playlists]);


  return (
    <div>
      {
        localStorage.getItem('userData') && <div className="tags">
                <h4>Top tags</h4>
                {
                  tags.length ?
                  tags.map(tag =>
                     <Link to={{ pathname: `/albums/tags/${tag}` }} key={tag} style={{ textTransform: "none" }} className="btn-small btn-flat">{tag}</Link>)
                  : <p>here will be your top tags</p>
                }
              </div>
      }
      <AlbumsList albums={albums} playlists={playlists} />
    </div>
  );
}
