import OneColOneTitle from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Organisms/OneColOneTitle',
    component: OneColOneTitle,
} as ComponentMeta<typeof OneColOneTitle>

const Template: ComponentStory<typeof OneColOneTitle> = args => <OneColOneTitle {...args} />

export const Default = Template.bind({});

Default.args = {
    "block": {
        "_key": "f20bfa5a465a",
        "_type": "oneColOneTitle",
        "title": "Zetten wij Gouda op de Kaart!",
        "subtitle": "Samen",
        "col": "Onze festivals worden mede mogelijk gemaakt door onze fantastische partners en sponsoren. Zonder deze, veelal Goudse, ondernemers is het onmogelijk om onze publieksevenementen mogelijk te maken. Lijkt het jou leuk om iets bij te dragen aan een van onze evenementen, op welke manier dan ook? Wil je een bepaalde doelgroep bereiken en naamsbekendheid vergroten in de regio? Zet jij samen met ons Gouda op de kaart door de leukste festivals in het Groene Hart te organiseren? Word jij partner in duurzaamheid, mobiliteit en/of entertainment?\n\\\n\\\nStuur dan een mail naar [info@massevents.nl](mailto:info@massevents.nl) om in contact te komen. Wij leggen met veel plezier de toekomstplannen van MASS Events aan je voor\n\n"
    }
}