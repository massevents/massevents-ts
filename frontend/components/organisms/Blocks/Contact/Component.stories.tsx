import MainNavigation from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { siteConfigDefault } from "@misc/defaultData";

export default {
    title: 'Organisms/MainNavigation',
    component: MainNavigation,
} as ComponentMeta<typeof MainNavigation>

const Template: ComponentStory<typeof MainNavigation> = args => <MainNavigation {...args} />

export const Default = Template.bind({});


Default.args = {
    ...siteConfigDefault,
    "block": {
        "_key": "81bc5f809541",
        "_type": "contact",
        "title": "Neem contact met ons op",
        "subtitle": "Wil je ons bereiken?",
        "address": "#### MASS Events\nWesthaven 12\n\\\n2801 PH Gouda\n\\\n\\\n[0182 - 23 93 83](tel:0182239383)",
        "team": [
            {
                "name": "Gerben Roskam",
                "slug": {
                    "current": "team/gerben-roskam"
                },
                "email": "gerben@massevents.nl",
                "roles": "Mede-eigenaar, Zakelijk Leider",
                "image": {
                    "_key": null,
                    "_type": "image",
                    "asset": {
                        "_key": null,
                        "_type": "sanity.imageAsset",
                        "url": "https://cdn.sanity.io/images/hagk2r3y/production/dff94ef25f093db78d0bfa94c0e8151df30faa41-635x320.png",
                        "altText": null,
                        "metadata": {
                            "dimensions": {
                                "aspectRatio": 1.984375
                            }
                        }
                    }
                },
                "seo": {
                    "title": "Gerben Roskam",
                    "description": "Gerben Roskam",
                    "openGraphImage": {
                        "_key": null,
                        "_type": "image",
                        "asset": {
                            "_key": null,
                            "_type": "sanity.imageAsset",
                            "url": "https://cdn.sanity.io/images/hagk2r3y/production/dff94ef25f093db78d0bfa94c0e8151df30faa41-635x320.png",
                            "altText": null,
                            "metadata": {
                                "dimensions": {
                                    "aspectRatio": 1.984375
                                }
                            }
                        }
                    }
                }
            },
            {
                "name": "Thomas de Boer",
                "slug": {
                    "current": "team/thomas-de-boer"
                },
                "email": "thomas@massevents.nl",
                "roles": "Mede-eigenaar, Creatief Leider",
                "image": {
                    "_key": null,
                    "_type": "image",
                    "asset": {
                        "_key": null,
                        "_type": "sanity.imageAsset",
                        "url": "https://cdn.sanity.io/images/hagk2r3y/production/b327f16dfc41c78f7ddb241a34be1a4bbc0b1d6e-635x320.png",
                        "altText": null,
                        "metadata": {
                            "dimensions": {
                                "aspectRatio": 1.984375
                            }
                        }
                    }
                },
                "seo": {
                    "title": "Thomas de Boer",
                    "description": "Thomas de Boer",
                    "openGraphImage": {
                        "_key": null,
                        "_type": "image",
                        "asset": {
                            "_key": null,
                            "_type": "sanity.imageAsset",
                            "url": "https://cdn.sanity.io/images/hagk2r3y/production/b327f16dfc41c78f7ddb241a34be1a4bbc0b1d6e-635x320.png",
                            "altText": null,
                            "metadata": {
                                "dimensions": {
                                    "aspectRatio": 1.984375
                                }
                            }
                        }
                    }
                }
            },
            {
                "name": "Stevie Moreira",
                "slug": {
                    "current": "team/stevie-moreira"
                },
                "email": "stevie@massevents.nl",
                "roles": "Junior Event Manager, Community Manager",
                "image": {
                    "_key": null,
                    "_type": "image",
                    "asset": {
                        "_key": null,
                        "_type": "sanity.imageAsset",
                        "url": "https://cdn.sanity.io/images/hagk2r3y/production/118b66282d868cc09f48ac57b8eed61e1f45bbec-413x208.png",
                        "altText": null,
                        "metadata": {
                            "dimensions": {
                                "aspectRatio": 1.9855769230769231
                            }
                        }
                    }
                },
                "seo": {
                    "title": "Stevie Moreira",
                    "description": "Stevie Moreira",
                    "openGraphImage": {
                        "_key": null,
                        "_type": "image",
                        "asset": {
                            "_key": null,
                            "_type": "sanity.imageAsset",
                            "url": "https://cdn.sanity.io/images/hagk2r3y/production/118b66282d868cc09f48ac57b8eed61e1f45bbec-413x208.png",
                            "altText": null,
                            "metadata": {
                                "dimensions": {
                                    "aspectRatio": 1.9855769230769231
                                }
                            }
                        }
                    }
                }
            }
        ]
    }
}