import { invalid, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions: Actions = {
	default: async ({ request, url }) => {
		if (url.searchParams.get('v') === '0') return invalid(400, { common: '1' });
		if (url.searchParams.get('v') === '1') return invalid(400, { common: '2', something: '' });

		if (url.searchParams.get('v') === '2') return invalid(400, { common2: 1 });
		if (url.searchParams.get('v') === '3') return invalid(400, { common2: '1' });
		if (url.searchParams.get('v') === '4') return invalid(400, { common2: {} });
	}
};
