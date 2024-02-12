import axios from 'axios'
import { getCookie } from 'src/action/auth-action'
const accessToken = getCookie('jwt')
// export const addVisaDestination = (name) => {
//     return axios.post(`${API}/visa-destination/create`,
//     {name})
// }

export const listVisaDestination = async () => {
  return axios.get(`${process.env.NEXT_PUBLIC_API}/visa-destination`,{
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}

// export const countVisaDestination = async () => {
//     return axios.get(`${API}/visa-destination/count`)
// }
// export const deleteVisaDestination = (ids) => {
//     return axios.post(`${API}/visa-destination/remove`, { ids })
// }
// export const updateVisaDestination = (id, data) => {
//     return axios.put(`${API}/visa-destination/update/${id}`, data)
// }
