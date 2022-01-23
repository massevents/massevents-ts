import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};



export type Activities = {
  __typename?: 'Activities';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  titleActivities?: Maybe<Scalars['String']>;
  activities?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ActivitiesFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  titleActivities?: Maybe<StringFilter>;
};

export type ActivitiesSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  titleActivities?: Maybe<SortOrder>;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Boolean']>;
};

export type Button = {
  __typename?: 'Button';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type ButtonFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
};

export type ButtonSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
};

export type Contact = {
  __typename?: 'Contact';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  team?: Maybe<Array<Maybe<TeamMember>>>;
};

export type ContactFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  address?: Maybe<StringFilter>;
};

export type ContactOrImageSectionOrNewsOverviewOrOneColOneTitleOrProjectOverviewOrTeamCarouselOrTwoColQuoteOrTwoColTwoTitle = Contact | ImageSection | NewsOverview | OneColOneTitle | ProjectOverview | TeamCarousel | TwoColQuote | TwoColTwoTitle;

export type ContactSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  address?: Maybe<SortOrder>;
};


export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Date']>;
};


export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
};

export type DocumentSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
};

export type ExternalLink = {
  __typename?: 'ExternalLink';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type ExternalLinkFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
};

export type ExternalLinkSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Float']>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  lat?: Maybe<FloatFilter>;
  lng?: Maybe<FloatFilter>;
  alt?: Maybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  lat?: Maybe<SortOrder>;
  lng?: Maybe<SortOrder>;
  alt?: Maybe<SortOrder>;
};

export type Header = {
  __typename?: 'Header';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  headerType?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  imageSrc?: Maybe<Image>;
  videoId?: Maybe<Scalars['String']>;
  delay?: Maybe<Scalars['String']>;
};

export type HeaderFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  headerType?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  imageSrc?: Maybe<ImageFilter>;
  videoId?: Maybe<StringFilter>;
  delay?: Maybe<StringFilter>;
};

export type HeaderSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  headerType?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  imageSrc?: Maybe<ImageSorting>;
  videoId?: Maybe<SortOrder>;
  delay?: Maybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['ID']>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  nin?: Maybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
};

export type ImageFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  asset?: Maybe<SanityImageAssetFilter>;
  hotspot?: Maybe<SanityImageHotspotFilter>;
  crop?: Maybe<SanityImageCropFilter>;
};

export type ImageSection = {
  __typename?: 'ImageSection';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  link?: Maybe<InternalExternalLink>;
};

export type ImageSectionFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  image?: Maybe<ImageFilter>;
  link?: Maybe<InternalExternalLinkFilter>;
};

export type ImageSectionSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  image?: Maybe<ImageSorting>;
  link?: Maybe<InternalExternalLinkSorting>;
};

export type ImageSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  hotspot?: Maybe<SanityImageHotspotSorting>;
  crop?: Maybe<SanityImageCropSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: Maybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt?: Maybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: Maybe<Scalars['Int']>;
};

export type InternalExternalLink = {
  __typename?: 'InternalExternalLink';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  /** Select the page */
  internalLink?: Maybe<Page>;
  externalLink?: Maybe<ExternalLink>;
};

export type InternalExternalLinkFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  linkType?: Maybe<StringFilter>;
  internalLink?: Maybe<PageFilter>;
  externalLink?: Maybe<ExternalLinkFilter>;
};

export type InternalExternalLinkSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  linkType?: Maybe<SortOrder>;
  externalLink?: Maybe<ExternalLinkSorting>;
};

export type News = Document & {
  __typename?: 'News';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  author?: Maybe<TeamMember>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  /** Body text */
  description?: Maybe<Scalars['String']>;
  header?: Maybe<Header>;
  Teaser?: Maybe<Teaser>;
  photoAlbum?: Maybe<Array<Maybe<Image>>>;
  seo?: Maybe<Seo>;
  route?: Maybe<Route>;
};

export type NewsFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  author?: Maybe<TeamMemberFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  header?: Maybe<HeaderFilter>;
  Teaser?: Maybe<TeaserFilter>;
  seo?: Maybe<SeoFilter>;
  route?: Maybe<RouteFilter>;
};

export type NewsOverview = {
  __typename?: 'NewsOverview';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  newsType?: Maybe<Scalars['String']>;
  news?: Maybe<Array<Maybe<News>>>;
  button_enable?: Maybe<Scalars['Boolean']>;
  button_url?: Maybe<Page>;
  button_label?: Maybe<Scalars['String']>;
};

export type NewsOverviewFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  newsType?: Maybe<StringFilter>;
  button_enable?: Maybe<BooleanFilter>;
  button_url?: Maybe<PageFilter>;
  button_label?: Maybe<StringFilter>;
};

export type NewsOverviewSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  newsType?: Maybe<SortOrder>;
  button_enable?: Maybe<SortOrder>;
  button_label?: Maybe<SortOrder>;
};

export type NewsSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  header?: Maybe<HeaderSorting>;
  Teaser?: Maybe<TeaserSorting>;
  seo?: Maybe<SeoSorting>;
  route?: Maybe<RouteSorting>;
};

export type OneColOneTitle = {
  __typename?: 'OneColOneTitle';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  col?: Maybe<Scalars['String']>;
};

export type OneColOneTitleFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  col?: Maybe<StringFilter>;
};

export type OneColOneTitleSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  col?: Maybe<SortOrder>;
};

export type Page = Document & {
  __typename?: 'Page';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
  header?: Maybe<Header>;
  seo?: Maybe<Seo>;
  route?: Maybe<Route>;
  blocks?: Maybe<Array<Maybe<ContactOrImageSectionOrNewsOverviewOrOneColOneTitleOrProjectOverviewOrTeamCarouselOrTwoColQuoteOrTwoColTwoTitle>>>;
};

export type PageFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
  header?: Maybe<HeaderFilter>;
  seo?: Maybe<SeoFilter>;
  route?: Maybe<RouteFilter>;
};

export type PageSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  title?: Maybe<SortOrder>;
  header?: Maybe<HeaderSorting>;
  seo?: Maybe<SeoSorting>;
  route?: Maybe<RouteSorting>;
};

