<script>

	const stories = [
		'350 + Data professionals trained',
		'10X + proven ROI for companies'
	]
</script>
<section id="success-stories" class="layout-content space-y-6">
	<h1>Success Stories</h1>

	<div class="flex flex-col lg:flex-row gap-6">
		{#each stories as story}
			<article class="py-4 px-6 bg-brand-grey rounded text-lg font-semibold">{story}</article>
		{/each}
	</div>
</section>