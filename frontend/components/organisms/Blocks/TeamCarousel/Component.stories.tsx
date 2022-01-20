import TeamCarousel from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Organisms/TeamCarousel',
    component: TeamCarousel,
} as ComponentMeta<typeof TeamCarousel>

const Template: ComponentStory<typeof TeamCarousel> = args => <TeamCarousel {...args} />

export const Default = Template.bind({});


Default.args = {
    "block": {
        "_key": "09f108759bd3",
        "_type": "TeamCarousel",
        "people": [
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
            }
        ]
    }
}