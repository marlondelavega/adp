<script lang="ts">
	import { MapPin } from '@lucide/svelte';
	import { projects } from '../content';
</script>

<section id="realisations" data-spy class="bg-white py-14 sm:py-16">
	<div class="wrap">
		<h2 class="text-3xl font-bold sm:text-[2.125rem]">Des projets variés à Genève.</h2>

		<ul class="mt-8 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each projects as p (p.title)}
				<li class="group">
					<div class="glow relative overflow-hidden">
						<img
							src={p.image}
							alt={p.alt}
							width="219"
							height="108"
							loading="lazy"
							class="aspect-[2/1] w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
						/>
					</div>
					<h3 class="mt-3 text-base font-bold">{p.title}</h3>
					<p class="mt-1 flex items-center gap-1.5 text-sm text-steel">
						<MapPin size={15} class="text-red" aria-hidden="true" /> Genève
					</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