export type PartnerGroup = {
  __typename?: 'PartnerGroup';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  sponsorType?: Maybe<Scalars['String']>;
  sponsors?: Maybe<Array<Maybe<Sponsor>>>;
};

export type PartnerGroupFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
  sponsorType?: Maybe<StringFilter>;
};

export type PartnerGroupSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  sponsorType?: Maybe<SortOrder>;
};

export type Project = Document & {
  __typename?: 'Project';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  ticketshop?: Maybe<Ticketshop>;
  projectContent?: Maybe<ProjectContent>;
  /** Body text */
  description?: Maybe<Scalars['String']>;
  header?: Maybe<Header>;
  teaser?: Maybe<Teaser>;
  sponsors?: Maybe<Sponsors>;
  activiteiten?: Maybe<Activities>;
  logo?: Maybe<Image>;
  poster?: Maybe<Image>;
  photoAlbum?: Maybe<Array<Maybe<Image>>>;
  socialMedia?: Maybe<SocialMedia>;
  seo?: Maybe<Seo>;
  route?: Maybe<Route>;
};

export type ProjectContent = {
  __typename?: 'ProjectContent';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  customContent?: Maybe<Scalars['String']>;
  shortDescriptionTitle?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  massEventsTitle?: Maybe<Scalars['String']>;
  massEvents?: Maybe<Scalars['String']>;
};

export type ProjectContentFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  contentType?: Maybe<StringFilter>;
  customContent?: Maybe<StringFilter>;
  shortDescriptionTitle?: Maybe<StringFilter>;
  shortDescription?: Maybe<StringFilter>;
  massEventsTitle?: Maybe<StringFilter>;
  massEvents?: Maybe<StringFilter>;
};

export type ProjectContentSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  contentType?: Maybe<SortOrder>;
  customContent?: Maybe<SortOrder>;
  shortDescriptionTitle?: Maybe<SortOrder>;
  shortDescription?: Maybe<SortOrder>;
  massEventsTitle?: Maybe<SortOrder>;
  massEvents?: Maybe<SortOrder>;
};

export type ProjectFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  ticketshop?: Maybe<TicketshopFilter>;
  projectContent?: Maybe<ProjectContentFilter>;
  description?: Maybe<StringFilter>;
  header?: Maybe<HeaderFilter>;
  teaser?: Maybe<TeaserFilter>;
  sponsors?: Maybe<SponsorsFilter>;
  activiteiten?: Maybe<ActivitiesFilter>;
  logo?: Maybe<ImageFilter>;
  poster?: Maybe<ImageFilter>;
  socialMedia?: Maybe<SocialMediaFilter>;
  seo?: Maybe<SeoFilter>;
  route?: Maybe<RouteFilter>;
};

export type ProjectOverview = {
  __typename?: 'ProjectOverview';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  headingTitle?: Maybe<Scalars['String']>;
  headingSubTitle?: Maybe<Scalars['String']>;
  projectsType?: Maybe<Scalars['String']>;
  projects?: Maybe<Array<Maybe<Project>>>;
  format?: Maybe<Scalars['String']>;
  button_enable?: Maybe<Scalars['Boolean']>;
  button_url?: Maybe<Page>;
  button_label?: Maybe<Scalars['String']>;
};

export type ProjectOverviewFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  headingTitle?: Maybe<StringFilter>;
  headingSubTitle?: Maybe<StringFilter>;
  projectsType?: Maybe<StringFilter>;
  format?: Maybe<StringFilter>;
  button_enable?: Maybe<BooleanFilter>;
  button_url?: Maybe<PageFilter>;
  button_label?: Maybe<StringFilter>;
};

export type ProjectOverviewSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  headingTitle?: Maybe<SortOrder>;
  headingSubTitle?: Maybe<SortOrder>;
  projectsType?: Maybe<SortOrder>;
  format?: Maybe<SortOrder>;
  button_enable?: Maybe<SortOrder>;
  button_label?: Maybe<SortOrder>;
};

export type ProjectSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  ticketshop?: Maybe<TicketshopSorting>;
  projectContent?: Maybe<ProjectContentSorting>;
  description?: Maybe<SortOrder>;
  header?: Maybe<HeaderSorting>;
  teaser?: Maybe<TeaserSorting>;
  sponsors?: Maybe<SponsorsSorting>;
  activiteiten?: Maybe<ActivitiesSorting>;
  logo?: Maybe<ImageSorting>;
  poster?: Maybe<ImageSorting>;
  socialMedia?: Maybe<SocialMediaSorting>;
  seo?: Maybe<SeoSorting>;
  route?: Maybe<RouteSorting>;
};

export type Redirect = Document & {
  __typename?: 'Redirect';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  urlToRedirectTo?: Maybe<Scalars['String']>;
};

export type RedirectFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  urlToRedirectTo?: Maybe<StringFilter>;
};

export type RedirectSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  urlToRedirectTo?: Maybe<SortOrder>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  Redirect?: Maybe<Redirect>;
  SiteConfig?: Maybe<SiteConfig>;
  Project?: Maybe<Project>;
  Page?: Maybe<Page>;
  News?: Maybe<News>;
  TeamMember?: Maybe<TeamMember>;
  Sponsor?: Maybe<Sponsor>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  Document?: Maybe<Document>;
  allRedirect: Array<Redirect>;
  allSiteConfig: Array<SiteConfig>;
  allProject: Array<Project>;
  allPage: Array<Page>;
  allNews: Array<News>;
  allTeamMember: Array<TeamMember>;
  allSponsor: Array<Sponsor>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allDocument: Array<Document>;
};


export type RootQueryRedirectArgs = {
  id: Scalars['ID'];
};


export type RootQuerySiteConfigArgs = {
  id: Scalars['ID'];
};


export type RootQueryProjectArgs = {
  id: Scalars['ID'];
};


export type RootQueryPageArgs = {
  id: Scalars['ID'];
};


export type RootQueryNewsArgs = {
  id: Scalars['ID'];
};


export type RootQueryTeamMemberArgs = {
  id: Scalars['ID'];
};


