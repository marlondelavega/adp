<script lang="ts">
	import { Star, Quote } from '@lucide/svelte';
	import { reviews } from '../content';
</script>

<section id="avis" data-spy class="on-dark bg-ink py-14 text-white sm:py-16">
	<div class="wrap">
		<h2 class="text-3xl font-bold sm:text-[2.125rem]">Des clients satisfaits.</h2>

		<ul class="mt-8 grid gap-5 md:grid-cols-3">
			{#each reviews as r (r.name)}
				<li>
					<figure
						class="relative flex h-full flex-col bg-white p-6 text-ink shadow-[0_10px_30px_-18px_rgb(0_0_0/0.6)]"
					>
						<Quote
							size={44}
							fill="currentColor"
							class="absolute right-5 bottom-4 text-line"
							aria-hidden="true"
						/>
						<div class="flex gap-0.5 text-red" role="img" aria-label="5 étoiles sur 5">
							{#each [1, 2, 3, 4, 5] as n (n)}
								<Star size={18} fill="currentColor" aria-hidden="true" />
							{/each}
						</div>
						<blockquote class="mt-4 text-base leading-snug">
							« {r.quote} »
						</blockquote>
						<figcaption class="mt-5 pr-10">
							<span class="block font-bold">{r.name}</span>
							<span class="text-sm text-steel">{r.role}</span>
						</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	</div>
</section>
