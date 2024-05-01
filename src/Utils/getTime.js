import { DateTime } from "luxon"

function getTime(timestamp, offset) {
  const dateTime = DateTime.fromSeconds(timestamp).plus({ seconds: offset })
  const formattedTime = dateTime.toFormat("HH:mm")

  return formattedTime
}

export default getTime
