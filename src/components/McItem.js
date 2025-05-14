import React from 'react';
const GLOBAL = require('../../.docusaurus/globalData.json');
const PAGES = GLOBAL['docusaurus-plugin-content-docs'].default.versions[0].docs;

export default function McItem({slug, pack, friendlyName="", inline = false, size = 24, float = 'left', overrides = {}}) {
	// todo: something better here, but if they don't give a slug, what can we even do?
	if (!slug) { return (''); }
	// todo: solve for vanilla images, do we want to hotlink or rehost?
	const packMap = {
		minecraft: (slug) => { return {image: '/img/x_button.png', path: `https://minecraft.wiki/w/${slug}`}; },
		techreborn: (slug) => {
			const image = overrides.image === true ? '/img/x_button.png' : `/img/techreborn/${slug}.png`;
			const path = findIdInGlobal(slug);
			return {image, path};
		}
	};
	const items = packMap[pack](slug);
	const Element = inline === true ? "span" : "div";
	return (
		<Element>
			<strong>
				<a href={items.path}>{friendlyName}
					<img alt={friendlyName} style={{float}} width={size} src={items.image}></img>
				</a>
			</strong>
		</Element>
	);
}

function findIdInGlobal(id) {
	for (const page of PAGES) {
		if (page.id.indexOf(id) !== -1) {
			// we found our term in the ID
			return page.path;
		}
	}
	// returning slug only seems like the best way to gracefully fail. 
	// returning "/" is probably best is users are complaining.
	return id;
}