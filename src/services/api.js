const BASE_URL = process.env.REACT_APP_BASE_URL || "https://instadpbackendapiv1.onrender.com/api/v1"

export const getProfileEndPoint = {
    profileApi : BASE_URL + "/getdetails"
}
