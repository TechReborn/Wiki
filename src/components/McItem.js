import React from 'react';

export default function McItem({imgSlug, linkPath, friendlyName, pack, inline = false, size = 24, float = 'left'}) {
	// unsure if images will have the same nested path problem, this might be good enough
	// what about vanilla images?
	const imagePath = `/img/techreborn/${imgSlug}.png`;
	// todo: more mapping here to be able to accurately locate nested pages
	// eg. not /docs/tin_ingot, but /docs/items/ingots/tin_ingot
	// maybe also overrides for "minecraft" pack items that don't line up (if replacing is too difficult)
	const packMap = {
		minecraft: 'https://minecraft.wiki/w',
		techreborn: '/docs'
	};
	// todo: some better mapping, probably a failsafe for unmapped paths
	const itemLink = `${packMap[pack]}/${linkPath}`;
	const Element = inline === true ? "span" : "div";
	return (
		<Element>
			<img alt={friendlyName} style={{float}} width={size} src={imagePath}></img>
			<strong>
				<a href={itemLink}>{friendlyName}</a>
			</strong>
		</Element>
	);
}

