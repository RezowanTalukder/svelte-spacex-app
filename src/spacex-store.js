import { writable } from 'svelte/store';

export const launches = writable([]);
export const companies = writable([]);
export const launchpads = writable([]);
let launchLoaded = false;
let launchpadsLoaded = false;
let companyLoaded = false;
const launchpadDetails = {};

export const getLaunches = async () => {
	if (launchLoaded) return;
	const resLaunches = await fetch('https://api.spacexdata.com/v4/launches');
	const launchesData = await resLaunches.json();
	if (resLaunches.status !== 200) {
		return {
			message: 'Error Getting Launches',
		};
	}
	let loadedLaunches = launchesData.map((launch) => {
		let img;
		if (launch.links.patch.small === null)
			img =
				'https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg';

		return {
			name: launch.name,
			image: launch.links.patch.small || img,
			rocket: launch.rocket,
			details: launch.details,
			date_local: launch.date_local
		};
	});
	launches.set(loadedLaunches);
	launchLoaded = true;
}


export const getCompanies = async () => {
	if (companyLoaded) return;
	const resCompanies = await fetch('https://api.spacexdata.com/v4/company');
	const companyData = await resCompanies.json();
	if (resCompanies.status !== 200) {
		return {
			message: 'Error Getting Company Info',
		};
	}
	var companyInfo = {
		name: companyData.name,
		summary: companyData.summary,
		address: companyData.headquarters.address,
		city: companyData.headquarters.city,
		state: companyData.headquarters.state,
		website: companyData.links.website,
		twitter: companyData.links.twitter,
		elon_twitter: companyData.links.elon_twitter
	}
	// @ts-ignore
	companies.set(companyInfo);
	companyLoaded = true;
}


export const getLaunchPads = async () => {
	if (launchpadsLoaded) return;
	const resLaunchPads = await fetch('https://api.spacexdata.com/v4/launchpads');
	const launchPadData = await resLaunchPads.json();
	if (resLaunchPads.status !== 200) {
		return {
			message: 'Error Getting Company Info',
		};
	}
	let loadedLaunchepads = launchPadData.map((launchpad) => {
		return {
			id: launchpad.id,
			name: launchpad.name,
			full_name: launchpad.full_name,
			region: launchpad.region,
			status: launchpad.status
		}
	});
	// @ts-ignore
	launchpads.set(loadedLaunchepads);
	launchpadsLoaded = true;
}


export const getLaunchpadByID = async (id) => {

	if (launchpadDetails[id]) {
		return {
			name: launchpadDetails[id].name,
			latitude: launchpadDetails[id].latitude,
			longitude: launchpadDetails[id].longitude,
		};
	}

	try {
		const url = `https://api.spacexdata.com/v4/launchpads/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		launchpadDetails[id] = data;
		return {
			name: data.name,
			latitude: data.latitude,
			longitude: data.longitude,
		};
	} catch (err) {
		console.error(err);
		return null;
	}
}