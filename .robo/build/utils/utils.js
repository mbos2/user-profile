import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, EmbedBuilder } from "discord.js";
export const profileModal = async ()=>{
    const modal = new ModalBuilder().setCustomId('profile-modal').setTitle('Create your profile');
    const profileName = new TextInputBuilder().setCustomId('profile-name').setLabel('Your name').setStyle(TextInputStyle.Short).setRequired(true).setPlaceholder('Write your name here').setMinLength(1).setMaxLength(100);
    const myOccupation = new TextInputBuilder().setCustomId('profile-occupation').setLabel('Your occupation').setStyle(TextInputStyle.Short).setRequired(true).setPlaceholder('What is your current occupation?').setMinLength(1).setMaxLength(300);
    const aboutMe = new TextInputBuilder().setCustomId('profile-about').setLabel('About me').setStyle(TextInputStyle.Paragraph).setRequired(true).setPlaceholder('Write something about yourself. Let people know you better! (This input supports discord markdown!)').setMinLength(10).setMaxLength(1000);
    const mySkills = new TextInputBuilder().setCustomId('profile-skills').setLabel('Your skills').setStyle(TextInputStyle.Paragraph).setRequired(false).setPlaceholder('What are you skilled at? Let people know how good you are! (This input supports discord markdown!)').setMaxLength(1000);
    const myLinks = new TextInputBuilder().setCustomId('profile-links').setLabel('Your links').setStyle(TextInputStyle.Paragraph).setRequired(false).setPlaceholder('Connect with people elsewhere! Share your relevant links! (Divide each link with a comma)').setMaxLength(1000);
    const firstActionRow = new ActionRowBuilder().addComponents(profileName);
    const secondActionRow = new ActionRowBuilder().addComponents(myOccupation);
    const thirdActionRow = new ActionRowBuilder().addComponents(aboutMe);
    const fourthActionRow = new ActionRowBuilder().addComponents(mySkills);
    const fifthActionRow = new ActionRowBuilder().addComponents(myLinks);
    modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, fourthActionRow, fifthActionRow);
    return {
        modal: modal
    };
};
export const generateProfileEmbedMessage = async (profileData)=>{
    const embed = new EmbedBuilder().setColor(0x0099ff).setTitle(`${profileData.name}'s Profile`);
    embed.addFields({
        name: `My name: `,
        value: `${profileData.name}`
    });
    embed.addFields({
        name: `My occupation: `,
        value: `${profileData.myOccupation}`
    });
    embed.addFields({
        name: `About me: `,
        value: `${profileData.aboutMe}`
    });
    if (profileData.mySkills) {
        embed.addFields({
            name: `My skills: `,
            value: `${profileData.mySkills}`
        });
    }
    if (profileData.links && profileData.links.length > 0) {
        const links = profileData.links;
        for(let index = 0; index < links.length; index++){
            const link = links[index];
            embed.addFields({
                name: `Link ${index + 1}: `,
                value: `${link}`
            });
        }
    }
    embed.setColor(0x206694);
    return embed;
};
