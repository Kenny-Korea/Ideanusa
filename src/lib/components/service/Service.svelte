<script lang="ts">
	import ServiceItem from "$lib/components/service/ServiceItem.svelte";
	import type { IServiceItem } from "$lib/types/type";

	const serviceItems: IServiceItem[] = [
		{
			title: "Training",
			description: [
				"1. Leadership Training",
				"2. Company Set Up Training",
				"3. Career Path & Development Training",
				"4. Human Resources Related Training"
			],
			image: "/images/service/training.jpg"
		},
		{
			title: "Consulting",
			description: ["1. "],
			image: "/images/service/consulting.jpg"
		},
		{
			title: "Marketing",
			description: [],
			image: "/images/service/marketing.jpg"
		},
		{
			title: "Event",
			description: [],
			image: "/images/service/event.jpg"
		}
	];
</script>

<div>
	<ServiceItem data={serviceItems[0]} />
	<ServiceItem data={serviceItems[1]} />
	<ServiceItem data={serviceItems[2]} />
	<ServiceItem data={serviceItems[3]} />
</div>

<style>
	div {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-template-rows: 4fr;
		gap: 0.5rem;
	}

	@media (max-width: 1920px) {
		div {
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(4, 1fr);
		}
	}
</style>
