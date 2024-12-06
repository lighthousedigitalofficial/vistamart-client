/* eslint-disable no-undef */

// const keys = {
//     BUCKET_URL: process.env.VITE_BUCKET_URL,
//     BASE_URL: process.env.VITE_BASE_URL,
//     DEFAULT_IMG: process.env.VITE_DEFAULT_IMG,
// }

const keys = {
    BUCKET_URL: import.meta.env.VITE_BUCKET_URL,
    BASE_URL: import.meta.env.VITE_BASE_URL,
    DEFAULT_IMG: import.meta.env.VITE_DEFAULT_IMG,
}

export default keys
