<script setup>
	import emailjs from "@emailjs/browser";

	const config = useRuntimeConfig();
	const form = ref(null);
	const submitting = ref(false);
	const submitted = ref(false);
	const inputFieldReset = ref(null);

	const title = ref("Sugar Loaf | Booking & Pricing");
	const description = ref("The description goes here");

	useHead({
		title,
		meta: [
			{
				name: "description",
				content: description,
			},
		],
	});
	definePageMeta({
		layout: "default",
	});

	const submitHandler = () => {
		submitting.value = true;
		emailjs.sendForm(config.EMAILJS_SERVICE_ID, config.EMAILJS_TEMPLATE_ID, form.value, config.EMAILJS_PUBLIC_KEY).then(
			(result) => {
				submitting.value = false;
				submitted.value = true;
				inputFieldReset.value = "";
			},
			(error) => {
				alert("FAILED...", error.text);
			}
		);
	};
</script>
<template>
	<div>
		<div class="overflow-hidden font-domainemedium text-brand-grey-light">
			<section class="relative h-auto w-screen flex flex-col z-20 bg-opacity-60 px-2">
				<div class="w-full h-screen flex flex-col justify-end">
					<div class="mb-10 font-domainemedium text-brand-rose-gold">
						<h1 class="text-7xl sm:text-8xl lg:text-9xl xl:text-10xl m-1 p-1">JH Bookings</h1>
					</div>
				</div>

				<div class="flex h-auto w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto bg-brand-rose-gold rounded-2xl my-5 sm:my-8 md:my-10">
					<p class="text-4xl md:text-5xl m-2 p-2 sm:m-4 sm:p-4 text-white">
						Take a step forwards today toward your choosen therapy online, take a consultation, send me an email. It's never been so easy.
					</p>
				</div>

				<div class="flex flex-col md:flex-row w-full h-auto">
					<article class="w-full sm:w-2/3 md:w-1/2 border border-brand-rose-gold rounded-2xl m-1 mx-auto md:m-2 xl:m-10">
						<div class="h-40 bg-brand-rose-gold rounded-xl">
							<h1 class="font-domainebold text-5xl text-white p-2">Consultation & first session</h1>
						</div>
						<span class="relative h-58 text-brand-grey-light">
							<p class="text-lg lg:text-xl xl:text-2xl m-2 p-2">
								If you are new to JH Devi book your first consulation & therapy session.
							</p>
							<h3 class="text-4xl xl:text-5xl m-2 p-2">£95</h3>
							<p class="m-2 p-2 text-lg lg:text-xl xl:text-2xl">To book, please use the form below.</p>
						</span>
					</article>
					<article class="w-full sm:w-2/3 md:w-1/2 border border-brand-rose-gold rounded-2xl m-1 mx-auto md:m-2 xl:m-10">
						<div class="h-40 bg-brand-rose-gold rounded-xl">
							<h1 class="text-5xl text-white p-2">Individual session</h1>
							<h2 class="m-1 p-1 text-white text-2xl">CBT, Hypnotherapy or EFT</h2>
						</div>
						<span class="relative h-58">
							<p class="text-lg lg:text-xl xl:text-2xl m-2 p-2">For those who wish to book on-going Intergrated Therapy sessions.</p>
							<h3 class="text-4xl xl:text-5xl m-2 p-2">£75</h3>
							<p class="m-2 p-2 text-lg lg:text-xl xl:text-2xl">To book, please use the form below.</p>
						</span>
					</article>
				</div>
			</section>
			<section class="flex flex-col w-screen h-auto">
				<div v-if="submitting" class="w-full h-full text-brand-rose-gold items-center mx-auto text-center" :class="{ [`hidden`]: submitted }">
					<h1 text="p-1 m-1 sm:m-2 sm:p-2 text-2xl lg:text-3xl xl:text-4xl">Submitting your email</h1>
				</div>
				<div v-if="submitted" class="w-full h-full text-brand-rose-gold items-center mx-auto text-center">
					<h1 class="p-1 m-1 sm:m-2 sm:p-2 text-2xl lg:text-3xl xl:text-4xl">
						Your email has been sent to jusyogi@gmail.com. We will be in touch very shortly.
					</h1>
				</div>
				<div
					:class="{ [`hidden`]: submitting || submitted }"
					class="w-full text-lg lg:text-lg transition duration-700 ease-in-out mx-auto mb-10"
				>
					<form class="form w-5/6 sm:w-2/3 lg:w-1/2 mx-auto" ref="form" @submit.prevent="submitHandler">
						<div class="w-full">
							<h1 class="text-6xl xl:text-7xl text-brand-rose-light m-1 p-1 text-center">Email JH Devi</h1>
						</div>

						<div class="form-group">
							<input
								class="border border-brand-rose-gold rounded-2xl bg-rose-50 text-brand-rose-gold pointer-events-auto m-2 p-2 w-full mx-auto"
								name="from_name"
								placeholder="name"
								type="text"
								:value="inputFieldReset"
								required
								size="40"
							/>
						</div>
						<div class="form-group">
							<input
								class="border border-brand-rose-gold rounded-2xl bg-rose-50 text-brand-rose-gold pointer-events-auto m-2 p-2 w-full mx-auto"
								name="user_email"
								placeholder="email address"
								type="email"
								:value="inputFieldReset"
								required
								size="40"
							/>
						</div>

						<div class="form-group">
							<textarea
								class="border border-brand-rose-gold rounded-2xl bg-rose-50 text-brand-rose-gold pointer-events-auto m-2 p-2 text-area w-full mx-auto"
								name="message"
								placeholder="message"
								type="text"
								:value="inputFieldReset"
								required
								cols="40"
								rows="10"
							></textarea>
						</div>
						<div class="form-group">
							<input
								class="submit text-brand-rose-gold m-1 p-1 border border-brand-rose-gold rounded-2xl transition duration-500 delay-75 ease-in-out hover:border-brand-rose-dark hover:text-brand-rose-dark hover:bg-rose-dark hover:scale-125"
								type="submit"
								name="send"
								value="Send email"
							/>
						</div>
					</form>
				</div>
			</section>
		</div>
	</div>
</template>
<style scoped>
	input[type="text"],
	input[type="email"],
	input[type="textarea"],
	textarea,
	fieldset {
		width: 100%;
		border: 1px solid #d09fa7;
		box-sizing: border-box;
	}

	input:invalid,
	textarea:invalid {
		box-shadow: 0 0 5px 1px lightcoral;
	}

	input:focus:invalid {
		box-shadow: none;
	}
</style>
