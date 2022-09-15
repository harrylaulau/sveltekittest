import { invalid, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions: Actions = {
	default: async ({ request, url }) => {
		if (url.searchParams.get('v') === '0') return invalid(400, { first: '1' });
		if (url.searchParams.get('v') === '1') return invalid(400, { first: 1, second: 'second' });
		if (url.searchParams.get('v') === '2') return invalid(400, { first: '3', second: 'second' });
		if (url.searchParams.get('v') === '3') return invalid(400, { first: {}, second: 'second' });
		if (url.searchParams.get('v') === '4') return { third: 3 };
		if (url.searchParams.get('v') === '5') return { third: 'third' };
		if (url.searchParams.get('v') === '6') return { fourth: 'fourth' };
	}
};
