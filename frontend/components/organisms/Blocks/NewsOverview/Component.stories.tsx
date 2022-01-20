import NewsOverview from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Organisms/NewsOverview',
    component: NewsOverview,
} as ComponentMeta<typeof NewsOverview>

const Template: ComponentStory<typeof NewsOverview> = args => <NewsOverview {...args} />

export const Default = Template.bind({});

Default.args = {
    "block": {
        "_key": "ae51cc9b43aa",
        "_type": "newsOverview",
        "title": "Verhalen",
        "subtitle": "Lees hier allemaal leuke",
        "newsType": "all",
        "button_enable": false,
        "button_label": null,
        "button_url": null,
        "news": [
            {
                "title": "Hardcups in ontwikkeling voor Gouda750",
                "slug": {
                    "current": "nieuws/hardcups-in-ontwikkeling-voor-gouda750"
                },
                "Teaser": {
                    "_key": null,
                    "_type": "teaser",
                    "title": "Hardcups in ontwikkeling voor Gouda750",
                    "description": "MASS Events ontwikkelt, samen met Rabobank Hollandse IJssel, Gemeente Gouda & Jongeneel verpakkingen, speciaal voor de Goudse evenementenindustrie één Goudse Hardcup.",
                    "imageSrc": {
                        "_key": null,
                        "_type": "image",
                        "asset": {
                            "_key": null,
                            "_type": "sanity.imageAsset",
                            "url": "https://cdn.sanity.io/images/hagk2r3y/production/491e36213d18def44875ba937ce257503b598a33-1920x1080.jpg",
                            "altText": null,
                            "metadata": {
                                "dimensions": {
                                    "aspectRatio": 1.7777777777777777
                                }
                            }
                        }
                    }
                }
            }
        ]
    },
    "news": {
        "allNews": [
            {
                "_key": null,
                "_type": "news",
                "title": "Kaaskop. muts weer op voorraad!",
                "slug": {
                    "current": "nieuws/kaaskop-muts-weer-op-voorraad"
                },
                "Teaser": {
                    "_key": null,
                    "_type": "teaser",
                    "title": "Kaaskop. muts weer op voorraad!",
                    "description": "Brrrr koud! Het demissionaire Kabinet adviseert iedereen een kwartier de deuren van je huis tegen elkaar open te zetten. Dan kan je met de hoge gasprijzen maar beter zo’n mooie Kaaskop. muts in huis hebben!",
                    "imageSrc": {
                        "_key": null,
                        "_type": "image",
                        "asset": {
                            "_key": null,
                            "_type": "sanity.imageAsset",
                            "url": "https://cdn.sanity.io/images/hagk2r3y/production/d04d4078735211d34022e6d820d2a6514251e556-2000x1333.jpg",
                            "altText": null,
                            "metadata": {
                                "dimensions": {
                                    "aspectRatio": 1.5003750937734435
                                }
                            }
                        }
                    }
                }
            },
            {
                "_key": null,
                "_type": "news",
                "title": "Hardcups in ontwikkeling voor Gouda750",
                "slug": {
                    "current": "nieuws/hardcups-in-ontwikkeling-voor-gouda750"
                },
                "Teaser": {
                    "_key": null,
                    "_type": "teaser",
                    "title": "Hardcups in ontwikkeling voor Gouda750",
                    "description": "MASS Events ontwikkelt, samen met Rabobank Hollandse IJssel, Gemeente Gouda & Jongeneel verpakkingen, speciaal voor de Goudse evenementenindustrie één Goudse Hardcup.",
                    "imageSrc": {
                        "_key": null,
                        "_type": "image",
                        "asset": {
                            "_key": null,
                            "_type": "sanity.imageAsset",
                            "url": "https://cdn.sanity.io/images/hagk2r3y/production/491e36213d18def44875ba937ce257503b598a33-1920x1080.jpg",
                            "altText": null,
                            "metadata": {
                                "dimensions": {
                                    "aspectRatio": 1.7777777777777777
                                }
                            }
                        }
                    }
                }
            }
        ]
    }
}