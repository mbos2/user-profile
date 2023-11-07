import { type CommandConfig } from '@roboplay/robo.js';
import { ChatInputCommandInteraction } from 'discord.js';
import { profileModal } from '../utils/utils.js';

export const config: CommandConfig = {
  description: 'Create your profile',
}

export default async (interaction: ChatInputCommandInteraction) => {
  const modal = await profileModal();
  try {
    await interaction.showModal(modal.modal);
  } catch (error) {
    console.log(error)
  }
}