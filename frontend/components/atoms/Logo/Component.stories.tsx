import { Logo } from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Atoms/Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />

export const Default = Template.bind({});

Default.args = {
    isColor: true
}