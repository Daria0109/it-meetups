import {useContext} from 'react';
import FavoritesContext from "../store/favorites-contex";
import {MeetupsList} from "../components/MeetupsList/MeetupsList";

export const FavoritesPage = () => {
  const favoritesCtx = useContext(FavoritesContext)
  const {favorites} = favoritesCtx;

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  } else {
    content = <MeetupsList meetups={favorites}/>
  }

  return <section>
    <h1>My Favorites</h1>
    {content}
  </section>
}