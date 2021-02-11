
import { postMethodRoute, getMethodRoute, putMethodRoute } from '../axiosConfig/actionCall';

// Action types
const CREATE_DELIVERY_BOY = "CREATE_DELIVERY_BOY"
const CUSTOMERS_LIST = "CUSTOMERS_LIST"
const TRANSACTIONS = "TRANSACTIONS"
const GAME = "GAME"
const VENDORS = "VENDORS"
const EXPORTS = "EXPORTS"
const SETTLEMENTS = "SETTLEMENTS"
const CATEGORIES = "CATEGORIES"
const EMPLOYEES = "EMPLOYEES"
const CITIES = "CITIES"
const BRANDS = "BRANDS"
const DELIVERY_BOYS = "DELIVERY_BOYS"
const BATCHES = "BATCHES"


// Urls
const CREATE_DELIVERY_BOY_URL = "/admin/delivery_boys" 
const CUSTOMERS_LIST_URL = "/admin/customers" 
const GAME_URL = "/games" 
const TRANSACTIONS_URL = "/admin/transactions" 
const VENDORS_URL = "/admin/vendors" 
const BRANDS_URL = "/admin/brands" 
const CITIES_URL = "/admin/cities" 
const EMPLOYEES_URL = "/admin/employees" 
const DELIVERY_BOYS_URL = "/admin/delivery_boys" 
const CATEGORIES_URL = "/admin/categories" 
const SETTLEMENTS_URL = "/admin/settlements" 
const EXPORTS_URL = "/admin/exports" 
const BULK_UPLOAD="/admin/customers/bulk_upload"
const BATCH_URL="/admin/batches"



export const createDeliveryBoy = (data)=>{
  return async dispatch => {
    const response = await postMethodRoute(
      CREATE_DELIVERY_BOY_URL,
      CREATE_DELIVERY_BOY,
      "deliveryBoyRes",
      data,
      // true
    );
    dispatch(response);
  };

}


export const createNewGame = (data)=>{
  alert("in service")
  return async dispatch => {
    const response = await postMethodRoute(
      GAME_URL,
      GAME,
      "newGameRes",
      data,
    );
    console.log(response);
    dispatch(response);
  };
}

export const getBatches = (type,page)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      BATCH_URL+`?page=${page}&batch_type=${type}`,
      BATCHES,
      "batchRes"
    );
    dispatch(response);
  };
}

export const editDeliveryBoy = (data,id)=>{
  return async dispatch => {
    const response = await putMethodRoute(
      CREATE_DELIVERY_BOY_URL+"/"+id,
      CREATE_DELIVERY_BOY,
      "deliveryBoyRes",
      data,
      // true
    );
    dispatch(response);
  };

}

export const createCustomer = (data)=>{
  
  return async dispatch => {
    const response = await postMethodRoute(
      CUSTOMERS_LIST_URL,
      CUSTOMERS_LIST,
      "createCustomerRes",
      data,
      false
    );
    dispatch(response);
  };

}

export const createBulk = (data,key)=>{
  
  return async dispatch => {
    const response = await postMethodRoute(
      BULK_UPLOAD,
      CUSTOMERS_LIST,
      key,
      data,
      true
    );
    dispatch(response);
  };

}


export const editCustomer = (data,id)=>{
  console.log(data)
  return async dispatch => {
    const response = await putMethodRoute(
      CUSTOMERS_LIST_URL+`/${id}`,
      CUSTOMERS_LIST,
      "editCustomerRes",
      data,
      false
    );
    dispatch(response);
  };

}

export const createVendors = (data)=>{
  return async dispatch => {
    const response = await postMethodRoute(
      VENDORS_URL,
      VENDORS,
      "createVendorRes",
      data,
      true
    );
    dispatch(response);
  };

}

export const editVendor = (data)=>{
  return async dispatch => {
    const response = await putMethodRoute(
      VENDORS_URL,
      VENDORS,
      "editVendorRes",
      data,
      false
    );
    dispatch(response);
  };

}



export const getEmps = ()=>{
  return async dispatch => {
    const response = await getMethodRoute(
      EMPLOYEES_URL,
      EMPLOYEES,
      "empsRes",
    );
    dispatch(response);
  };
}

export const getBrands = ()=>{
  return async dispatch => {
    const response = await getMethodRoute(
      BRANDS_URL,
      BRANDS,
      "brandsRes",
    );
    dispatch(response);
  };
}

