import { DateTime } from "luxon"

function getTime(timestamp, offset) {
  const dateTime = DateTime.fromSeconds(timestamp).plus({ seconds: offset });
  const formattedTime = dateTime.toFormat('HH:mm');

  return formattedTime;
}
 
export default getTime

// const date = new Date((timestamp + (offset)) * 1000)
    // const hours = date.getHours()
    // const minutes = date.getMinutes()

    // const formattedHours = hours < 10 ? `0${hours}` : hours
    // const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

    // const formattedTime = `${formattedHours}:${formattedMinutes}`

    // return formattedTime