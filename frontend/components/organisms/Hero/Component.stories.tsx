import Hero from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PossibleColors } from "@components/molecules/BlockMapper/Component";

export default {
    title: 'Organisms/Hero',
    component: Hero,
} as ComponentMeta<typeof Hero>


const Template: ComponentStory<typeof Hero> = args => <Hero {...args} />

export const Default = Template.bind({});

Default.args = {
    title: 'Dit is een hero component met dit stuk in het roze',
    coloredPart: 'dit stuk in het roze',
    "descriptionRaw": [
        {
            "_key": "a28baaa9742d",
            "_type": "block",
            "children": [
                {
                    "_key": "e8338ce7a81d",
                    "_type": "span",
                    "marks": [],
                    "text": "YipYip is al 10 jaar een "
                },
                {
                    "_key": "9eac40b601c0",
                    "_type": "span",
                    "marks": [
                        "strong"
                    ],
                    "text": "full service app ontwikkelaar"
                },
                {
                    "_key": "e03376c249d5",
                    "_type": "span",
                    "marks": [],
                    "text": " in "
                },
                {
                    "_key": "c908b2144996",
                    "_type": "span",
                    "marks": [
                        "strong"
                    ],
                    "text": "Rotterdam"
                },
                {
                    "_key": "0dc5b577a950",
                    "_type": "span",
                    "marks": [],
                    "text": ". We ontwerpen en ontwikkelen mobiele apps en games; voor MKB-bedrijven, overheid én start-ups."
                }
            ],
            "markDefs": [],
            "style": "h6"
        }
    ],
    buttons: [
        {
            "_key": "bafbbf057703",
            "_type": "button",
            "label": "bekijk al onze apps",
            "path": "/",
            "buttonType": "gradient"
        },
        {
            "_key": "d2036a259660",
            "_type": "button",
            "label": "neem contact op",
            "path": "/",
            "buttonType": "text-gradient"
        }
    ],
    "color": "pink" as PossibleColors
}