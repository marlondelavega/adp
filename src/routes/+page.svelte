<script lang="ts">
	import Header from '#lib/components/Header.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Services from '#lib/components/Services.svelte';
	import About from '#lib/components/About.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import Reviews from '#lib/components/Reviews.svelte';
	import Partners from '#lib/components/Partners.svelte';
	import Footer from '#lib/components/Footer.svelte';

	let active = $state('accueil');

	// Highlights the nav entry of the section currently crossing the upper third of the viewport.
	function spy(node: HTMLElement) {
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) active = e.target.id;
			},
			{ rootMargin: '-30% 0px -60% 0px' }
		);
		node.querySelectorAll('[data-spy]').forEach((el) => io.observe(el));
		return () => io.disconnect();
	}
</script>

<svelte:head>
	<title>ADP Toiture SA | Ferblanterie, couverture et étanchéité à Genève</title>
	<meta
		name="description"
		content="ADP Toiture SA, ferblanterie, couverture et étanchéité à Genève et ses alentours. Pose, rénovation et fabrication sur mesure pour particuliers et professionnels."
	/>
	<meta name="theme-color" content="#13171d" />
</svelte:head>

<a
	href="#main"
	class="sr-only z-50 bg-red px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
>
	Aller au contenu
</a>

<Header {active} />

<main id="main" {@attach spy}>
	<Hero />
	<Services />
	<About />
	<Projects />
	<Reviews />
	<Partners />
</main>

<Footer />
