import classes from './MeetupsList.module.css'
import {MeetupItem} from "../MeetupItem/MeetupItem";

export const MeetupsList = (props) => {
  return <ul className={classes.list}>
    {props.meetups.map(meetup => {
      return <MeetupItem key={meetup.id}
                         id={meetup.id}
                         image={meetup.image}
                         title={meetup.title}
                         address={meetup.address}
                         description={meetup.description}/>
    })}
  </ul>
}