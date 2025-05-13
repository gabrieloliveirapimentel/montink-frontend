import axios from 'axios';

const api = axios.create({
    baseURL: 'https://viacep.com.br/ws',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',    
    }
})

export async function getCep(cep: string) {
    const response = api.get(`/${cep}/json/`)

    return response;
}