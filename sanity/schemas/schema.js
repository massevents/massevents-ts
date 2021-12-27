// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from './documents/page';
import siteConfig from './documents/siteConfig';

// Fields
import button from './fields/button';

// Objects
// import blocks from './objects/blocks';
import InternalExternalLink  from './objects/InternalExternalLink';
import ExternalLink  from './objects/ExternalLink';
import seo from './objects/seo';
import route from './objects/route';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    InternalExternalLink,
    ExternalLink,
    siteConfig,
    page, 
    seo,
    route,
    button,
    // blocks
  ]),
})
