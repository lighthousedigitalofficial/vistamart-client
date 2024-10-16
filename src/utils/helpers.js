import axios from "axios";
import { BASE_URL } from "../redux/constants";

// Function to get a pre-signed upload URL
export const getUploadUrl = async (type) => {
	try {
		const fileType = type.split("/")[1];
		const response = await axios.get(
			`${BASE_URL}/image/upload?fileType=${fileType}`
		);
		return response.data; // Contains the URL and the key for S3 storage
	} catch (error) {
		console.error("Error fetching upload URL: ", error);
		throw new Error("Failed to get upload URL");
	}
};

// Function to upload an image to S3
export const uploadImageToS3 = async (uploadUrl, file) => {
	try {
		await axios.put(uploadUrl, file, {
			headers: {
				"Content-Type": file.type,
			},
		});
	} catch (error) {
		console.error("Error uploading image to S3: ", error);
		throw new Error("Failed to upload image to S3");
	}
};

export const deleteUploadedImages = async (keys) => {
	try {
		await axios.delete(`${BASE_URL}/image/delete-images`, { data: { keys } });
	} catch (error) {
		console.error("Error deleting images from S3: ", error);
		throw new Error("Failed to delete images from S3");
	}
};
