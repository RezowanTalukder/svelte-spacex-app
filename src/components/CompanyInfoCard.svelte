<script>
	export let company;
</script>

<section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
	<div
		class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16"
	>
		<div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
			<h2
				class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl"
			>
				{company.name}
			</h2>
			<p class="text-gray-500">
				{company.address}, {company.city}, {company.state}
			</p>
			<p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
				{company.summary}
			</p>
			<a
				class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
				href={company.website}
				alt="company web link"
			>
				Website
			</a>

			<a
				class="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 mx-2 px-4 rounded"
				href={company.twitter}
				alt="company twitter link"
			>
				Twitter
			</a>
			<a
				class="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
				href={company.elon_twitter}
				alt="Elon Twitter link"
			>
				Elon Twitter
			</a>
		</div>
		<div
			class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2"
		>
			<img
				src="https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"
				class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32 rounded-md"
				alt="space-x logo"
			/>
		</div>
	</div>
</section>
