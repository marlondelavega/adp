<script lang="ts">
	let { dark = false }: { dark?: boolean } = $props();
</script>

<svg
	viewBox="0 0 150 76"
	class="h-11 w-auto"
	role="img"
	aria-label="ADP Toiture SA"
	xmlns="http://www.w3.org/2000/svg"
>
	<polygon points="86,6 126,6 138,20 98,20" fill="#d1111c" />
	<text
		x="4"
		y="56"
		font-family="'Hanken Grotesk Variable', sans-serif"
		font-weight="800"
		font-size="58"
		letter-spacing="-4"
		fill={dark ? '#ffffff' : '#13171d'}>adp</text
	>
	<text
		x="8"
		y="72"
		font-family="'Hanken Grotesk Variable', sans-serif"
		font-weight="700"
		font-size="9"
		letter-spacing="0.5"
		fill={dark ? '#ffffff' : '#13171d'}>TOITURE SA</text
	>
</svg>
