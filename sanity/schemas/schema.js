// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import homepage from './documents/homepage';
import page from './documents/page';

// Fields
import hero from './fields/hero';
import masonry from './fields/masonry';
import richText from './fields/richText';
import button from './fields/button';

// Objects
import blocks from './objects/blocks';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    homepage,
    page, 
    hero,
    masonry,
    richText,
    button,
    blocks
  ]),
})