export type RootQuerySponsorArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllRedirectArgs = {
  where?: Maybe<RedirectFilter>;
  sort?: Maybe<Array<RedirectSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSiteConfigArgs = {
  where?: Maybe<SiteConfigFilter>;
  sort?: Maybe<Array<SiteConfigSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllProjectArgs = {
  where?: Maybe<ProjectFilter>;
  sort?: Maybe<Array<ProjectSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllPageArgs = {
  where?: Maybe<PageFilter>;
  sort?: Maybe<Array<PageSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllNewsArgs = {
  where?: Maybe<NewsFilter>;
  sort?: Maybe<Array<NewsSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllTeamMemberArgs = {
  where?: Maybe<TeamMemberFilter>;
  sort?: Maybe<Array<TeamMemberSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSponsorArgs = {
  where?: Maybe<SponsorFilter>;
  sort?: Maybe<Array<SponsorSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSanityImageAssetArgs = {
  where?: Maybe<SanityImageAssetFilter>;
  sort?: Maybe<Array<SanityImageAssetSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllSanityFileAssetArgs = {
  where?: Maybe<SanityFileAssetFilter>;
  sort?: Maybe<Array<SanityFileAssetSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type RootQueryAllDocumentArgs = {
  where?: Maybe<DocumentFilter>;
  sort?: Maybe<Array<DocumentSorting>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Route = {
  __typename?: 'Route';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** For search engines. Will be added to /sitemap.xml */
  includeInSitemap?: Maybe<Scalars['Boolean']>;
  /** Hide this route for search engines */
  disallowRobots?: Maybe<Scalars['Boolean']>;
};

export type RouteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  includeInSitemap?: Maybe<BooleanFilter>;
  disallowRobots?: Maybe<BooleanFilter>;
};

export type RouteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  includeInSitemap?: Maybe<SortOrder>;
  disallowRobots?: Maybe<SortOrder>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  altText?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type SanityFileAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  originalFilename?: Maybe<StringFilter>;
  label?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  altText?: Maybe<StringFilter>;
  sha1hash?: Maybe<StringFilter>;
  extension?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  size?: Maybe<FloatFilter>;
  assetId?: Maybe<StringFilter>;
  uploadId?: Maybe<StringFilter>;
  path?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  metadata?: Maybe<SanityImageMetadataFilter>;
  source?: Maybe<SanityAssetSourceDataFilter>;
};

export type SanityImageAssetSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  originalFilename?: Maybe<SortOrder>;
  label?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  altText?: Maybe<SortOrder>;
  sha1hash?: Maybe<SortOrder>;
  extension?: Maybe<SortOrder>;
  mimeType?: Maybe<SortOrder>;
  size?: Maybe<SortOrder>;
  assetId?: Maybe<SortOrder>;
  uploadId?: Maybe<SortOrder>;
  path?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  metadata?: Maybe<SanityImageMetadataSorting>;
  source?: Maybe<SanityAssetSourceDataSorting>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  top?: Maybe<FloatFilter>;
  bottom?: Maybe<FloatFilter>;
  left?: Maybe<FloatFilter>;
  right?: Maybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  top?: Maybe<SortOrder>;
  bottom?: Maybe<SortOrder>;
  left?: Maybe<SortOrder>;
  right?: Maybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
  aspectRatio?: Maybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
  aspectRatio?: Maybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  x?: Maybe<FloatFilter>;
  y?: Maybe<FloatFilter>;
  height?: Maybe<FloatFilter>;
  width?: Maybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  x?: Maybe<SortOrder>;
  y?: Maybe<SortOrder>;
  height?: Maybe<SortOrder>;
  width?: Maybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<Geopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
};

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  location?: Maybe<GeopointFilter>;
  dimensions?: Maybe<SanityImageDimensionsFilter>;
  palette?: Maybe<SanityImagePaletteFilter>;
  lqip?: Maybe<StringFilter>;
  blurHash?: Maybe<StringFilter>;
  hasAlpha?: Maybe<BooleanFilter>;
  isOpaque?: Maybe<BooleanFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  location?: Maybe<GeopointSorting>;
  dimensions?: Maybe<SanityImageDimensionsSorting>;
  palette?: Maybe<SanityImagePaletteSorting>;
  lqip?: Maybe<SortOrder>;
  blurHash?: Maybe<SortOrder>;
  hasAlpha?: Maybe<SortOrder>;
  isOpaque?: Maybe<SortOrder>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>;
  dominant?: Maybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>;
  muted?: Maybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>;
  dominant?: Maybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>;
  muted?: Maybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  background?: Maybe<StringFilter>;
  foreground?: Maybe<StringFilter>;
  population?: Maybe<FloatFilter>;
  title?: Maybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  background?: Maybe<SortOrder>;
  foreground?: Maybe<SortOrder>;
  population?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents referencing the given document ID. */
  references?: Maybe<Scalars['ID']>;
  /** All documents that are drafts. */
  is_draft?: Maybe<Scalars['Boolean']>;
};

export type Seo = {
  __typename?: 'Seo';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** This description populates meta-tags on the webpage */
  description?: Maybe<Scalars['String']>;
  openGraphImage?: Maybe<Image>;
};

export type SeoFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  openGraphImage?: Maybe<ImageFilter>;
};

export type SeoSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  openGraphImage?: Maybe<ImageSorting>;
};

export type SiteConfig = Document & {
  __typename?: 'SiteConfig';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  /** The main site url. Used to create canonical url */
  url?: Maybe<Scalars['String']>;
  /** Main contact emailaddress */
  email?: Maybe<Scalars['String']>;
  mainNavigation?: Maybe<Array<Maybe<InternalExternalLink>>>;
};

export type SiteConfigFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
};

export type SiteConfigSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  current?: Maybe<StringFilter>;
};

export type SlugSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  current?: Maybe<SortOrder>;
};

export type SocialMedia = {
  __typename?: 'SocialMedia';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  facebookUrl?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  spotifyUrl?: Maybe<Scalars['String']>;
  websiteUrl?: Maybe<Scalars['String']>;
};

export type SocialMediaFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  facebookUrl?: Maybe<StringFilter>;
  instagramUrl?: Maybe<StringFilter>;
  linkedinUrl?: Maybe<StringFilter>;
  spotifyUrl?: Maybe<StringFilter>;
  websiteUrl?: Maybe<StringFilter>;
};

