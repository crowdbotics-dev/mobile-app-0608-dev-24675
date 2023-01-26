import axios from "axios"
const mobileAppAPI = axios.create({
  baseURL: "/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return mobileAppAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return mobileAppAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_read(payload) {
  return mobileAppAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return mobileAppAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return mobileAppAPI.patch(`/rest-auth/user/`, payload.data)
}
function rest_auth_login_create(payload) {
  return mobileAppAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return mobileAppAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return mobileAppAPI.post(`/rest-auth/logout/`)
}
function rest_auth_registration_create(payload) {
  return mobileAppAPI.post(`/rest-auth/registration/`, payload.data)
}
function modules_articles_article_list(payload) {
  return mobileAppAPI.get(`/modules/articles/article/`)
}
function modules_articles_article_create(payload) {
  return mobileAppAPI.post(`/modules/articles/article/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return mobileAppAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return mobileAppAPI.post(`/rest-auth/password/change/`, payload.data)
}
function modules_articles_article_read(payload) {
  return mobileAppAPI.get(`/modules/articles/article/${payload.id}/`)
}
function modules_articles_article_update(payload) {
  return mobileAppAPI.put(
    `/modules/articles/article/${payload.id}/`,
    payload.data
  )
}
function modules_articles_article_partial_update(payload) {
  return mobileAppAPI.patch(
    `/modules/articles/article/${payload.id}/`,
    payload.data
  )
}
function modules_articles_article_delete(payload) {
  return mobileAppAPI.delete(`/modules/articles/article/${payload.id}/`)
}
function rest_auth_password_reset_confirm_create(payload) {
  return mobileAppAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return mobileAppAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_registration_create,
  modules_articles_article_list,
  modules_articles_article_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_articles_article_read,
  modules_articles_article_update,
  modules_articles_article_partial_update,
  modules_articles_article_delete,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
