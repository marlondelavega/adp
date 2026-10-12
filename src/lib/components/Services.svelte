<script lang="ts">
	import { House, Waves, Droplet, Box } from '@lucide/svelte';
	import { services } from '../content';

	const icons = { house: House, waves: Waves, droplet: Droplet, box: Box };
</script>

<section id="services" data-spy class="bg-white py-14 sm:py-16">
	<div class="wrap">
		<h2 class="text-3xl font-bold sm:text-[2.125rem]">Notre savoir-faire.</h2>

		<ul class="mt-8 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each services as s (s.title)}
				{@const Icon = icons[s.icon]}
				<li class="group">
					<div class="glow relative">
						<img
							src={s.image}
							alt={s.alt}
							width="220"
							height="115"
							loading="lazy"
							class="aspect-[19/10] w-full object-cover"
						/>
						<span
							class="absolute bottom-0 left-[3%] grid h-[33%] w-[21%] place-items-center bg-white text-ink shadow-[0_4px_14px_-6px_rgb(19_23_29/0.35)] transition-colors group-hover:text-red"
						>
							<Icon size={20} aria-hidden="true" />
						</span>
					</div>
					<h3 class="mt-8 text-[1.0625rem] font-bold">{s.title}</h3>
					<p class="mt-1 text-base leading-snug text-steel">{s.text}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
