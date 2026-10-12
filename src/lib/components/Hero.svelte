<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import { company } from '../content';
</script>

<section
	id="accueil"
	data-spy
	class="on-dark relative isolate flex flex-col overflow-hidden bg-ink text-white lg:block"
>
	<div
		class="relative order-last aspect-[16/10] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:-z-20 lg:aspect-auto lg:w-[68%]"
	>
		<img
			src="/images/hero.jpg"
			alt="Ferblantier découpant une tôle sur une toiture métallique, avec le lac Léman et le Jet d’eau en arrière-plan"
			width="644"
			height="310"
			fetchpriority="high"
			class="settle size-full object-cover lg:object-[70%_center]"
		/>
	</div>
	<div
		class="absolute inset-0 -z-10 hidden bg-linear-to-r from-ink from-35% via-ink/70 to-ink/10 lg:block"
	></div>

	<div class="wrap py-12 sm:py-16 lg:py-24">
		<div class="max-w-[34rem]">
			<h1 class="rise text-[clamp(2.25rem,4.4vw+0.5rem,3.5rem)] font-bold">
				ADP Toiture SA pour vos travaux de <span class="text-red-bright">toiture.</span>
			</h1>
			<p class="rise mt-6 max-w-[30rem] text-lg leading-snug text-white/90" style="--d: 120ms">
				Ferblanterie, couverture et étanchéité à Genève et ses alentours. Un savoir-faire au service
				des particuliers et des professionnels.
			</p>
			<div class="rise mt-8 flex flex-wrap gap-3" style="--d: 240ms">
				<a href={company.quoteHref} class="btn h-12 px-6 font-semibold btn-primary">
					Demander un devis <ArrowRight size={18} aria-hidden="true" />
				</a>
				<a
					href="#services"
					class="btn h-12 border-white/60 bg-transparent px-6 font-semibold text-white hover:border-white hover:bg-white hover:text-ink"
				>
					Nos services
				</a>
			</div>
		</div>
	</div>
</section>
