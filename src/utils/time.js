export function getTime(time) {
    let dateObj = new Date(time);
    let year = dateObj.getFullYear()
    let month = dateObj.getMonth() + 1;
    let strDate = dateObj.getDate();
    let hours = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();

    return year + '-' + month + '-' + strDate + ' ' + hours + ":" + minutes + ":" + seconds;
}

export default {
    getTime
}