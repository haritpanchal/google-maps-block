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
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	Card,
    CardHeader,
    CardBody,
    CardFooter,
    __experimentalText as Text,
    __experimentalHeading as Heading,
} from "@wordpress/components";
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } 	= props;
	var satelite_view_enable = attributes.satelite_view ? 'k' : '';
	
	const changeSearchPlace = (newPlace) => {
		
		setAttributes({
			serach_place: newPlace,
		});
		console.log(jQuery('.place-name').text());
	};

	return (
		<p {...useBlockProps()}>
			{
				<>
				<InspectorControls>
					<PanelBody title="Map Data">
						<TextControl
							label="Add Place"
							value={ attributes.serach_place }
							onChange={ changeSearchPlace }
						/>
						<ToggleControl
							label="Satelite View?"
							checked={ attributes.satelite_view }
							onChange={(satelite_view) =>
								setAttributes({ satelite_view })
							}
						/>
					</PanelBody>
				</InspectorControls>
				<div class="mapouter">
					<div class="gmap_canvas">
						<iframe 
							width="600" 
							height="500" 
							id="gmap_canvas" 
							// src="https://maps.google.com/maps?q=Manekchowk&t=&z=13&ie=UTF8&iwloc=&output=embed" 
							src={"https://maps.google.com/maps?q="+attributes.serach_place+"&t="+satelite_view_enable+"&z=13&ie=UTF8&iwloc=&output=embed"} 
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
