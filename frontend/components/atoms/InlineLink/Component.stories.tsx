import { InlineLink } from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Atoms/InlineLink',
    component: InlineLink,
} as ComponentMeta<typeof InlineLink>

const Template: ComponentStory<typeof InlineLink> = args => <InlineLink {...args}/>

export const Default = Template.bind({});
Default.args = {
    as: 'button',
    children: 'Click on me!',
    type: 'submit',
    onClick: (e) => alert ('I was clicked on!')
}

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
    as: 'button',
    children: 'Click on me!',
    type: 'submit',
    disabled: true,
    onClick: (e) => alert ('I was clicked on!')
}

export const LinkInternal = Template.bind({});
LinkInternal.args = {
    as: 'link',
    children: 'Click on me!',
    type: 'submit',
    href: '/about'
}

export const LinkExternal = Template.bind({});
LinkExternal.args = {
    as: 'link',
    children: 'Click on me!',
    type: 'submit',
    href: 'https://www.google.com'
}