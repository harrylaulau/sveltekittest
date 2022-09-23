<script lang="ts">
	import type { ActionData } from './$types';
	export let form: ActionData;
	$: console.log(form ?? 'undefined');
</script>

{#each [0, 1, 2, 3, 4] as x}
	<div>
		<a href={'/?v=' + x}>to {x}</a>
	</div>
{/each}
<form method="POST">
	<button>print action output</button>
</form>
