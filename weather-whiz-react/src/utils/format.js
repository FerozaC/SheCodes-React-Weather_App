export function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][date.getDay()];
  
    if (minutes < 10) minutes = `0${minutes}`;
  
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  
    return `${day} ${hours}:${minutes} ${period}`;
  }
  
  export function formatDay(timestamp) {
    const date = new Date(timestamp * 1000);
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()];
  }
  