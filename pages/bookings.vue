<script setup>
	import emailjs from "@emailjs/browser";

	const route = useRoute();
	const config = useRuntimeConfig();
	const form = ref(null);
	const submitting = ref(false);
	const submitted = ref(false);
	const inputFieldReset = ref(null);

	const title = ref("JH Devi | Bookings & Pricing");
	const description = ref("Learn how to book your first session or on-going sessions and email me directly from my website.");

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
		<Head>
			<Meta name="og:title" :content="title" />
			<Meta name="og:description" :content="description" />
			<Meta name="og:url" content="https://www.jhdevi.com/bookings" />
			<Meta name="og:site_name" content="JH Devi Integrated Therapies" />
			<Meta name="og:image" content="https://www.jhdevi.com/icon.png" />
			<Meta name="og:locale" content="en_GB" />
			<Meta name="twitter:card" content="summary" />
			<Meta name="twitter:site" content="@hodgson_justine" />
			<Meta name="twitter:title" content="title" />
			<Meta name="twitter:description" content="description" />
			<Meta name="twitter:image" content="https://www.jhdevi.com/icon.png" />
			<Link rel="canonical" :href="`https://www.jhdevi.com${route.fullPath}`" />
			<SchemaOrgOrganization name="JH Devi Integrated Therapies" logo="/icon.png" />
			<SchemaOrgWebSite name="JH Devi Integrated Therapies" />
			<SchemaOrgWebPage />
		</Head>
		<Nav
			textColour="text-brand-rose-gold"
			fillColour="fill-brand-rose-gold"
			afterLineColour="after:bg-brand-rose-gold"
			borderColour="border-brand-rose-gold"
			btnBgColour="bg-brand-rose-gold"
			cartInfoColour="text-brand-rose-dark"
		></Nav>
		<section class="h-screen w-screen fixed z-10">
			<IconsPentagram class="fill-brand-rose-gold opacity-20" style="width: 150%" />
		</section>
		<div class="relative overflow-hidden font-objectSans text-brand-grey z-20">
			<section class="relative h-auto w-screen flex flex-col bg-opacity-60 px-2">
				<div class="w-full h-screen flex flex-col justify-end">
					<div class="mb-20 font-domainemedium text-brand-rose-gold">
						<h1 class="text-7xl sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl m-1 p-1">JH Bookings</h1>
					</div>
				</div>

				<div class="flex h-auto w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto bg-brand-rose-gold rounded-2xl my-5 sm:my-8 md:my-10">
					<p class="text-4xl md:text-5xl m-2 p-2 sm:m-4 sm:p-4 text-white font-domainemedium">
						Take a step forwards today toward your choosen therapy online, take a consultation, send me an email. It's never been so easy.
					</p>
				</div>

				<div class="relative flex flex-col md:flex-row w-full h-auto">
					<article class="w-full sm:w-2/3 md:w-1/2 border border-brand-rose-gold rounded-2xl m-1 mx-auto md:m-2 xl:m-10 bg-white">
						<div class="h-40 bg-brand-rose-gold rounded-xl">
							<h1 class="font-domainemedium text-5xl text-white p-2">Consultation & first session</h1>
						</div>
						<span class="relative h-58 text-brand-grey">
							<p class="text-lg lg:text-xl xl:text-2xl m-2 p-2">
								If you are new to JH Devi book your first consulation & therapy session.
							</p>
							<h3 class="text-4xl xl:text-5xl m-2 p-2">£95</h3>
							<p class="m-2 p-2 text-lg lg:text-xl xl:text-2xl">To book, please use the form below.</p>
						</span>
					</article>
					<article class="w-full sm:w-2/3 md:w-1/2 border border-brand-rose-gold rounded-2xl m-1 mx-auto md:m-2 xl:m-10 bg-white">
						<div class="h-40 bg-brand-rose-gold rounded-xl font-domainemedium">
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
					<form
						class="relative form w-5/6 sm:w-2/3 lg:w-1/2 mx-auto bg-white rounded-2xl p-5 border-2 border-brand-rose-light"
						ref="form"
						@submit.prevent="submitHandler"
					>
						<div class="w-full">
							<h1 class="text-6xl xl:text-7xl text-brand-rose-light m-1 p-1 text-center font-domainemedium">Email JH Devi</h1>
						</div>

						<div class="form-group bg-white">
							<input
								class="border border-brand-rose-gold rounded-2xl font-domainemedium bg-rose-50 text-brand-rose-gold pointer-events-auto m-2 p-2 w-full mx-auto"
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
								class="border border-brand-rose-gold rounded-2xl font-domainemedium bg-rose-50 text-brand-rose-gold pointer-events-auto m-2 p-2 w-full mx-auto"
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
								class="border border-brand-rose-gold rounded-2xl font-domainemedium bg-rose-50 text-brand-rose-gold pointer-events-auto m-2 p-2 text-area w-full mx-auto"
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
								class="submit text-brand-rose-gold m-1 p-1 font-domainemedium border border-brand-rose-gold rounded-2xl transition duration-500 delay-75 ease-in-out hover:border-brand-rose-dark hover:text-brand-rose-dark hover:bg-rose-dark hover:scale-125 bg-white"
								type="submit"
								name="send"
								value="Send email"
							/>
						</div>
					</form>
				</div>
			</section>
			<div
				class="relative h-auto w-fit flex flex-row z-30 items-center float-right border border-brand-rose-gold rounded-2xl m-1 p-1 bg-white mb-10"
			>
				<NuxtLink to="/jhblog">
					<span class="m-1 p-1 inline-block">
						<p class="text-sm text-brand-rose-gold transition duration-700 ease-in-out hover:text-brand-rose-dark hover:scale-110">
							JH Blog
						</p>
					</span>

					<IconsArrowright
						class="inline-block mr-4 w-10 fill-brand-rose-gold hover:fill-brand-rose-dark hover:border-brand-rose-gold hover:scale-150 transition duration-700 ease-in-out"
					/>
				</NuxtLink>
			</div>
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
