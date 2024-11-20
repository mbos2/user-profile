import { profileModal } from "../utils/utils.js";
export const config = {
    description: 'Create your profile'
};
export default (async (interaction)=>{
    const modal = await profileModal();
    try {
        await interaction.showModal(modal.modal);
    } catch (error) {
        console.log(error);
    }
});