export type SocialMediaSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  facebookUrl?: Maybe<SortOrder>;
  instagramUrl?: Maybe<SortOrder>;
  linkedinUrl?: Maybe<SortOrder>;
  spotifyUrl?: Maybe<SortOrder>;
  websiteUrl?: Maybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type Sponsor = Document & {
  __typename?: 'Sponsor';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  url?: Maybe<Scalars['String']>;
  logo?: Maybe<Image>;
  seo?: Maybe<Seo>;
};

export type SponsorFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  url?: Maybe<StringFilter>;
  logo?: Maybe<ImageFilter>;
  seo?: Maybe<SeoFilter>;
};

export type SponsorSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  url?: Maybe<SortOrder>;
  logo?: Maybe<ImageSorting>;
  seo?: Maybe<SeoSorting>;
};

export type Sponsors = {
  __typename?: 'Sponsors';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  titleSponsors?: Maybe<Scalars['String']>;
  partners?: Maybe<Array<Maybe<PartnerGroup>>>;
};

export type SponsorsFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  titleSponsors?: Maybe<StringFilter>;
};

export type SponsorsSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  titleSponsors?: Maybe<SortOrder>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: Maybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: Maybe<Scalars['String']>;
  /** Checks if the value matches the given word/words. */
  matches?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  nin?: Maybe<Array<Scalars['String']>>;
};

export type TeamCarousel = {
  __typename?: 'TeamCarousel';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  people?: Maybe<Array<Maybe<TeamMember>>>;
};

export type TeamCarouselFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
};

export type TeamCarouselSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
};

export type TeamMember = Document & {
  __typename?: 'TeamMember';
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
  header?: Maybe<Header>;
  email?: Maybe<Scalars['String']>;
  roles?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  seo?: Maybe<Seo>;
};

export type TeamMemberFilter = {
  /** Apply filters on document level */
  _?: Maybe<Sanity_DocumentFilter>;
  _id?: Maybe<IdFilter>;
  _type?: Maybe<StringFilter>;
  _createdAt?: Maybe<DatetimeFilter>;
  _updatedAt?: Maybe<DatetimeFilter>;
  _rev?: Maybe<StringFilter>;
  _key?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  slug?: Maybe<SlugFilter>;
  header?: Maybe<HeaderFilter>;
  email?: Maybe<StringFilter>;
  roles?: Maybe<StringFilter>;
  image?: Maybe<ImageFilter>;
  seo?: Maybe<SeoFilter>;
};

export type TeamMemberSorting = {
  _id?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  _createdAt?: Maybe<SortOrder>;
  _updatedAt?: Maybe<SortOrder>;
  _rev?: Maybe<SortOrder>;
  _key?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  slug?: Maybe<SlugSorting>;
  header?: Maybe<HeaderSorting>;
  email?: Maybe<SortOrder>;
  roles?: Maybe<SortOrder>;
  image?: Maybe<ImageSorting>;
  seo?: Maybe<SeoSorting>;
};

export type Teaser = {
  __typename?: 'Teaser';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** This will be displayed on overview pages etc. */
  title?: Maybe<Scalars['String']>;
  /** This will be displayed on overview pages etc. */
  description?: Maybe<Scalars['String']>;
  imageSrc?: Maybe<Image>;
};

export type TeaserFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  imageSrc?: Maybe<ImageFilter>;
};

export type TeaserSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  imageSrc?: Maybe<ImageSorting>;
};

export type Ticketshop = {
  __typename?: 'Ticketshop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  buttonLabel?: Maybe<Scalars['String']>;
};

export type TicketshopFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  url?: Maybe<StringFilter>;
  buttonLabel?: Maybe<StringFilter>;
};

export type TicketshopSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  url?: Maybe<SortOrder>;
  buttonLabel?: Maybe<SortOrder>;
};

export type TwoColQuote = {
  __typename?: 'TwoColQuote';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  leftCol?: Maybe<Scalars['String']>;
  rightCol?: Maybe<Scalars['String']>;
  quote?: Maybe<Scalars['String']>;
};

export type TwoColQuoteFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  title?: Maybe<StringFilter>;
  subtitle?: Maybe<StringFilter>;
  leftCol?: Maybe<StringFilter>;
  rightCol?: Maybe<StringFilter>;
  quote?: Maybe<StringFilter>;
};

export type TwoColQuoteSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  subtitle?: Maybe<SortOrder>;
  leftCol?: Maybe<SortOrder>;
  rightCol?: Maybe<SortOrder>;
  quote?: Maybe<SortOrder>;
};

export type TwoColTwoTitle = {
  __typename?: 'TwoColTwoTitle';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  leftTitle?: Maybe<Scalars['String']>;
  leftSubtitle?: Maybe<Scalars['String']>;
  leftCol?: Maybe<Scalars['String']>;
  rightTitle?: Maybe<Scalars['String']>;
  rightSubtitle?: Maybe<Scalars['String']>;
  rightCol?: Maybe<Scalars['String']>;
};

export type TwoColTwoTitleFilter = {
  _key?: Maybe<StringFilter>;
  _type?: Maybe<StringFilter>;
  leftTitle?: Maybe<StringFilter>;
  leftSubtitle?: Maybe<StringFilter>;
  leftCol?: Maybe<StringFilter>;
  rightTitle?: Maybe<StringFilter>;
  rightSubtitle?: Maybe<StringFilter>;
  rightCol?: Maybe<StringFilter>;
};

export type TwoColTwoTitleSorting = {
  _key?: Maybe<SortOrder>;
  _type?: Maybe<SortOrder>;
  leftTitle?: Maybe<SortOrder>;
  leftSubtitle?: Maybe<SortOrder>;
  leftCol?: Maybe<SortOrder>;
  rightTitle?: Maybe<SortOrder>;
  rightSubtitle?: Maybe<SortOrder>;
  rightCol?: Maybe<SortOrder>;
};

