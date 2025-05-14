import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ItemImage from '@site/src/components/ItemImage';
import McItem from '@site/src/components/McItem';
import CraftingTable from '@site/src/components/CraftingTable';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  ItemImage,
  McItem,
  CraftingTable
};