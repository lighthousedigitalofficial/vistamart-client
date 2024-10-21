import axios from 'axios'
import keys from '../config/keys'

// Function to get a pre-signed upload URL
export const getUploadUrl = async (type, folder) => {
    try {
        const query = {
            fileType: type.split('/')[1],
            folder,
        }
        const response = await axios.get(`${keys.BASE_URL}/image/upload`, {
            params: query,
        })

        return response.data // Contains the URL and the key for S3 storage
    } catch (error) {
        console.error('Error fetching upload URL: ', error)
        throw new Error('Failed to get upload URL')
    }
}

// Function to upload an image to S3
export const uploadImageToS3 = async (uploadUrl, file) => {
    try {
        await axios.put(uploadUrl, file, {
            headers: {
                'Content-Type': file.type,
            },
        })
    } catch (error) {
        console.error('Error uploading image', error)
        throw new Error('Failed to upload image')
    }
}

export const deleteUploadedImages = async (keys) => {
    try {
        await axios.delete(`${keys.BASE_URL}/image/delete-images`, {
            data: { keys },
        })
    } catch (error) {
        console.error('Error deleting images', error)
        throw new Error('Failed to delete images')
    }
}

export const formatPrice = (value) => {
    return Number(value).toLocaleString('en-PK', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })
}
