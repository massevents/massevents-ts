import Header from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Organisms/Header',
    component: Header,
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header  {...args} />

export const Default = Template.bind({});

Default.args = {
    "header": {
        "_key": null,
        "_type": "header",
        "headerType": "video",
        "title": "Over MASS Events",
        "subtitle": "Alles wat je wél en niet wilt weten",
        "imageSrc": null,
        "videoId": "BbfIWShMhiI",
        "delay": "0"
    }
}