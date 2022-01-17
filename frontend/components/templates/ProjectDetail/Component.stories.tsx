import MainNavigation from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Organisms/MainNavigation',
    component: MainNavigation,
} as ComponentMeta<typeof MainNavigation>

const Template: ComponentStory<typeof MainNavigation> = args => <MainNavigation />

export const Default = Template.bind({});