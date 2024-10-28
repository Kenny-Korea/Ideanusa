<script lang="ts">
	import Content from "$lib/components/contact/Content.svelte";
	import Title from "$lib/components/Title.svelte";
	import { onMount } from "svelte";

	let phoneInput: HTMLInputElement;
	let form: HTMLFormElement;

	function validatePhoneNumber(phone: string): boolean {
		const regex = /^(?:\+62|62|0)8[1-9][0-9]{6,9}$/;
		return regex.test(phone);
	}

	function handlePhoneInput() {
		const isValid = validatePhoneNumber(phoneInput.value);
		if (!isValid) {
			phoneInput.setCustomValidity("유효한 인도네시아 휴대폰 번호를 입력하세요.");
		} else {
			phoneInput.setCustomValidity("");
		}
	}

	async function handleSubmit(event: Event) {
		event.preventDefault();

		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		fetch(import.meta.env.VITE_APP_API_ENDPOINT + "/contact", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		});

		try {
			console.log(data);
		} catch (error) {
			console.error("Error:", error);
		}
	}
</script>

<section>
	<Title title="Schedule With Us" />
	<Content label={undefined}>
		<span id="link-calendly">https://calendly.com/ideanusa</span>
	</Content>
	<Title title="Contact Us" />
	<form bind:this={form} on:submit={handleSubmit}>
		<Content label="Full Name">
			<input type="text" name="fullName" required />
		</Content>
		<Content label="Email">
			<input type="email" name="email" required />
		</Content>
		<Content label="Phone Number">
			<input type="text" name="phoneNumber" bind:this={phoneInput} required />
		</Content>
		<Content label="Messages">
			<textarea name="message" rows="5" required></textarea>
		</Content>
		<button type="submit">Submit</button>
	</form>
	<Content label="Or">
		<div class="contact-info">
			<p>PT Ideanusa Perintis Utama</p>
			<p>Phone: 0877-8058-1994</p>
			<p>Email: byideanusa@gmail.com</p>
			<p>Address: Jalan Kenari Indah, Malangrejo, Desa/Kelurahan Wedomartani, Kec.</p>
			<p>Ngemplak, Kab. Sleman, Provinsi Daerah Istimewa Yogyakarta,</p>
		</div>
	</Content>
</section>

<style lang="scss">
	@import "$lib/assets/global.scss";

	section {
		width: 100%;
	}

	#link-calendly {
		@extend .centerItem;
		width: 100%;
		font-size: 1.7rem;
		font-weight: 500;
		color: $main;
		padding: 1rem;
		box-sizing: border-box;
		user-select: text; /* 텍스트 선택 허용 */
	}

	form {
		width: inherit;
		/* display: flex;
		flex-direction: column;
		justify-content: center; */
		@extend .centerItem;
		flex-direction: column;
	}

	input {
		width: 100%;
		padding: 1rem 1.5rem;
		font-size: 1.2rem;
		font-weight: 100;
		background-color: transparent;
		box-sizing: border-box;
		border: 1px solid transparent;
		outline: none;
	}

	textarea {
		width: 100%;
		padding: 1rem 1.5rem;
		font-size: 1.2rem;
		font-weight: 100;
		background-color: transparent;
		box-sizing: border-box;
		border: 1px solid transparent;
		outline: none;
		resize: none;
	}

	input,
	textarea {
		&:focus {
			border: 1px solid $main;
		}
	}

	button[type="submit"] {
		margin: 2rem 0 0 0;
		width: 20rem;
		padding: 1rem 1.5rem;
		font-size: 1.2rem;
		font-weight: 500;
		color: $main;
		background-color: #ffffff;
		border: 1px solid $main;
		box-sizing: border-box;
		cursor: pointer;
		transition:
			background-color 0.3s ease,
			color 0.3s ease;

		&:hover {
			background-color: darken($main, 10%);
			color: #ffffff;
		}
	}

	.copied {
		position: absolute;
		background-color: black;
		color: white;
		padding: 5px;
		border-radius: 3px;
		z-index: 1000;
		transition: opacity 1s ease-in-out;
		opacity: 1;
	}

	.copied.fade-out {
		opacity: 0;
	}

	.contact-info {
		@extend .centerItem;
		padding: 2rem;
		box-sizing: border-box;
		gap: 1rem;
		flex-direction: column;
		width: inherit;
		font-size: 1.2rem;
		font-weight: 100;
		color: $main;
		margin-top: 1rem;
	}
</style>
