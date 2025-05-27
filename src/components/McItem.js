import React from 'react';
const GLOBAL = require('../../.docusaurus/globalData.json');
const PAGES = GLOBAL['docusaurus-plugin-content-docs'].default.versions[0].docs;

/* overrides:
description: setting to false disables the word part of the item, good for crafting machines
name: allows you to inject a new name instead of what would be rendered by titleCase-ing the slug
image: allows you to give it an alternate slug it will use to render the image
*/
export default function McItem({slug, pack, inline = true, size = 24, overrides = {}}) {
	// todo: something better here, but if they don't give a slug, what can we even do?
	if (!slug) { return (''); }
	slug = slug.toLowerCase();
	// support legacy slug id's as well for easy for migration
	if (slug.indexOf(':') !== -1) {
		const slugParts = slug.split(':');
		slug = slugParts[1];
		pack = slugParts[0];
	}
	let friendlyName = overrides.description === false ? '' : titleCase(slug);
	if (!!overrides.name) { friendlyName = overrides.name; }
	let items;
	const packMap = {
		ae2: (slug) => { 
			const path = `https://guide.appliedenergistics.org/1.21/items-blocks-machines/${slug}`;
			let image = (<img alt={friendlyName} width={size} src={`/img/ae2/${slug}.png`} />);
			if (path.includes("#") === true) { image = renderCssItem("invalid", size); }
			return {
				image,
				path
			};
		},
		minecraft: (slug) => { 
			return {
				image: renderCssItem(slug, size), 
				path: `https://minecraft.wiki/w/${slug}`
			}; 
		},
		techreborn: (slug) => {
			const path = findIdInGlobal(slug);
			let image = (<img alt={friendlyName} width={size} src={`/img/techreborn/${slug}.png`} />)
			if (path.includes("#") === true) { image = renderCssItem("invalid", size); }
			return {
				image,
				path
			};
		}
	};
	try {
		items = packMap[pack](slug);
	} catch (err) {
		throw new Error(`McItem lookup failure: pack:'${pack}' / slug:'${slug}'`);
	}
	if (!!overrides.image) {
		const newSlugParts = overrides.image.split(":");
		const newItem = packMap[newSlugParts[0]](newSlugParts[1]);
		items.image = newItem.image;
	}
	const Element = inline === true ? "span" : "div";
	return (
		<Element>
			<strong>
				<a href={items.path}>
					{items.image}
					{friendlyName}
				</a>
			</strong>
		</Element>
	);
}

function renderCssItem(slug, size) {
	// minecraft IDs are expressed with hyphens, always
	const id = slug.split("_").join("-");
	const n = 32 / size;
	return (
		<div className={`icon-32 ${id}`} style={{ '--n': n }}></div>
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