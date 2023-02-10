import { ABOUT, BLOG, BUYING, FAQ, HOME, MAKES, POSTBID, SELLING } from "./APIs";
import axios from "axios";

const getConfig = () => {
	return {
		headers: {
			'Content-Type': '*/*',
			Accept: '*/*',
			'X-Requested-With': 'XMLHttpRequest',
		},
	};
};

const handelGetHome = async () => {
	try {
		const res = await axios.get(`${HOME}`, getConfig())
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelGetMakes = async () => {
	try {
		const res = await axios.get(`${MAKES}`, getConfig())
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelPostBid = async (data: FormData) => {
	console.log(data);
	try {
		const res = await axios.post(`${POSTBID}`, data, getConfig())
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelGetBlofDetails = async (id: number) => {
	try {
		const res = await axios.get(`${BLOG}/${id}`, getConfig())
		return res.data
	} catch (error: any) {
		return null
	}
}


const handelGetBlog = async () => {
	try {
		const res = await axios.get(`${BLOG}`, getConfig())
		return res.data
	} catch (error: any) {
		return null
	}
}

const handelGetAbout = async () => {
	try {
		const res = await axios.get(`${ABOUT}`, getConfig())
		return res.data
	} catch (error: any) {
		return null
	}
}

const handelGetSelling = async () => {
	try {
		const res = await axios.get(`${SELLING}`, getConfig())
		return res.data
	} catch (error: any) {
		return null
	}
}

const handelGetBuying = async () => {
	try {
		const res = await axios.get(`${BUYING}`, getConfig())
		return res.data
	} catch (error: any) {
		return null
	}
}

const handelGetFaq = async () => {
	try {
		const res = await axios.get(`${FAQ}`, getConfig())
		return res.data
	} catch (error: any) {
		return null
	}
}

export { handelGetHome, handelGetMakes, handelPostBid, handelGetBlofDetails, handelGetBlog, handelGetAbout, handelGetSelling, handelGetBuying , handelGetFaq };