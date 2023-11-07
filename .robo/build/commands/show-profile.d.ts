import { type CommandConfig } from '@roboplay/robo.js';
import { ChatInputCommandInteraction } from 'discord.js';
export declare const config: CommandConfig;
declare const _default: (interaction: ChatInputCommandInteraction) => Promise<{
    content: string;
    ephemeral: boolean;
    embeds?: undefined;
} | {
    embeds: import("discord.js").EmbedBuilder[];
    content?: undefined;
    ephemeral?: undefined;
}>;
export default _default;
