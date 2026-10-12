import implenia from './assets/pictures/implenia.png';
import losingerMarazzi from './assets/pictures/losinger-marazzi.svg';
import racinesCarrees from './assets/pictures/racines-carrees.svg';
import deGandPaysage from './assets/pictures/de-gand-paysage.jpg';
import mEtancheite from './assets/pictures/Logo+M+etancheite-363w.webp';

export const company = {
	name: 'ADP Toiture SA',
	phone: '078 760 96 36',
	phoneHref: 'tel:+41787609636',
	email: 'info@adp-toiture.ch',
	address: 'Chem. Frank-Thomas 24B, 1208 Genève',
	quoteHref: 'mailto:info@adp-toiture.ch?subject=Demande%20de%20devis'
} as const;

export const nav = [
	{ id: 'accueil', label: 'Accueil', href: '#accueil' },
	{ id: 'services', label: 'Nos services', href: '#services' },
	{ id: 'realisations', label: 'Nos réalisations', href: '#realisations' },
	{ id: 'apropos', label: 'À propos', href: '#apropos' },
	{ id: 'contact', label: 'Contact', href: '#contact' }
] as const;

export const services = [
	{
		title: 'Couverture',
		text: 'Pose et rénovation de toitures de tous types.',
		image: '/images/couverture.jpg',
		alt: 'Toiture en tuiles avec cheminée et velux',
		icon: 'house'
	},
	{
		title: 'Ferblanterie',
		text: 'Travaux sur mesure en zinc, cuivre et aluminium.',
		image: '/images/ferblanterie.jpg',
		alt: 'Chéneau et descente en zinc',
		icon: 'waves'
	},
	{
		title: 'Étanchéité',
		text: 'Solutions durables pour toitures plates, terrasses et ouvrages.',
		image: '/images/etancheite.jpg',
		alt: 'Pose d’une membrane d’étanchéité au chalumeau',
		icon: 'droplet'
	},
	{
		title: 'Fabrication sur mesure',
		text: 'Pièces et éléments de ferblanterie réalisés dans notre atelier.',
		image: '/images/atelier.jpg',
		alt: 'Plieuse dans l’atelier de ferblanterie',
		icon: 'box'
	}
] as const;

export const projects = [
	{
		title: 'Entretien de toiture',
		image: '/images/entretien.jpg',
		alt: 'Nettoyage haute pression d’une toiture en tuiles'
	},
	{
		title: 'Étanchéité de terrasse',
		image: '/images/terrasse.jpg',
		alt: 'Terrasse étanchée avec vue sur le lac'
	},
	{
		title: 'Rénovation de couverture',
		image: '/images/renovation.jpg',
		alt: 'Couverture en ardoise d’un immeuble genevois'
	},
	{
		title: 'Habillage en cuivre',
		image: '/images/cuivre.jpg',
		alt: 'Façade et lucarnes habillées de cuivre'
	}
] as const;

export const reviews = [
	{
		quote: 'Travail soigné et équipe professionnelle. Notre toit est comme neuf !',
		name: 'M. Dupont',
		role: 'Particulier, Genève'
	},
	{
		quote: 'Des conseils clairs et un résultat impeccable. Je recommande sans hésiter.',
		name: 'Mme Martin',
		role: 'Particulière, Genève'
	},
	{
		quote: 'Intervention rapide et efficace. Une équipe sérieuse et à l’écoute.',
		name: 'M. Rossi',
		role: 'Régie immobilière, Genève'
	}
] as const;

export const partners: { name: string; logo?: string; zoom?: boolean }[] = [
	{ name: 'Implenia', logo: implenia, zoom: true },
	{ name: 'Losinger Marazzi', logo: losingerMarazzi },
	{ name: 'Racines Carrées', logo: racinesCarrees },
	{ name: 'De Gand Paysage', logo: deGandPaysage },
	{ name: 'M Étanchéité Sàrl', logo: mEtancheite }
];
