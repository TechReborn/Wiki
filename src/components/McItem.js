import React from 'react';
const GLOBAL = require('../../.docusaurus/globalData.json');
const PAGES = GLOBAL['docusaurus-plugin-content-docs'].default.versions[0].docs;

export default function McItem({slug, pack, inline = true, size = 24, overrides = {}}) {
	// todo: something better here, but if they don't give a slug, what can we even do?
	if (!slug) { return (''); }
	slug = slug.toLowerCase();
	const packMap = {
		minecraft: (slug) => { 
			const image = !!overrides.image ? `/img/minecraft/${overrides.image}.png` : `/img/minecraft/${slug}.png`;
			return {image, path: `https://minecraft.wiki/w/${slug}`}; 
		},
		techreborn: (slug) => {
			const image = !!overrides.image ? `/img/techreborn/${overrides.image}.png` : `/img/techreborn/${slug}.png`;
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
	let friendlyName = overrides.description === false ? '' : titleCase(slug);
	if (!!overrides.name) { friendlyName = overrides.name; }
	let items;
	try {
		items = packMap[pack](slug);
	} catch (err) {
		throw new Error(`McItem lookup failure: pack:${pack}/slug:${slug}`);
	}
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
	const regex = new RegExp(`/${id}(-_?:"?$|$)`);
	for (const page of PAGES) {
		if (regex.test(page.id)) {
			// we found our term at the end of the ID
			return page.path;
		}
	}
	// returning slug only seems like the best way to gracefully fail. 
	// returning "/" is probably best is users are complaining.
	return `#${id}`;
}

const titleCase = (s) =>
	s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase())
	 .replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());