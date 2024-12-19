<script lang="ts">
	import EmailIcon from '$/components/icons/EmailIcon.svelte'
	import LinkedinLogo from '$/components/icons/LinkedinLogo.svelte'
</script>

<section id="contact" class="mb-20">
	<h2 class="contact__title">🤝 Pojď se kontaktovat</h2>
	<div class="contact__content">
		<p class="contact__text">
			Rád poslouchám názory ostatních tvůrců v&nbsp;komunitě.&nbsp;👂 Pracuješ
			na nějakém božím projektu 💥, o kterém bych měl vědět? 👀 Sháníš někam
			frontendistu?&nbsp;👨🏻‍💻 Nebo&nbsp;si chceš zajít jen na Kofolu?&nbsp;🍺
		</p>
		<ul class="contact__list">
			<li>
				<a
					href="mailto: &#108;&#46;&#103;&#117;&#114;&#101;&#99;&#107;&#121;&#64;&#115;&#101;&#122;&#110;&#97;&#109;&#46;&#99;&#122;?subject=Ahoj Lukáši 👋"
					class="text-primary hover:brightness-50 duration-150"
				>
					<EmailIcon />
					<span class="underline"> pošli mi mail </span>
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/lukasgur/"
					target="_blank"
					class="text-linkedin hover:brightness-50 duration-150"
					rel="nofollow"
				>
					<LinkedinLogo />
					<span class="underline"> linkedin </span>
				</a>
			</li>
		</ul>
	</div>
</section>

<style lang="postcss">
	.contact__content {
		display: flex;
	}
	.contact__title {
		font-size: 1.666rem;
		margin-bottom: 0.5rem;
		font-weight: bold;
	}
	.contact__text {
		margin-bottom: 1rem;
		flex: 45;
	}
	.contact__list {
		display: flex;
		flex-direction: column;
		flex: 33.333;
		text-align: right;
	}
	.contact__list li {
		margin-bottom: 0.5rem;
	}

	@media (max-width: theme('screens.sm')) {
		.contact__list {
			text-align: left;
		}
		.contact__content {
			flex-direction: column;
		}
	}
</style>
