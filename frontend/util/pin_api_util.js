export const fetchAllPins= () =>{
   return $.ajax({
        url:"/api/pins",
        method: "GET"
    });

}

export const fetchPin= (pinId) =>{
   return $.ajax({
        url:`/api/pins/${pinId}`,
        method: "GET"
    });

}