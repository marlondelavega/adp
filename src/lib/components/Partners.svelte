<script lang="ts">
	import { partners } from '../content';
</script>

<section aria-labelledby="partners-title" class="bg-white py-12 sm:py-14">
	<div class="wrap">
		<h2 id="partners-title" class="text-2xl font-bold">Ils nous font confiance.</h2>
		<ul class="mt-6 grid grid-cols-2 border-y border-line sm:grid-cols-3 lg:grid-cols-5">
			{#each partners as partner (partner.name)}
				<li
					class="flex items-center justify-center border-t border-line px-4 py-6 text-center text-xl font-bold tracking-tight text-ink last:max-sm:col-span-2 lg:border-t-0 lg:border-l lg:first:border-l-0 max-sm:[&:nth-child(-n+2)]:border-t-0 sm:max-lg:[&:nth-child(-n+3)]:border-t-0"
				>
					{#if partner.logo}
						<img
							src={partner.logo}
							alt={partner.name}
							class={['h-14 w-auto max-w-full object-contain', partner.zoom && 'scale-150']}
							loading="lazy"
						/>
					{:else}
						{partner.name}
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>
