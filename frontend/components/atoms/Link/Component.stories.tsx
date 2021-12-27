import { Link } from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Atoms/Link',
    component: Link,
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = args => <Link {...args}/>

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