/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('create-block/google-maps-block', {
	/**
	 * @see ./edit.js
	 */
	title: 'Google Maps Block',
	description: "Gutenberg Block to embed map on your page",
	icon: 'location-alt',
	apiVersion: 2,
	attributes: {
		serach_place: {
			type: "string",
			default: "manekchowk",
		},
		satelite_view: {
			type: "boolean",
			default: false,
		},
	},
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});
