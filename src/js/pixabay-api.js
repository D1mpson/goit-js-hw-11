import axios from 'axios';

const pixabay = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '55276537-fb8dc5fad44054a48b25df817',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,

    }
});

export async function getImagesByQuery(query) {
    const response = await pixabay.get('/', {
        params: {
            q: query
        }
    });
    return response.data;
}