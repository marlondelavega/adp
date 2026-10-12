<script lang="ts">
	import { Mail } from '@lucide/svelte';
	import { company } from '../content';
</script>

<section
	id="apropos"
	data-spy
	class="on-dark relative isolate flex flex-col overflow-hidden bg-ink text-white lg:block"
>
	<div
		class="relative order-last aspect-[16/10] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:-z-20 lg:aspect-auto lg:w-[62%]"
	>
		<img
			src="/images/equipe.jpg"
			alt="L’équipe d’ADP Toiture en tenue noire devant son atelier et ses camionnettes"
			width="594"
			height="236"
			loading="lazy"
			class="size-full object-cover lg:object-[65%_center]"
		/>
	</div>
	<div
		class="absolute inset-0 -z-10 hidden bg-linear-to-r from-ink from-40% via-ink/75 to-transparent lg:block"
	></div>

	<div class="wrap py-12 sm:py-14 lg:py-20">
		<div class="max-w-[31rem]">
			<h2 class="text-3xl font-bold sm:text-[2.125rem]">
				Une équipe à taille humaine, un savoir-faire reconnu.
			</h2>
			<p class="mt-5 leading-relaxed text-white/90">
				Basés aux Acacias, aux Vives, à Genève, nous mettons notre expérience et notre savoir-faire
				au service de vos projets de toiture. Notre équipe de 7 à 8 collaborateurs intervient pour
				les particuliers, les entreprises et en collaboration avec les plus grands acteurs du
				secteur.
			</p>
			<a
				href={company.quoteHref}
				class="btn mt-7 h-11 border-white/60 bg-transparent px-5 font-semibold text-white hover:border-white hover:bg-white hover:text-ink"
			>
				Nous écrire <Mail size={16} aria-hidden="true" />
			</a>
		</div>
	</div>
</section>
