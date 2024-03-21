<script>
	const showcase_2 = [
		{
			heading: 'Quality Talent Hiring',
			points: [
				'With Setu, establish a center of excellence for skill development and knowledge dissemination.',
				'Utilize the SETU Codeverse platform for hackathon-based hiring to identify and recruit top talent efficiently.',
				'Access pre-trained and pre-evaluated talent at zero cost through SETU Codeverse, streamlining the hiring process and reducing recruitment expenses.'
			],
			cta_text: 'Share your requirements',
			img: '/images/handshake.png'
		},
		{
			heading: 'Relevance and Skilling',
			points: [
				'SETU Codeverse integrates a proprietary platform with real-industry use cases for practical skill development.',
				'This unique combination provides hands-on experience and contextually relevant learning opportunities.',
				'By bridging theoretical knowledge with practical application, SETU Codeverse effectively trains and upskills hires to excel in real-world scenarios.'
			],
			cta_text: 'Unlock Potential',
			img: '/images/laptop-guy.png'
		},
		{
			heading: 'Holistic Assessment',
			points: [
				'With SETU Codeverse assessments, organizations can make informed decisions regarding talent acquisition, training, and professional development strategies.',
				'Our assessment framework covers 8 technical skills and 5 key attitudinal attributes essential today\'s dynamic work environment.'
			],
			cta_text: 'Assess your team talent',
			img: '/images/graph.png'
		},
	]
</script>

<section id="showcase-2">
	<ul class="space-y-10 [&>li:not(:nth-child(2))]:bg-brand-grey lg:[&>li:nth-child(2)>div]:flex-row-reverse">
		{#each showcase_2 as {cta_text, heading, img, points}}
			<li class="layout-content">
				<div class="flex flex-col-reverse lg:flex-row justify-between gap-12 items-center py-6">
					<div class="space-y-6 flex-1">
						<p class="text-3xl font-semibold">{heading}</p>
						<ul class="space-y-4">
							{#each points as point}
								<li class="list-disc list-inside">{point}</li>
							{/each}
						</ul>
						<a href="#_" role="button" class="w-fit">{cta_text}</a>
					</div>
					<div class="w-full lg:w-[480px] aspect-video">
						<img src={img} alt="" />
					</div>
				</div>
			</li>
		{/each}
	</ul>
</section>
