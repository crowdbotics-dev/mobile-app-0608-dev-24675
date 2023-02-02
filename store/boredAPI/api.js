import axios from "axios"
const boredAPI = axios.create({
  baseURL: "http://www.boredapi.com/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function boredapi20_get_activity_read(payload) {
  return boredAPI.get(`/activity`, {
    params: {
      participants: payload.participants,
      price: payload.price,
      minprice: payload.minprice,
      maxprice: payload.maxprice
    }
  })
}
export const apiService = { boredapi20_get_activity_read }
