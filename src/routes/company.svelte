<script>
	import { companies, getCompanies } from '../spacex-store';
	import CompanyInfoCard from '../components/CompanyInfoCard.svelte';
	var company;
	getCompanies();

	$: {
		company = $companies;
	}
</script>

<svelte:head>
	<title>Company Info</title>
</svelte:head>

<div class="max-w-full mx-auto">
	<CompanyInfoCard {company} />
</div>
