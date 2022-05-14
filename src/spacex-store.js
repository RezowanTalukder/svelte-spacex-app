import { writable } from 'svelte/store';

export const launches = writable([]);
export const companies = writable([]);
let launchLoaded = false;
let companyLoaded = false;


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
