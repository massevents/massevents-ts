import ProjectOverview from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Organisms/ProjectOverview',
    component: ProjectOverview,
} as ComponentMeta<typeof ProjectOverview>

const Template: ComponentStory<typeof ProjectOverview> = args => <ProjectOverview {...args} />

export const Default = Template.bind({});

Default.args = {
    "block": {
        "_key": "812df3316ebd",
        "_type": "projectOverview",
        "headingTitle": "Alle projecten",
        "headingSubTitle": null,
        "projectsType": "all",
        "format": "projectblock",
        "button_enable": false,
        "button_label": null,
        "button_url": null,
        "projects": null
    },
    "projects": {
        "allProject": [
            {
                "_key": null,
                "_type": "project",
                "title": "Maak jij dé Gouda750 Hardcup?",
                "slug": {
                    "current": "projecten/project-x"
                },
                "teaser": {
                    "_key": null,
                    "_type": "teaser",
                    "title": "teaser",
                    "description": "desc",
                    "imageSrc": {
                        "_key": null,
                        "_type": "image",
                        "asset": {
                            "_key": null,
                            "_type": "sanity.imageAsset",
                            "url": "https://cdn.sanity.io/images/hagk2r3y/production/4139771cbcc5a0c7eb9710df031894c800d1cc76-2167x1625.png",
                            "altText": null,
                            "metadata": {
                                "dimensions": {
                                    "aspectRatio": 1.3335384615384616
                                }
                            }
                        }
                    }
                },
                "logo": {
                    "_key": null,
                    "_type": "image",
                    "asset": {
                        "_key": null,
                        "_type": "sanity.imageAsset",
                        "url": "https://cdn.sanity.io/images/hagk2r3y/production/716e43287a5b704d266dbd548b24458e9e8371aa-2000x500.png",
                        "altText": null,
                        "metadata": {
                            "dimensions": {
                                "aspectRatio": 4
                            }
                        }
                    }
                }
            },
            {
                "_key": null,
                "_type": "project",
                "title": "New Project",
                "slug": {
                    "current": "projecten/new-project"
                },
                "teaser": {
                    "_key": null,
                    "_type": "teaser",
                    "title": "Teaser title",
                    "description": "huh",
                    "imageSrc": {
                        "_key": null,
                        "_type": "image",
                        "asset": {
                            "_key": null,
                            "_type": "sanity.imageAsset",
                            "url": "https://cdn.sanity.io/images/hagk2r3y/production/02e44c9b58d640e1884b0cc1cd00f6bf6a2b7354-1000x672.png",
                            "altText": null,
                            "metadata": {
                                "dimensions": {
                                    "aspectRatio": 1.4880952380952381
                                }
                            }
                        }
                    }
                },
                "logo": {
                    "_key": null,
                    "_type": "image",
                    "asset": {
                        "_key": null,
                        "_type": "sanity.imageAsset",
                        "url": "https://cdn.sanity.io/images/hagk2r3y/production/d6186a6cb4b7080e7d06d4392211c291fcb6d1eb-1291x652.png",
                        "altText": null,
                        "metadata": {
                            "dimensions": {
                                "aspectRatio": 1.9800613496932515
                            }
                        }
                    }
                }
            }
        ]
    }
}