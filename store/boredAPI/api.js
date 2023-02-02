import axios from "axios"
const boredAPI = axios.create({
  baseURL: "https://www.boredapi.com/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function boredapi_get__read(payload) {
  return boredAPI.get(`/`)
}
export const apiService = { boredapi_get__read }
