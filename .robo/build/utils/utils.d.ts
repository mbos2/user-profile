import { ModalBuilder, EmbedBuilder } from 'discord.js';
import { IProfile } from '../common/types';
export declare const profileModal: () => Promise<{
    modal: ModalBuilder;
}>;
export declare const generateProfileEmbedMessage: (profileData: IProfile) => Promise<EmbedBuilder>;
