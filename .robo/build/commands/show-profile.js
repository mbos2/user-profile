import { Flashcore } from "@roboplay/robo.js";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHVzZXItcHJvZmlsZVxcc3JjXFxjb21tYW5kc1xcc2hvdy1wcm9maWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoY29yZSwgdHlwZSBDb21tYW5kQ29uZmlnIH0gZnJvbSAnQHJvYm9wbGF5L3JvYm8uanMnO1xyXG4vLyBpbXBvcnQgeyBJR3VpbGRSb2xlU2hvcnQgfSBmcm9tICcuLi9jb21tb24vdHlwZXMuanMnO1xyXG5pbXBvcnQgeyBDaGF0SW5wdXRDb21tYW5kSW50ZXJhY3Rpb24gfSBmcm9tICdkaXNjb3JkLmpzJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVQcm9maWxlRW1iZWRNZXNzYWdlIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZzogQ29tbWFuZENvbmZpZyA9IHtcclxuICBkZXNjcmlwdGlvbjogJ1Nob3cgeW91cnMgb3IgYW5vdGhlciB1c2VyXFwncyBwcm9maWxlJyxcclxuICBvcHRpb25zOiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICd1c2VyJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdPcHRpb25hbGx5IHlvdSBjYW4gY2hlY2sgYW5vdGhlciB1c2VyXFwncyBwcm9maWxlJyxcclxuICAgICAgdHlwZTogJ3VzZXInLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKGludGVyYWN0aW9uOiBDaGF0SW5wdXRDb21tYW5kSW50ZXJhY3Rpb24pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbXlJZCA9IGludGVyYWN0aW9uLnVzZXIuaWQ7XHJcbiAgICBjb25zdCB1c2VyID0gaW50ZXJhY3Rpb24ub3B0aW9ucy5nZXRVc2VyKCd1c2VyJyk7XHJcbiAgICBjb25zdCBpZCA9IHVzZXIgPyB1c2VyLmlkIDogbXlJZDtcclxuXHJcbiAgICBjb25zdCBwcm9maWxlRGF0YSA9IGF3YWl0IEZsYXNoY29yZS5nZXQoYHByb2ZpbGUtJHtpZH1gLCB7XHJcbiAgICAgIG5hbWVzcGFjZTogaW50ZXJhY3Rpb24uZ3VpbGRJZCEsXHJcbiAgICB9KSBhcyBzdHJpbmc7XHJcblxyXG4gICAgaWYgKCFwcm9maWxlRGF0YSkge1xyXG4gICAgICByZXR1cm4ge2NvbnRlbnQ6IGBDb3VsZCBub3QgZmluZCBwcm9maWxlIGZvciB1c2VyIGlkOiAke2lkfWAsIGVwaGVtZXJhbDogdHJ1ZX07IFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByb2ZpbGVEYXRhUGFyc2VkID0gSlNPTi5wYXJzZShwcm9maWxlRGF0YSk7XHJcbiAgICBjb25zdCBlbWJlZCA9IGF3YWl0IGdlbmVyYXRlUHJvZmlsZUVtYmVkTWVzc2FnZShwcm9maWxlRGF0YVBhcnNlZCk7XHJcbiAgICByZXR1cm4ge2VtYmVkczogW2VtYmVkXX07XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgcmV0dXJuIHtjb250ZW50OiBgRXJyb3Igc2hvd2luZyBhIHByb2ZpbGUuIC4gLmAsIGVwaGVtZXJhbDogdHJ1ZX1cclxuICB9XHJcbn0iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiZ2VuZXJhdGVQcm9maWxlRW1iZWRNZXNzYWdlIiwiY29uZmlnIiwiZGVzY3JpcHRpb24iLCJvcHRpb25zIiwibmFtZSIsInR5cGUiLCJyZXF1aXJlZCIsImludGVyYWN0aW9uIiwibXlJZCIsInVzZXIiLCJpZCIsImdldFVzZXIiLCJwcm9maWxlRGF0YSIsImdldCIsIm5hbWVzcGFjZSIsImd1aWxkSWQiLCJjb250ZW50IiwiZXBoZW1lcmFsIiwicHJvZmlsZURhdGFQYXJzZWQiLCJKU09OIiwicGFyc2UiLCJlbWJlZCIsImVtYmVkcyIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxRQUE0QixvQkFBb0I7QUFHbEUsU0FBU0MsMkJBQTJCLFFBQVEsb0JBQW9CO0FBRWhFLE9BQU8sTUFBTUMsU0FBd0I7SUFDbkNDLGFBQWE7SUFDYkMsU0FBUztRQUNQO1lBQ0VDLE1BQU07WUFDTkYsYUFBYTtZQUNiRyxNQUFNO1lBQ05DLFVBQVU7UUFDWjtLQUNEO0FBQ0gsRUFBQztBQUVELGVBQWUsQ0FBQSxPQUFPQztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsT0FBT0QsWUFBWUUsSUFBSSxDQUFDQyxFQUFFO1FBQ2hDLE1BQU1ELE9BQU9GLFlBQVlKLE9BQU8sQ0FBQ1EsT0FBTyxDQUFDO1FBQ3pDLE1BQU1ELEtBQUtELE9BQU9BLEtBQUtDLEVBQUUsR0FBR0Y7UUFFNUIsTUFBTUksY0FBYyxNQUFNYixVQUFVYyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUVILEdBQUcsQ0FBQyxFQUFFO1lBQ3ZESSxXQUFXUCxZQUFZUSxPQUFPO1FBQ2hDO1FBRUEsSUFBSSxDQUFDSCxhQUFhO1lBQ2hCLE9BQU87Z0JBQUNJLFNBQVMsQ0FBQyxvQ0FBb0MsRUFBRU4sR0FBRyxDQUFDO2dCQUFFTyxXQUFXO1lBQUk7UUFDL0U7UUFFQSxNQUFNQyxvQkFBb0JDLEtBQUtDLEtBQUssQ0FBQ1I7UUFDckMsTUFBTVMsUUFBUSxNQUFNckIsNEJBQTRCa0I7UUFDaEQsT0FBTztZQUFDSSxRQUFRO2dCQUFDRDthQUFNO1FBQUE7SUFDekIsRUFBRSxPQUFPRSxPQUFPO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPO1lBQUNQLFNBQVMsQ0FBQyw0QkFBNEIsQ0FBQztZQUFFQyxXQUFXO1FBQUk7SUFDbEU7QUFDRixDQUFBLEVBQUMifQ==