export type ContactFragment = (
  { __typename?: 'Contact' }
  & Pick<Contact, '_key' | '_type' | 'title' | 'subtitle' | 'address'>
  & { team?: Maybe<Array<Maybe<(
    { __typename?: 'TeamMember' }
    & TeamMemberFragment
  )>>> }
);

export type ImageSectionFragment = (
  { __typename?: 'ImageSection' }
  & Pick<ImageSection, '_key' | '_type'>
  & { link?: Maybe<(
    { __typename?: 'InternalExternalLink' }
    & InternalExternalLinkFragment
  )>, image?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )> }
);

export type NewsOverviewFragment = (
  { __typename?: 'NewsOverview' }
  & Pick<NewsOverview, '_key' | '_type' | 'title' | 'subtitle' | 'newsType' | 'button_enable' | 'button_label'>
  & { button_url?: Maybe<(
    { __typename?: 'Page' }
    & PageRouteFragment
  )>, news?: Maybe<Array<Maybe<(
    { __typename?: 'News' }
    & NewsTeaserFragment
  )>>> }
);

export type OneColOneTitleFragment = (
  { __typename?: 'OneColOneTitle' }
  & Pick<OneColOneTitle, '_key' | '_type' | 'title' | 'subtitle' | 'col'>
);

export type ProjectOverviewFragment = (
  { __typename?: 'ProjectOverview' }
  & Pick<ProjectOverview, '_key' | '_type' | 'headingTitle' | 'headingSubTitle' | 'projectsType' | 'format' | 'button_enable' | 'button_label'>
  & { button_url?: Maybe<(
    { __typename?: 'Page' }
    & PageRouteFragment
  )>, projects?: Maybe<Array<Maybe<(
    { __typename?: 'Project' }
    & ProjectTeaserFragment
  )>>> }
);

export type TeamCarouselFragment = (
  { __typename?: 'TeamCarousel' }
  & Pick<TeamCarousel, '_key' | '_type'>
  & { people?: Maybe<Array<Maybe<(
    { __typename?: 'TeamMember' }
    & TeamMemberFragment
  )>>> }
);

export type TwoColQuoteFragment = (
  { __typename?: 'TwoColQuote' }
  & Pick<TwoColQuote, '_key' | '_type' | 'title' | 'subtitle' | 'quote' | 'leftCol' | 'rightCol'>
);

export type TwoColTwoTitleFragment = (
  { __typename?: 'TwoColTwoTitle' }
  & Pick<TwoColTwoTitle, '_key' | '_type' | 'leftTitle' | 'leftSubtitle' | 'rightTitle' | 'rightSubtitle' | 'leftCol' | 'rightCol'>
);

export type NewsQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type NewsQuery = (
  { __typename?: 'RootQuery' }
  & { allNews: Array<(
    { __typename?: 'News' }
    & Pick<News, '_key' | '_type'>
    & NewsFragment
  )> }
);

export type RecentNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentNewsQuery = (
  { __typename?: 'RootQuery' }
  & { allNews: Array<(
    { __typename?: 'News' }
    & Pick<News, '_key' | '_type'>
    & NewsTeaserFragment
  )> }
);

export type AllNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllNewsQuery = (
  { __typename?: 'RootQuery' }
  & { allNews: Array<(
    { __typename?: 'News' }
    & Pick<News, '_key' | '_type'>
    & NewsTeaserFragment
  )> }
);

export type NewsFragment = (
  { __typename?: 'News' }
  & Pick<News, 'title' | '_updatedAt' | '_createdAt' | 'description'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, Teaser?: Maybe<(
    { __typename?: 'Teaser' }
    & TeaserFragment
  )>, header?: Maybe<(
    { __typename?: 'Header' }
    & HeaderFragment
  )>, seo?: Maybe<(
    { __typename?: 'Seo' }
    & SeoFragment
  )>, photoAlbum?: Maybe<Array<Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )>>>, author?: Maybe<(
    { __typename?: 'TeamMember' }
    & TeamMemberFragment
  )> }
);

export type NewsRouteFragment = (
  { __typename?: 'News' }
  & Pick<News, 'title'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, Teaser?: Maybe<(
    { __typename?: 'Teaser' }
    & TeaserFragment
  )> }
);

export type NewsTeaserFragment = (
  { __typename?: 'News' }
  & Pick<News, 'title'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, Teaser?: Maybe<(
    { __typename?: 'Teaser' }
    & TeaserFragment
  )> }
);

export type TeaserFragment = (
  { __typename?: 'Teaser' }
  & Pick<Teaser, '_key' | '_type' | 'title' | 'description'>
  & { imageSrc?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )> }
);

export type PageQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type PageQuery = (
  { __typename?: 'RootQuery' }
  & { allPage: Array<(
    { __typename?: 'Page' }
    & Pick<Page, '_key' | '_type'>
    & PageFragment
  )> }
);

export type PageFragment = (
  { __typename?: 'Page' }
  & Pick<Page, 'title'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, header?: Maybe<(
    { __typename?: 'Header' }
    & HeaderFragment
  )>, seo?: Maybe<(
    { __typename?: 'Seo' }
    & SeoFragment
  )>, blocks?: Maybe<Array<Maybe<(
    { __typename?: 'Contact' }
    & ContactFragment
  ) | (
    { __typename?: 'ImageSection' }
    & ImageSectionFragment
  ) | (
    { __typename?: 'NewsOverview' }
    & NewsOverviewFragment
  ) | (
    { __typename?: 'OneColOneTitle' }
    & OneColOneTitleFragment
  ) | (
    { __typename?: 'ProjectOverview' }
    & ProjectOverviewFragment
  ) | (
    { __typename?: 'TeamCarousel' }
    & TeamCarouselFragment
  ) | (
    { __typename?: 'TwoColQuote' }
    & TwoColQuoteFragment
  ) | (
    { __typename?: 'TwoColTwoTitle' }
    & TwoColTwoTitleFragment
  )>>> }
);

export type PageRouteFragment = (
  { __typename?: 'Page' }
  & Pick<Page, 'title'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )> }
);

export type PageTeaserFragment = (
  { __typename?: 'Page' }
  & Pick<Page, 'title'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )> }
);

