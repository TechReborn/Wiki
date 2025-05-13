import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import ItemImage from '@site/src/components/ItemImage';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  ItemImage,
};