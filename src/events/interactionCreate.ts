import { Flashcore } from 'robo.js'
import { ButtonInteraction, GuildMember, ModalSubmitInteraction } from 'discord.js'
import { IProfile } from '../common/types'

export default async (interaction: any) => {
	if (interaction.isModalSubmit()) {
		const i = interaction as ModalSubmitInteraction
		if (i.customId === 'profile-modal') {
			const id = i.user.id
			const fields = i.fields.fields

			const name = fields.get('profile-name')?.value as string
			const myOccupation = fields.get('profile-occupation')?.value as string
			const aboutMe = fields.get('profile-about')?.value as string
			const mySkills = fields.get('profile-skills')?.value ? fields.get('profile-skills')?.value : undefined
			const links = fields.get('profile-links')?.value ? fields.get('profile-links')?.value.split(',') : undefined

			const profileData: IProfile = {
				name,
				myOccupation,
				aboutMe,
				mySkills,
				links
			}

			await Flashcore.set(`profile-${id}`, JSON.stringify(profileData), {
				namespace: i.guildId!
			})

			i.reply({ content: 'Profile created! Run /show-profile command to show it around!', ephemeral: true })
		}
	}
}
