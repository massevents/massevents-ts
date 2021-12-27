import Masonry from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MasonryFragment } from "@generated/graphql-request";
import { PossibleColors } from "@components/molecules/BlockMapper/Component";

export default {
    title: 'Organisms/Masonry',
    component: Masonry,
} as ComponentMeta<typeof Masonry>

const Template: ComponentStory<typeof Masonry> = args => <Masonry {...args} />

export const Default = Template.bind({});


Default.args = {
    color: 'pink' as PossibleColors,
    photoLeft: {
        asset: {
            url: 'https://source.unsplash.com/random',
            altText: ''
        }
    },
    photoRightBottom: {
        asset: {
            url: 'https://source.unsplash.com/random',
            altText: ''
        }
    },
    photoRightTop: {
        asset: {
            url: 'https://source.unsplash.com/random',
            altText: ''
        }
    }
}