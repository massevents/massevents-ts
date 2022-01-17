// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Documents
import page from './documents/page';
import news from './documents/news';
import redirect from './documents/redirect';
import project from './documents/project';
import sponsor from './documents/sponsor';
import siteConfig from './documents/siteConfig';
import teamMember from './documents/teamMember';

// Fields
import button from './fields/button';

// Objects
import blocks from './objects/blocks';
import InternalExternalLink  from './objects/InternalExternalLink';
import ExternalLink  from './objects/ExternalLink';
import seo from './objects/seo';
import route from './objects/route';
import header from './objects/header';
import teaser from './objects/teaser';
import ticketshop from './objects/ticketshop';
import projectContent from './objects/projectContent';
import sponsors from './objects/sponsors';
import activities from './objects/activities';
import socialMedia from './objects/socialMedia';
import partnerGroup from './objects/partnerGroup';
import contact from './objects/contact';
import twoColQuote from './objects/two-col-quote';
import twoColTwoTitle from './objects/two-col-two-title';
import oneColOneTitle from './objects/one-col-one-title';
import imageSection from './objects/imageSection';
import newsOverview from './objects/newsOverview';
import projectOverview from './objects/projectOverview';
import teamCarousel from './objects/teamCarousel';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    InternalExternalLink,
    ExternalLink,
    redirect,
    siteConfig,
    project,
    page, 
    seo,
    news,
    header,
    route,
    button,
    teamMember,
    activities,
    sponsor,
    sponsors,
    partnerGroup,
    socialMedia,
    teaser,
    ticketshop,
    projectContent,
    contact,
    twoColQuote,
    twoColTwoTitle,
    oneColOneTitle,
    blocks,
    imageSection,
    projectOverview,
    newsOverview,
    teamCarousel
  ]),
})
