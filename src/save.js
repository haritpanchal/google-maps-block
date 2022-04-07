/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save(props) {
	var satelite_view_enable = props.attributes.satelite_view ? 'k' : '';
	console.log(props.attributes.satelite_view);
	console.log(satelite_view_enable);
	return (
		<p {...useBlockProps.save()}>
			{
				<>
					<div class="mapouter">
						<div class="gmap_canvas">
							<iframe 
								width="600" 
								height="500" 
								id="gmap_canvas" 
								// src="https://maps.google.com/maps?q=Manekchowk&t=&z=13&ie=UTF8&iwloc=&output=embed" 
								src={"https://maps.google.com/maps?q="+props.attributes.serach_place+"&t="+satelite_view_enable+"&z=13&ie=UTF8&iwloc=&output=embed"} 
								frameborder="0" 
								scrolling="no" 
								marginheight="0" 
								marginwidth="0">
							</iframe>
						</div>
					</div>
				</>
			}
		</p>
	);
}
