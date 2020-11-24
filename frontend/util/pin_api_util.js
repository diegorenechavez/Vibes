export const fetchAllPins= () =>{
   return $.ajax({
        url:"/api/pins",
        method: "GET"
    });

}

export const fetchUsersPins = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/pins`,
    method: `GET`
  });
};

export const fetchPin= (pinId) =>{
   return $.ajax({
        url:`/api/pins/${pinId}`,
        method: "GET"
    });

};

export const createPin = (pin, userId) =>{
   
    return $.ajax({
      url: `/api/users/${userId}/pins`,
      method: "POST",
      data: pin, userId,
      contentType: false,
      processData: false,
    });
};


export const deletePin = (pinId) => {
  return $.ajax({
    url: `/api/users/${userId}/pins/${pinId}`,
    method: `DELETE`
  });
};

export const saveToBoard = (board_pin) => {
    return $.ajax( {
      url: `/api/board_pins`,
      method:`POST`,
      data: {board_pin}
      
    });
};