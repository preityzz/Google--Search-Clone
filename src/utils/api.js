import axios from "axios";

const  BASE_URL =" https://www.googleapis.com/customsearch/v1"

const params ={

    key:'AIzaSyBz9JYVGehkUqBXDACLbAx-u-eSLs1QDuM',
    cx:'14839260ef17c41e1'
}


export const fetchDataFromApi = async (payload) => {

    const { data } = await axios.get(BASE_URL,{
        params: {...params,...payload}
    });
    return data;
};
