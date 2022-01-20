import ImageBanner from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Organisms/ImageBanner',
    component: ImageBanner,
} as ComponentMeta<typeof ImageBanner>

const Template: ComponentStory<typeof ImageBanner> = args => <ImageBanner {...args} />

export const Default = Template.bind({});

Default.args = {
    "block": {
        "_key": "ce84e4ba461d",
        "_type": "imageSection",
        "link": {
            "internalLink": null,
            "externalLink": {
                "url": "https://merch.massevents.nl/",
                "label": "Merchandise"
            }
        },
        "image": {
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
    }
}