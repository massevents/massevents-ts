import TwoColQuote from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Organisms/TwoColQuote',
    component: TwoColQuote,
} as ComponentMeta<typeof TwoColQuote>

const Template: ComponentStory<typeof TwoColQuote> = args => <TwoColQuote {...args} />

export const Default = Template.bind({});

Default.args = {
    "block": {
        "_key": "422d7ef40fde",
        "_type": "twoColQuote",
        "title": "Het MASS Events team",
        "subtitle": "Een inleiding over",
        "quote": "Talentontwikkeling is essentieel binnen ons bedrijf. We zoeken bewust het onbekende op. Hoe meer je experimenteert, hoe brutaler je bent in vragen stellen; hoe meer je kan leren en hoe beter je wordt.",
        "leftCol": "Na een verbindende samenwerking tussen Thomas de Boer en Gerben Roskam is MASS Events in het leven geroepen. Vol stress en de druk van verantwoordelijkheid kwamen de twee bij elkaar om een klus te klaren. Sindsdien is de bromance nooit tot rust gekomen.\n\nMASS Events zet zich in voor de cultuur binnen Gouda. Of het nou om eigen concepten gaat of om het versterken van bestaande concepten: als het de stad ten goede komt, staan Gerben en Thomas vooraan om een helpende hand te bieden.\n\n",
        "rightCol": "*Die helpende hand; daar zijn we niet mee geboren. Dat is ons geleerd. Onze broedplaats was So What! Na een flinke tijd bestuurlijke functies te hebben gehad en keihard te hebben gewerkt. Hebben we de skills verzameld om er werk van te maken. We hadden één goede springplank nodig en het begon te rollen.\nOnze droom? De stad stimuleren en inspireren; om vervolgens noodgedwongen evenementen in de regio te moeten organiseren, omdat Gouda er al genoeg heeft.*"
    }
}