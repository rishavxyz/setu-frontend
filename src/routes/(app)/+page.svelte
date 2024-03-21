<script lang="ts">
	import Home from "$lib/layouts/home"
</script>

<Home>
	<Home.Hero />
	<Home.About />
	<Home.Showcase />
	<section id="about-2" class="layout-content lg:text-center space-y-6 [&>:last-child]:max-w-2xl [&>:last-child]:mx-auto">
		<h1>Why top companies partner with SETU?</h1>
		<p>We bring a wealth of expertise and a proven track record in solving challenges. By partnering with Setu, you gain a reliable ally dedicated to your success, empowering you to navigate the ever-evolving landscape of technology and innovation with confidence.</p>
	</section>
	<Home.Banner />
	<Home.Feature />
	<Home.Stories />
</Home>

<footer class="layout-content pt-12 pb-6 text-center bg-brand-blue text-white">
	<p class="text-xl lg:text-3xl font-semibold leading-relaxed max-w-3xl mx-auto mb-6">Reach out to us and let's begin your journey towards business expansion together!</p>
	<a href="#_" role="button" class="w-fit lg:text-xl !py-3 !px-12 mx-auto">Get Started</a>
</footer>