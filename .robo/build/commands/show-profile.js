import { Flashcore } from "robo.js";
import { generateProfileEmbedMessage } from "../utils/utils.js";
export const config = {
    description: 'Show yours or another user\'s profile',
    options: [
        {
            name: 'user',
            description: 'Optionally you can check another user\'s profile',
            type: 'user',
            required: false
        }
    ]
};
export default (async (interaction)=>{
    try {
        const myId = interaction.user.id;
        const user = interaction.options.getUser('user');
        const id = user ? user.id : myId;
        const profileData = await Flashcore.get(`profile-${id}`, {
            namespace: interaction.guildId
        });
        if (!profileData) {
            return {
                content: `Could not find profile for user id: ${id}`,
                ephemeral: true
            };
        }
        const profileDataParsed = JSON.parse(profileData);
        const embed = await generateProfileEmbedMessage(profileDataParsed);
        return {
            embeds: [
                embed
            ]
        };
    } catch (error) {
        console.log(error);
        return {
            content: `Error showing a profile. . .`,
            ephemeral: true
        };
    }
});
