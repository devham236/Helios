function getSectors(degrees) {
    return degrees > 337.5 ? 'N' :
           degrees > 292.5 ? 'NW' : 
           degrees > 247.5 ? 'W' :
           degrees > 202.5 ? 'SW' :
           degrees > 157.5 ? 'S' :
           degrees > 122.5 ? 'SE' :
           degrees > 67.5 ? 'E' :
           degrees > 22.5 ? 'NE' :
           "N"
}

export default getSectors