export const getCities = ()=>{
  return async dispatch => {
    const response = await getMethodRoute(
      CITIES_URL,
      CITIES,
      "citiesRes",
    );
    dispatch(response);
  };
}

export const getExports = ()=>{
  return async dispatch => {
    const response = await getMethodRoute(
      EXPORTS_URL,
      EXPORTS,
      "exportsRes",
    );
    dispatch(response);
  };
}

export const getSettlements = ()=>{
  return async dispatch => {
    const response = await getMethodRoute(
      SETTLEMENTS_URL,
      SETTLEMENTS,
      "settlmentsRes",
    );
    dispatch(response);
  };
}


export const getCategoires = ()=>{
  return async dispatch => {
    const response = await getMethodRoute(
      CATEGORIES_URL,
      CATEGORIES,
      "categoriesRes",
    );
    dispatch(response);
  };
}

export const getCustomers = (page)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      CUSTOMERS_LIST_URL+`?page=${page}`,
      CUSTOMERS_LIST,
      "customersRes",
    );
    dispatch(response);
  };

}

export const getCustomersBySearch = (name,page,category)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      CUSTOMERS_LIST_URL+`?page=${page}&search=${name}&category_id=${category}`,
      CUSTOMERS_LIST,
      "customersRes",
    );
    dispatch(response);
  };
}

export const getCustomersByCategory = (id,page)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      CUSTOMERS_LIST_URL+`?page=${page}&category_id=${id}`,
      CUSTOMERS_LIST,
      "customersRes",
    );
    dispatch(response);
  };
}

export const getCustomersByVendorId = (id,page,category)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      CUSTOMERS_LIST_URL+`?page=${page}&vendor_id=${id}&category_id=${category}`,
      CUSTOMERS_LIST,
      "customersRes",
    );
    dispatch(response);
  };

}

export const getCustomerById = (id)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      CUSTOMERS_LIST_URL+"/"+id,
      CUSTOMERS_LIST,
      "customersIdRes",
    );
    dispatch(response);
  };

}

export const getTransactions = (page)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      TRANSACTIONS_URL+`?page=${page}`,
      TRANSACTIONS,
      "transactionsRes",
    );
    dispatch(response);
  };

}

// export const createNewGame = ()=>{
//   return async dispatch => {
//     const response = await getMethodRoute(
//       DASHBOARD_URL,
//       DASHBOARD,
//       "dashboardRes",
//     );
//     dispatch(response);
//   };
// }

export const getVendors = (page)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      VENDORS_URL+`?page=${page}`,
      VENDORS,
      "vendorsRes",
    );
    dispatch(response);
  };
}

export const getVendorsBySearch = (name,page)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      VENDORS_URL+`?page=${page}&search=${name}`,
      VENDORS,
      "vendorsRes",
    );
    dispatch(response);
  };
}



export const getVendorById = (id)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      VENDORS_URL+"/"+id,
      VENDORS,
      "vendorsIdRes",
    );
    dispatch(response);
  };
}

export const getDeliveryBoys = (page)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      DELIVERY_BOYS_URL+"?page="+page,
      DELIVERY_BOYS,
      "deliveryBoysRes",
    );
    dispatch(response);
  };
}

export const getDeliveryBoysByVendorId = (id,page)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      DELIVERY_BOYS_URL+"?vendor_id="+id+"&page="+page,
      DELIVERY_BOYS,
      "deliveryBoysRes",
    );
    dispatch(response);
  };
}

export const getDeliveryBoysByName = (name,page)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      DELIVERY_BOYS_URL+"?search="+name+"&page="+page,
      DELIVERY_BOYS,
      "deliveryBoysRes",
    );
    dispatch(response);
  };
}

export const getDeliveryBoysByCategories = (name,page)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      DELIVERY_BOYS_URL+"?category_id="+name+"&page="+page,
      DELIVERY_BOYS,
      "deliveryBoysRes",
    );
    dispatch(response);
  };
}

export const getDeliveryBoyById = (id)=>{
  return async dispatch => {
    const response = await getMethodRoute(
      DELIVERY_BOYS_URL+"/"+id,
      DELIVERY_BOYS,
      "deliverBoyIdRes",
    );
    dispatch(response);
  };
}


export const clearKey = (key)=>{
  return dispatch => dispatch({
    type:"CLEAR_KEY",
    key,
    payload:{}
  });
}

