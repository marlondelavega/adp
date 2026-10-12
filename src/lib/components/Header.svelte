<script lang="ts">
	import { Menu, X, Phone, ArrowRight } from '@lucide/svelte';
	import { company, nav } from '../content';
	import Logo from './Logo.svelte';

	let { active = 'accueil' }: { active?: string } = $props();
	let open = $state(false);
</script>

<svelte:window onkeydown={(e) => e.key === 'Escape' && (open = false)} />

<header class="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-sm">
	<div class="wrap flex h-16 items-center justify-between gap-6">
		<a href="#accueil" aria-label="ADP Toiture SA, retour à l’accueil" class="shrink-0">
			<Logo />
		</a>

		<nav aria-label="Navigation principale" class="hidden lg:block">
			<ul class="flex items-center gap-7">
				{#each nav as item (item.id)}
					<li>
						<a
							href={item.href}
							aria-current={active === item.id ? 'true' : undefined}
							class={[
								'relative py-5 text-[0.8125rem] font-medium transition-colors hover:text-red',
								active === item.id ? 'text-red' : 'text-ink'
							]}
						>
							{item.label}
							<span
								class={[
									'absolute inset-x-0 bottom-0 h-0.5 origin-left bg-red transition-transform duration-300',
									active === item.id ? 'scale-x-100' : 'scale-x-0'
								]}
							></span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="flex items-center gap-2">
			<a
				href={company.phoneHref}
				class="group btn hidden h-10 min-h-10 border-red bg-white px-4 text-[0.8125rem] font-semibold text-ink hover:border-red hover:bg-red hover:text-white md:inline-flex"
			>
				<Phone size={16} class="text-red group-hover:text-white" aria-hidden="true" />
				<span class="tabular-nums">{company.phone}</span>
			</a>
			<a
				href={company.quoteHref}
				class="btn hidden h-10 min-h-10 px-4 text-[0.8125rem] btn-primary sm:inline-flex"
			>
				Demander un devis <ArrowRight size={16} aria-hidden="true" />
			</a>
			<a
				href={company.phoneHref}
				aria-label="Appeler le {company.phone}"
				class="btn size-11 min-h-11 border-red bg-white p-0 text-red md:hidden"
			>
				<Phone size={20} aria-hidden="true" />
			</a>
			<button
				type="button"
				class="btn size-11 min-h-11 btn-ghost p-0 lg:hidden"
				aria-expanded={open}
				aria-controls="menu-mobile"
				aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
				onclick={() => (open = !open)}
			>
				{#if open}<X size={22} aria-hidden="true" />{:else}<Menu
						size={22}
						aria-hidden="true"
					/>{/if}
			</button>
		</div>
	</div>

	{#if open}
		<nav id="menu-mobile" aria-label="Menu mobile" class="border-t border-line bg-white lg:hidden">
			<ul class="wrap grid py-2">
				{#each nav as item (item.id)}
					<li>
						<a
							href={item.href}
							onclick={() => (open = false)}
							class="flex items-center justify-between border-b border-line py-3.5 font-medium last:border-0"
						>
							{item.label}
							<ArrowRight size={16} class="text-red" aria-hidden="true" />
						</a>
					</li>
				{/each}
				<li class="grid gap-2 py-4 sm:hidden">
					<a href={company.quoteHref} class="btn h-11 btn-primary">
						Demander un devis <ArrowRight size={16} aria-hidden="true" />
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>
