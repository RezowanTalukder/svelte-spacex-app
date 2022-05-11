import { writable } from 'svelte/store';

export const launches = writable([]);
let loaded = false;


export const getLaunches = async () => {
	if (loaded) return;
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
	loaded = true;
}
