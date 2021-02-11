import moment from "moment";


export const getAccessToken=()=>{
  return localStorage.getItem("access-token")
}

export const getClient=()=>{
  return localStorage.getItem("client")
}

export const getUID=()=>{
  return localStorage.getItem("uid")
}

export const getTime=(time)=>{
  time = moment(time).format("lll")
  return time;
}