export type ProjectQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type ProjectQuery = (
  { __typename?: 'RootQuery' }
  & { allProject: Array<(
    { __typename?: 'Project' }
    & Pick<Project, '_key' | '_type'>
    & ProjectFragment
  )> }
);

export type RecentProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentProjectsQuery = (
  { __typename?: 'RootQuery' }
  & { allProject: Array<(
    { __typename?: 'Project' }
    & Pick<Project, '_key' | '_type'>
    & ProjectTeaserFragment
  )> }
);

export type AllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectsQuery = (
  { __typename?: 'RootQuery' }
  & { allProject: Array<(
    { __typename?: 'Project' }
    & Pick<Project, '_key' | '_type'>
    & ProjectTeaserFragment
  )> }
);

export type ProjectFragment = (
  { __typename?: 'Project' }
  & Pick<Project, 'title' | 'description'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, header?: Maybe<(
    { __typename?: 'Header' }
    & HeaderFragment
  )>, seo?: Maybe<(
    { __typename?: 'Seo' }
    & SeoFragment
  )>, projectContent?: Maybe<(
    { __typename?: 'ProjectContent' }
    & Pick<ProjectContent, 'shortDescriptionTitle' | 'shortDescription' | 'massEventsTitle' | 'massEvents' | 'customContent'>
  )>, photoAlbum?: Maybe<Array<Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )>>>, logo?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )>, poster?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )>, activiteiten?: Maybe<(
    { __typename?: 'Activities' }
    & Pick<Activities, 'titleActivities' | 'activities'>
  )>, sponsors?: Maybe<(
    { __typename?: 'Sponsors' }
    & Pick<Sponsors, 'titleSponsors'>
    & { partners?: Maybe<Array<Maybe<(
      { __typename?: 'PartnerGroup' }
      & Pick<PartnerGroup, 'type' | 'sponsorType'>
      & { sponsors?: Maybe<Array<Maybe<(
        { __typename?: 'Sponsor' }
        & SponsorFragment
      )>>> }
    )>>> }
  )>, socialMedia?: Maybe<(
    { __typename?: 'SocialMedia' }
    & Pick<SocialMedia, 'facebookUrl' | 'instagramUrl' | 'linkedinUrl' | 'spotifyUrl' | 'websiteUrl'>
  )>, ticketshop?: Maybe<(
    { __typename?: 'Ticketshop' }
    & Pick<Ticketshop, '_key' | '_type' | 'url' | 'buttonLabel'>
  )>, teaser?: Maybe<(
    { __typename?: 'Teaser' }
    & TeaserFragment
  )> }
);

export type ProjectRouteFragment = (
  { __typename?: 'Project' }
  & Pick<Project, 'title'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )> }
);

export type ProjectTeaserFragment = (
  { __typename?: 'Project' }
  & Pick<Project, 'title'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, teaser?: Maybe<(
    { __typename?: 'Teaser' }
    & TeaserFragment
  )>, logo?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )>, poster?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )> }
);

export type SiteConfigQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SiteConfigQuery = (
  { __typename?: 'RootQuery' }
  & { SiteConfig?: Maybe<(
    { __typename?: 'SiteConfig' }
    & Pick<SiteConfig, '_id' | 'title' | 'url' | 'email'>
    & { mainNavigation?: Maybe<Array<Maybe<(
      { __typename?: 'InternalExternalLink' }
      & Pick<InternalExternalLink, '_key' | '_type' | 'linkType'>
      & { internalLink?: Maybe<(
        { __typename?: 'Page' }
        & PageRouteFragment
      )>, externalLink?: Maybe<(
        { __typename?: 'ExternalLink' }
        & Pick<ExternalLink, 'url' | 'label'>
      )> }
    )>>> }
  )> }
);

export type SponsorQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type SponsorQuery = (
  { __typename?: 'RootQuery' }
  & { allSponsor: Array<(
    { __typename?: 'Sponsor' }
    & Pick<Sponsor, '_key' | '_type'>
    & SponsorFragment
  )> }
);

export type SponsorFragment = (
  { __typename?: 'Sponsor' }
  & Pick<Sponsor, 'title' | 'url'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, logo?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )>, seo?: Maybe<(
    { __typename?: 'Seo' }
    & SeoFragment
  )> }
);

export type TeamMemberQueryVariables = Exact<{
  slug?: Maybe<Scalars['String']>;
}>;


export type TeamMemberQuery = (
  { __typename?: 'RootQuery' }
  & { allTeamMember: Array<(
    { __typename?: 'TeamMember' }
    & Pick<TeamMember, '_key' | '_type'>
    & TeamMemberFragment
  )> }
);

export type TeamMemberFragment = (
  { __typename?: 'TeamMember' }
  & Pick<TeamMember, 'name' | 'email' | 'roles'>
  & { slug?: Maybe<(
    { __typename?: 'Slug' }
    & Pick<Slug, 'current'>
  )>, image?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )>, seo?: Maybe<(
    { __typename?: 'Seo' }
    & SeoFragment
  )> }
);

export type HeaderFragment = (
  { __typename?: 'Header' }
  & Pick<Header, '_key' | '_type' | 'headerType' | 'title' | 'subtitle' | 'videoId' | 'delay'>
  & { imageSrc?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )> }
);

export type ImageFragment = (
  { __typename?: 'Image' }
  & Pick<Image, '_key' | '_type'>
  & { asset?: Maybe<(
    { __typename?: 'SanityImageAsset' }
    & ImageSourceFragment
  )> }
);

export type ImageSourceFragment = (
  { __typename?: 'SanityImageAsset' }
  & Pick<SanityImageAsset, '_key' | '_type' | 'url' | 'altText'>
  & { metadata?: Maybe<(
    { __typename?: 'SanityImageMetadata' }
    & { dimensions?: Maybe<(
      { __typename?: 'SanityImageDimensions' }
      & Pick<SanityImageDimensions, 'aspectRatio'>
    )> }
  )> }
);

export type InternalExternalLinkFragment = (
  { __typename?: 'InternalExternalLink' }
  & { internalLink?: Maybe<(
    { __typename?: 'Page' }
    & PageRouteFragment
  )>, externalLink?: Maybe<(
    { __typename?: 'ExternalLink' }
    & Pick<ExternalLink, 'url' | 'label'>
  )> }
);

