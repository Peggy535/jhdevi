<script setup>
	definePageMeta({
		layout: "default",
	});
</script>
<template>
	<div>
		<div class="overflow-hidden font-domaineregular text-brand-grey-light">
			<section class="relative h-auto w-screen flex flex-col z-20 bg-white bg-opacity-60">
				<div class="w-full h-auto mt-20 mb-10 font-domaineregular text-brand-rose-gold">
					<h1 class="text-6xl sm:text-7xl md:text-8xl lg:text-9xl m-1 p-1">JH Bookings</h1>
				</div>

				<div class="flex h-auto w-full sm:w-4/5 md:w-3/4 lg:w-2/3 mx-auto border-2 border-white bg-brand-rose-gold rounded-2xl">
					<p class="text-4xl m-2 p-2 text-white">
						Take a step forwards today, booking your choosen therapy online, take a consultation, send me an email. It's never been so
						easy.
					</p>
				</div>

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:gap-10 xl:gap-16 w-screen h-auto mb-5 m-5 mx-auto lg:px-5 xl:px-10">
					<article class="grid col-span-1 min-h-min border m-1 border-brand-rose-gold rounded-2xl shadow-2xl shadow-neutral-200">
						<span class="h-40 bg-brand-rose-gold rounded-xl">
							<h1 class="font-domainebold text-4xl lg:text-5xl text-white m-1 p-1">Consultation & first session</h1>
						</span>
						<span class="relative h-52 m-1 p-1 text-brand-grey-light">
							<p class="text-lg lg:text-xl m-1 p-1">If you are new to JH Devi book your first consulation & therapy session.</p>
							<h3 class="text-4xl m-1 p-1">£95</h3>
							<p class="m-1 p-1">To book please use the form below.</p>
						</span>
					</article>
					<article class="grid col-span-1 min-h-min m-1 border border-brand-rose-gold rounded-2xl shadow-2xl shadow-neutral-200">
						<span class="h-40 bg-brand-rose-gold rounded-xl">
							<h1 class="text-4xl lg:text-5xl text-white m-1 p-1">Individual session</h1>
							<h2 class="m-1 p-1 text-white text-2xl">CBT, Hypnotherapy or EFT</h2>
						</span>
						<span class="relative h-52 m-1 p-1">
							<p class="text-lg lg:text-xl m-1 p-1">For those who wish to book on-going Intergrated Therapy sessions.</p>
							<h3 class="text-4xl m-1 p-1">£75</h3>
							<p class="m-1 p-1">To book please use the form below.</p>
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
						Your email has been sent to enquiries@sugarloafantigua.com. We will be in touch very shortly.
					</h1>
				</div>
				<div :class="{ [`hidden`]: submitting || submitted }" class="w-full text-lg lg:text-lg transition duration-700 ease-in-out mx-auto">
					<form class="form w-5/6 mx-auto" ref="form" @submit.prevent="submitHandler">
						<div class="form-group">
							<input
								class="border border-brand-rose-gold rounded-2xl bg-white text-brand-rose-gold pointer-events-auto m-2 p-2 w-full mx-auto"
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
								class="border border-brand-rose-gold rounded-2xl bg-white text-brand-rose-gold pointer-events-auto m-2 p-2 w-full mx-auto"
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
								class="border border-brand-rose-gold rounded-2xl bg-white text-brand-rose-gold pointer-events-auto m-2 p-2 text-area w-full mx-auto"
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
								class="submit text-brand-rose-gold m-1 p-1 border border-brand-rose-gold rounded-2xl transition duration-500 delay-75 ease-in-out hover:border-brand-rose-dark hover:text-brand-rose-dark hover:bg-rose-dark hover:scale-110"
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
