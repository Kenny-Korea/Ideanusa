<script lang="ts">
	import Description from "$lib/components/service/Description.svelte";
</script>

<section>
	<img src="./images/service/training.png" alt="consulting" />
	<Description>
		<div class="training">
			<p class="training-title">
				Providing various trainings both offline/in-person and online (webinars). The main trainings
				we offer include:
			</p>
			<div class="training-description">
				<p>1. Leadership Training</p>
				<p>2. Company Set Up Training</p>
				<p>3. Career Path & Development Training</p>
				<p>4. Human Resources Related Training</p>
				<p>5. Trademark registration consultation</p>
				<p>6. your tailored training</p>
			</div>
		</div>
	</Description>
	<Description>
		<div class="training">
			<p class="training-title">
				Trust us to transform your vision into unforgettable experiences. Our dedicated team of
				event organizers is committed to bringing your ideas to life while managing every detail
				with precision and care.
			</p>
			<div class="training-description">
				<p>1. Corporate events (conferences, seminars, team-building)</p>
				<p>2. Social events (weddings, preweddings, parties, fundraisers)</p>
				<p>3. Community events (festivals, fairs, public gatherings)</p>
				<p>4. Virtual events (webinars, online conferences)</p>
				<p>and many more</p>
			</div>
		</div>
	</Description>
	<img src="./images/service/event.png" alt="consulting" />
	<img src="./images/service/marketing.png" alt="consulting" />
	<Description>
		<div class="training">
			<div class="training-description">
				<p>
					1. Social Media Marketing, include: social media strategy development, vontent creation
					and curation, community management and engagement, and social media analytics and
					reporting
				</p>
				<p>
					2. 3D Animation Creation, include : development of custom 3D animations for marketing
					campaign, product demonstrations and brand storytelling, and creation of explainer videos
					that simplify complex concepts through engaging visuals.
				</p>
				<p>
					3. Video Production : Full-service video production, including concept development,
					scripting, filming, and editing, creation of various types of videos such as promotional
					videos, explainer videos, tutorials, and testimonials.
				</p>
			</div>
		</div>
	</Description>
</section>

<style lang="scss">
	@import "$lib/assets/global.scss";

	section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(3, 1fr);

		img {
			width: 640px;
			height: 400px;
			object-fit: cover;
		}
	}

	.training {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		box-sizing: border-box;

		.training-title {
			font-weight: 900;
			text-align: center;
			font-size: 1.2rem;
			line-height: 1.5rem;
		}
		.training-description {
			width: inherit;
			display: flex;
			flex-direction: column;
			/* justify-content: space-between; */
			gap: 0.8rem;
			line-height: 1.2rem;
		}
	}
</style>
