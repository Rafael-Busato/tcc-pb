import { create } from 'apisauce';

const api = create ({
    baseURL: 'https://localhost:3000',
})

api.addAsyncResponseTransform(response => {
    if (!response.ok) throw response;
});

export default api;