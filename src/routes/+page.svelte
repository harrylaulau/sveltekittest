<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
	$: console.log(form?.success);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<form method="POST">
	<button>Log in</button>
</form>
