import React from 'react';
import Machine from '@site/src/components/Machine';

export default function CraftingTable({recipe}) {
	return (
		<Machine recipe={recipe} />
	);
}