export type SeoFragment = (
  { __typename?: 'Seo' }
  & Pick<Seo, 'title' | 'description'>
  & { openGraphImage?: Maybe<(
    { __typename?: 'Image' }
    & ImageFragment
  )> }
);

export type SlugFragment = (
  { __typename?: 'Slug' }
  & Pick<Slug, 'current'>
);

export const ImageSourceFragmentDoc = gql`
    fragment ImageSource on SanityImageAsset {
  _key
  _type
  url
  altText
  metadata {
    dimensions {
      aspectRatio
    }
  }
}
    `;
export const ImageFragmentDoc = gql`
    fragment Image on Image {
  _key
  _type
  asset {
    ...ImageSource
  }
}
    ${ImageSourceFragmentDoc}`;
export const TeaserFragmentDoc = gql`
    fragment Teaser on Teaser {
  _key
  _type
  title
  description
  imageSrc {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const HeaderFragmentDoc = gql`
    fragment Header on Header {
  _key
  _type
  headerType
  title
  subtitle
  imageSrc {
    ...Image
  }
  videoId
  delay
}
    ${ImageFragmentDoc}`;
export const SeoFragmentDoc = gql`
    fragment Seo on Seo {
  title
  description
  openGraphImage {
    ...Image
  }
}
    ${ImageFragmentDoc}`;
export const TeamMemberFragmentDoc = gql`
    fragment TeamMember on TeamMember {
  name
  slug {
    current
  }
  email
  roles
  image {
    ...Image
  }
  seo {
    ...Seo
  }
}
    ${ImageFragmentDoc}
${SeoFragmentDoc}`;
export const NewsFragmentDoc = gql`
    fragment News on News {
  title
  _updatedAt
  _createdAt
  slug {
    current
  }
  Teaser {
    ...Teaser
  }
  header {
    ...Header
  }
  seo {
    ...Seo
  }
  photoAlbum {
    ...Image
  }
  description
  author {
    ...TeamMember
  }
}
    ${TeaserFragmentDoc}
${HeaderFragmentDoc}
${SeoFragmentDoc}
${ImageFragmentDoc}
${TeamMemberFragmentDoc}`;
export const NewsRouteFragmentDoc = gql`
    fragment NewsRoute on News {
  title
  slug {
    current
  }
  Teaser {
    ...Teaser
  }
}
    ${TeaserFragmentDoc}`;
export const ContactFragmentDoc = gql`
    fragment Contact on Contact {
  _key
  _type
  title
  subtitle
  address
  team {
    ...TeamMember
  }
}
    ${TeamMemberFragmentDoc}`;
export const TwoColQuoteFragmentDoc = gql`
    fragment TwoColQuote on TwoColQuote {
  _key
  _type
  title
  subtitle
  quote
  leftCol
  rightCol
}
    `;
export const TwoColTwoTitleFragmentDoc = gql`
    fragment TwoColTwoTitle on TwoColTwoTitle {
  _key
  _type
  leftTitle
  leftSubtitle
  rightTitle
  rightSubtitle
  leftCol
  rightCol
}
    `;
export const OneColOneTitleFragmentDoc = gql`
    fragment OneColOneTitle on OneColOneTitle {
  _key
  _type
  title
  subtitle
  col
}
    `;
export const PageRouteFragmentDoc = gql`
    fragment PageRoute on Page {
  title
  slug {
    current
  }
}
    `;
export const InternalExternalLinkFragmentDoc = gql`
    fragment InternalExternalLink on InternalExternalLink {
  internalLink {
    ...PageRoute
  }
  externalLink {
    url
    label
  }
}
    ${PageRouteFragmentDoc}`;
export const ImageSectionFragmentDoc = gql`
    fragment ImageSection on ImageSection {
  _key
  _type
  link {
    ...InternalExternalLink
  }
  image {
    ...Image
  }
}
    ${InternalExternalLinkFragmentDoc}
${ImageFragmentDoc}`;
export const NewsTeaserFragmentDoc = gql`
    fragment NewsTeaser on News {
  title
  slug {
    current
  }
  Teaser {
    ...Teaser
  }
}
    ${TeaserFragmentDoc}`;
export const NewsOverviewFragmentDoc = gql`
    fragment NewsOverview on NewsOverview {
  _key
  _type
  title
  subtitle
  newsType
  button_enable
  button_label
  button_url {
    ...PageRoute
  }
  news {
    ...NewsTeaser
  }
}
    ${PageRouteFragmentDoc}
${NewsTeaserFragmentDoc}`;
export const ProjectTeaserFragmentDoc = gql`
    fragment ProjectTeaser on Project {
  title
  slug {
    current
  }
  teaser {
    ...Teaser
  }
  logo {
    ...Image
  }
  poster {
    ...Image
  }
}
    ${TeaserFragmentDoc}
${ImageFragmentDoc}`;
export const ProjectOverviewFragmentDoc = gql`
    fragment ProjectOverview on ProjectOverview {
  _key
  _type
  headingTitle
  headingSubTitle
  projectsType
  format
  button_enable
  button_label
  button_url {
    ...PageRoute
  }
  projects {
    ...ProjectTeaser
  }
}
    ${PageRouteFragmentDoc}
${ProjectTeaserFragmentDoc}`;
export const TeamCarouselFragmentDoc = gql`
    fragment TeamCarousel on TeamCarousel {
  _key
  _type
  people {
    ...TeamMember
  }
}
    ${TeamMemberFragmentDoc}`;
export const PageFragmentDoc = gql`
    fragment Page on Page {
  title
  slug {
    current
  }
  header {
    ...Header
  }
  seo {
    ...Seo
  }
  blocks {
    ...Contact
    ...TwoColQuote
    ...TwoColTwoTitle
    ...OneColOneTitle
    ...ImageSection
    ...NewsOverview
    ...ProjectOverview
    ...TeamCarousel
  }
}
    ${HeaderFragmentDoc}
