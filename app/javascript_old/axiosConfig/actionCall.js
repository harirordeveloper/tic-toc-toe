import axios from 'axios';

const resReturn = (res,key,type) =>{
  if (res && res.data) {
    return {
      type: `${type}`,
      payload: {
        success:true,
        ...res.data,
        isFetching: false
      },
      key
    };
  } 
    return {
      type: `${type}`,
      payload: {
        success:true,
        ...(res.data ? res.data : []),
        isFetching: false
      },
      key,
    };
}

export const postMethodRoute = async (route, type,key, data, formData) => {
  try {
    let res;
    console.log(formData);
    alert("hell");
    if (formData) {
      res = await axios.post(route, data, {
        config: { headers: { "Content-Type": "multipart/form-data" } }
      });
    } else {
      res = await axios.post(route, data);
    }
    return resReturn(res,key,type)
    
  } catch (err) {
    // if (extractErrorMessage(err)) message = extractErrorMessage(err);

    return {
      type: `${type}`,
      payload: {
        success:false,
        ...(err && err.response && err.response.data),
        isFetching: false
      },
      key
    };
  }
};


export const getMethodRoute = async (route, type,key) => {
  try {
    let res = await axios.get(route);
    return resReturn(res,key,type)
  } catch (err) {
    return {
      type: `${type}`,
      payload: {
        success:false,
        ...(err && err.response && err.response.data),
        isFetching: false
      },
      key
    };
  }
};

export const putMethodRoute = async (route, type,key, data, formData) => {
  try {
    let res;
    if (formData) {
      res = await axios.put(route, data, {
        config: { headers: { "Content-Type": "multipart/form-data" } }
      });
    } else {
      res = await axios.put(route, data);
    }
    return resReturn(res,key,type)
    
  } catch (err) {
    // if (extractErrorMessage(err)) message = extractErrorMessage(err);

    return {
      type: `${type}`,
      payload: {
        success:false,
        ...(err && err.response && err.response.data),
        isFetching: false
      },
      key
    };
  }
};

