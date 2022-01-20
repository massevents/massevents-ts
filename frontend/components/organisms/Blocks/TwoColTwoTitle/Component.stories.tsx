import TwoColTwoTitle from "./Component";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: 'Organisms/TwoColTwoTitle',
    component: TwoColTwoTitle,
} as ComponentMeta<typeof TwoColTwoTitle>

const Template: ComponentStory<typeof TwoColTwoTitle> = args => <TwoColTwoTitle {...args} />

export const Default = Template.bind({});

Default.args = {
    "block": {
        "_key": "70df3241157c",
        "_type": "twoColTwoTitle",
        "leftTitle": "Werken we aan mooie projecten",
        "leftSubtitle": "Samen",
        "rightTitle": "Werken bij",
        "rightSubtitle": "Samen",
        "leftCol": "MASS Events is altijd geïnteresseerd in nieuwe ideeën en samenwerkingen. Of je nou een klein idee hebt of uitgebreide plannen. MASS Events helpt jouw evenement op de kaart te zetten en er een succes van te maken. Een programma nodig voor je evenement of feest? Geen probleem. Op zoek naar een partij die de Horeca op je event kan regelen? Wij staan voor je klaar. Ook met een kleine aanvulling van je evenement kunnen we helpen. Stagemanagers, site-managers, op- en afbouw personeel, technische tekeningen, coördinators nodig? Neem contact met ons op voor de mogelijkheden.",
        "rightCol": "Op dit moment heeft MASS Events geen vacatures open staan. Houd deze plek en onze socials in de gaten voor openingen binnen het bedrijf of mogelijkheden tot het lopen van een stage."
    }
}