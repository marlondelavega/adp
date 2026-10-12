<script lang="ts">
	import { ArrowRight, Phone, Mail, MapPin } from '@lucide/svelte';
	import { company, nav } from '../content';
	import Logo from './Logo.svelte';
</script>

<footer id="contact" data-spy class="bg-sheet">
	<div class="wrap grid gap-8 py-10 lg:grid-cols-[auto_1fr_auto_auto] lg:items-center lg:gap-10">
		<a href="#accueil" aria-label="ADP Toiture SA, retour en haut" class="w-fit"><Logo /></a>

		<nav aria-label="Pied de page">
			<ul class="grid grid-cols-2 gap-x-7 gap-y-2 sm:flex sm:flex-wrap lg:justify-center">
				{#each nav as item (item.id)}
					<li><a href={item.href} class="text-[0.8125rem] hover:text-red">{item.label}</a></li>
				{/each}
			</ul>
		</nav>

		<address class="grid gap-1.5 text-[0.8125rem] not-italic">
			<a href={company.phoneHref} class="flex items-center gap-2.5 hover:text-red">
				<Phone size={15} aria-hidden="true" /> <span class="tabular-nums">{company.phone}</span>
			</a>
			<a href="mailto:{company.email}" class="flex items-center gap-2.5 hover:text-red">
				<Mail size={15} aria-hidden="true" />
				{company.email}
			</a>
			<span class="flex items-start gap-2.5">
				<MapPin size={15} class="mt-0.5 shrink-0" aria-hidden="true" />
				{company.address}
			</span>
		</address>

		<a href={company.quoteHref} class="btn h-11 w-fit px-5 font-semibold btn-primary">
			Demander un devis <ArrowRight size={16} aria-hidden="true" />
		</a>
	</div>

	<div class="border-t border-line">
		<p class="wrap py-4 text-xs text-steel">
			© {new Date().getFullYear()}
			{company.name}. Tous droits réservés.
		</p>
	</div>
</footer>
