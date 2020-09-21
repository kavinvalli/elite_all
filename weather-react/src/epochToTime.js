export const epochToTime = (epoch) => {
    var date = new Date(epoch*1000);
    return date.toLocaleString('en-GB', { hour12:false } )
}