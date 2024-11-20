import { Flashcore } from "robo.js";
export default (async (interaction)=>{
    if (interaction.isModalSubmit()) {
        const i = interaction;
        if (i.customId === 'profile-modal') {
            const id = i.user.id;
            const fields = i.fields.fields;
            const name = fields.get('profile-name')?.value;
            const myOccupation = fields.get('profile-occupation')?.value;
            const aboutMe = fields.get('profile-about')?.value;
            const mySkills = fields.get('profile-skills')?.value;
            const links = fields.get('profile-links')?.value.split(',');
            const profileData = {
                name,
                myOccupation,
                aboutMe,
                mySkills,
                links
            };
            await Flashcore.set(`profile-${id}`, JSON.stringify(profileData), {
                namespace: i.guildId
            });
            i.reply({
                content: 'Profile created! Run /show-profile command to show it around!',
                ephemeral: true
            });
        }
    }
});
