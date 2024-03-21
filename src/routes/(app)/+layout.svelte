<script>
	import "../../app.pcss";
    // Supports weights 100-900
    import '@fontsource-variable/montserrat';
    import '$lib/css';
</script>

<nav class="flex-center-between bg-black p-4">
	<ul>
		<li>
			<a href="/" title="Home">
				<img src="/images/logo.png" alt="A very rich logo" class="w-32" />
			</a>
		</li>
	</ul>
	<ul class="flex-center-between gap-4">
		<li>
			<a href="#_" role="button" class="btn-sm">Talk to us</a>
		</li>
		<li>
			<a href="/dashboard" class="text-white text-sm underline font-medium">Admin</a>
		</li>
	</ul>
</nav>

<slot />
