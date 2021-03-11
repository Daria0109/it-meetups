import {useContext} from 'react'
import classes from './MeetupItem.module.css'
import {Card} from "../ui/Card/Card";
import FavoritesContext from "../../store/favorites-contex";


export const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext)
  const isFavoriteMeetup = favoritesCtx.isFavorite(props.id)

  const toggleFavoriteStatusHandler = () => {
    if (isFavoriteMeetup) {
      favoritesCtx.removeFavorite(props.id)
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description
      })
    }
  }

  return <li className={classes.item}>
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title}/>
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler}>
          {isFavoriteMeetup ? 'Remove from Favorites' : 'To Favorites'}
        </button>
      </div>
    </Card>
  </li>
}