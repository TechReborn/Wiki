import React from 'react';
const GLOBAL = require('../../.docusaurus/globalData.json');
const PAGES = GLOBAL['docusaurus-plugin-content-docs'].default.versions[0].docs;

export default function McItem({slug, pack, inline = true, size = 24, overrides = {}}) {
	// todo: something better here, but if they don't give a slug, what can we even do?
	if (!slug) { return (''); }
	// todo: solve for vanilla images, do we want to hotlink or rehost?
	const packMap = {
		minecraft: (slug) => { 
			const image = overrides.image === true ? '/img/x_button.png' : `/img/minecraft/${slug}.png`;
			return {image, path: `https://minecraft.wiki/w/${slug}`}; 
		},
		techreborn: (slug) => {
			const image = overrides.image === true ? '/img/x_button.png' : `/img/techreborn/${slug}.png`;
			const path = findIdInGlobal(slug);
			return {image, path};
		}
	};
	// support legacy slug id's as well for easy for migration
	if (slug.indexOf(':') !== -1) {
		const slugParts = slug.split(':');
		slug = slugParts[1];
		pack = slugParts[0];
	}
	const friendlyName = overrides.description === false ? '' : titleCase(slug);
	const items = packMap[pack](slug);
	const Element = inline === true ? "span" : "div";
	return (
		<Element>
			<strong>
				<a href={items.path}>
					<img alt={friendlyName} width={size} src={items.image}></img>
					{friendlyName}
				</a>
			</strong>
		</Element>
	);
}

function findIdInGlobal(id) {
	for (const page of PAGES) {
		if (page.id.indexOf(`/${id}"`) !== -1) {
			// we found our term in the ID
			return page.path;
		}
	}
	// returning slug only seems like the best way to gracefully fail. 
	// returning "/" is probably best is users are complaining.
	return id;
}

const titleCase = (s) =>
	s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())
	 .replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());