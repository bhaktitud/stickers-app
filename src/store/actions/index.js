import axios from 'axios';

export const SET_DATA_LIST = 'SET_DATA_LIST';

const baseURL = `http://api.giphy.com/v1/stickers/search`;
API_KEY = 'RzPi4sW6PchNjUZ6iMcfGlPMwefrKQni'

export const fetchDataList = (text) => {
    console.log(text)
    return (dispatch) => {
        axios
            .get(`${baseURL}?api_key=${API_KEY}&q=${text}`)
            .then(({ data }) => {
                dispatch(setData(data.data))
                // console.log(data.data)
            }).catch((err) => {
                console.log(err)
            });
    }
}

export const setData = (list) => {
    return {
        type: SET_DATA_LIST,
        payload: list
    }
}