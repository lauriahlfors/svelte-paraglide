import { paraglideVitePlugin } from '@inlang/paraglide-js'
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [paraglideVitePlugin({ project: './project.inlang', outdir: './src/paraglide' }),tailwindcss(), sveltekit()]
});