${SeoFragmentDoc}
${ContactFragmentDoc}
${TwoColQuoteFragmentDoc}
${TwoColTwoTitleFragmentDoc}
${OneColOneTitleFragmentDoc}
${ImageSectionFragmentDoc}
${NewsOverviewFragmentDoc}
${ProjectOverviewFragmentDoc}
${TeamCarouselFragmentDoc}`;
export const PageTeaserFragmentDoc = gql`
    fragment PageTeaser on Page {
  title
  slug {
    current
  }
}
    `;
export const SponsorFragmentDoc = gql`
    fragment Sponsor on Sponsor {
  title
  slug {
    current
  }
  url
  logo {
    ...Image
  }
  seo {
    ...Seo
  }
}
    ${ImageFragmentDoc}
${SeoFragmentDoc}`;
export const ProjectFragmentDoc = gql`
    fragment Project on Project {
  title
  slug {
    current
  }
  description
  header {
    ...Header
  }
  seo {
    ...Seo
  }
  projectContent {
    shortDescriptionTitle
    shortDescription
    massEventsTitle
    massEvents
    customContent
  }
  photoAlbum {
    ...Image
  }
  logo {
    ...Image
  }
  poster {
    ...Image
  }
  activiteiten {
    titleActivities
    activities
  }
  sponsors {
    titleSponsors
    partners {
      type
      sponsorType
      sponsors {
        ...Sponsor
      }
    }
  }
  socialMedia {
    facebookUrl
    instagramUrl
    linkedinUrl
    spotifyUrl
    websiteUrl
  }
  ticketshop {
    _key
    _type
    url
    buttonLabel
  }
  teaser {
    ...Teaser
  }
}
    ${HeaderFragmentDoc}
${SeoFragmentDoc}
${ImageFragmentDoc}
${SponsorFragmentDoc}
${TeaserFragmentDoc}`;
export const ProjectRouteFragmentDoc = gql`
    fragment ProjectRoute on Project {
  title
  slug {
    current
  }
}
    `;
export const SlugFragmentDoc = gql`
    fragment Slug on Slug {
  current
}
    `;
export const NewsDocument = gql`
    query News($slug: String) {
  allNews(where: {slug: {current: {eq: $slug}}}) {
    _key
    _type
    ...News
  }
}
    ${NewsFragmentDoc}`;
export const RecentNewsDocument = gql`
    query RecentNews {
  allNews(limit: 3) {
    _key
    _type
    ...NewsTeaser
  }
}
    ${NewsTeaserFragmentDoc}`;
export const AllNewsDocument = gql`
    query AllNews {
  allNews {
    _key
    _type
    ...NewsTeaser
  }
}
    ${NewsTeaserFragmentDoc}`;
export const PageDocument = gql`
    query Page($slug: String) {
  allPage(where: {slug: {current: {eq: $slug}}}) {
    _key
    _type
    ...Page
  }
}
    ${PageFragmentDoc}`;
export const ProjectDocument = gql`
    query Project($slug: String) {
  allProject(where: {slug: {current: {eq: $slug}}}) {
    _key
    _type
    ...Project
  }
}
    ${ProjectFragmentDoc}`;
export const RecentProjectsDocument = gql`
    query RecentProjects {
  allProject(limit: 3) {
    _key
    _type
    ...ProjectTeaser
  }
}
    ${ProjectTeaserFragmentDoc}`;
export const AllProjectsDocument = gql`
    query AllProjects {
  allProject {
    _key
    _type
    ...ProjectTeaser
  }
}
    ${ProjectTeaserFragmentDoc}`;
export const SiteConfigDocument = gql`
    query SiteConfig($id: ID!) {
  SiteConfig(id: $id) {
    _id
    title
    url
    email
    mainNavigation {
      _key
      _type
      linkType
      internalLink {
        ...PageRoute
      }
      externalLink {
        url
        label
      }
    }
  }
}
    ${PageRouteFragmentDoc}`;
export const SponsorDocument = gql`
    query Sponsor($slug: String) {
  allSponsor(where: {slug: {current: {eq: $slug}}}) {
    _key
    _type
    ...Sponsor
  }
}
    ${SponsorFragmentDoc}`;
export const TeamMemberDocument = gql`
    query TeamMember($slug: String) {
  allTeamMember(where: {slug: {current: {eq: $slug}}}) {
    _key
    _type
    ...TeamMember
  }
}
    ${TeamMemberFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    News(variables?: NewsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<NewsQuery>(NewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'News');
    },
    RecentNews(variables?: RecentNewsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RecentNewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RecentNewsQuery>(RecentNewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RecentNews');
    },
    AllNews(variables?: AllNewsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllNewsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllNewsQuery>(AllNewsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllNews');
    },
    Page(variables?: PageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PageQuery>(PageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Page');
    },
    Project(variables?: ProjectQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProjectQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProjectQuery>(ProjectDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Project');
    },
    RecentProjects(variables?: RecentProjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RecentProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<RecentProjectsQuery>(RecentProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RecentProjects');
    },
    AllProjects(variables?: AllProjectsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AllProjectsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AllProjectsQuery>(AllProjectsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'AllProjects');
    },
    SiteConfig(variables: SiteConfigQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SiteConfigQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SiteConfigQuery>(SiteConfigDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SiteConfig');
    },
    Sponsor(variables?: SponsorQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SponsorQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SponsorQuery>(SponsorDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Sponsor');
    },
    TeamMember(variables?: TeamMemberQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TeamMemberQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TeamMemberQuery>(TeamMemberDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'TeamMember');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "ContactOrImageSectionOrNewsOverviewOrOneColOneTitleOrProjectOverviewOrTeamCarouselOrTwoColQuoteOrTwoColTwoTitle": [
      "Contact",
      "ImageSection",
      "NewsOverview",
      "OneColOneTitle",
      "ProjectOverview",
      "TeamCarousel",
      "TwoColQuote",
      "TwoColTwoTitle"
    ],
    "Document": [
      "News",
      "Page",
      "Project",
      "Redirect",
      "SanityFileAsset",
      "SanityImageAsset",
      "SiteConfig",
      "Sponsor",
      "TeamMember"
    ]
  }
};
      export default result;
    