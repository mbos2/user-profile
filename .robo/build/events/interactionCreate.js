import { Flashcore } from "@roboplay/robo.js";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWt0aVxcZGlzY29yZC1ib3RzXFxyb2JvLXBsdWdpbnNcXHVzZXItcHJvZmlsZVxcc3JjXFxldmVudHNcXGludGVyYWN0aW9uQ3JlYXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZsYXNoY29yZSB9IGZyb20gJ0Byb2JvcGxheS9yb2JvLmpzJztcclxuaW1wb3J0IHsgQnV0dG9uSW50ZXJhY3Rpb24sIEd1aWxkTWVtYmVyLCBNb2RhbFN1Ym1pdEludGVyYWN0aW9uIH0gZnJvbSAnZGlzY29yZC5qcyc7XHJcbmltcG9ydCB7IElQcm9maWxlIH0gZnJvbSAnLi4vY29tbW9uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpbnRlcmFjdGlvbjogYW55KSA9PiB7XHJcblxyXG4gIGlmIChpbnRlcmFjdGlvbi5pc01vZGFsU3VibWl0KCkpIHtcclxuICAgIGNvbnN0IGkgPSBpbnRlcmFjdGlvbiBhcyBNb2RhbFN1Ym1pdEludGVyYWN0aW9uO1xyXG4gICAgaWYgKGkuY3VzdG9tSWQgPT09ICdwcm9maWxlLW1vZGFsJykge1xyXG4gICAgICBjb25zdCBpZCA9IGkudXNlci5pZDtcclxuICAgICAgY29uc3QgZmllbGRzID0gaS5maWVsZHMuZmllbGRzO1xyXG5cclxuICAgICAgY29uc3QgbmFtZSA9IGZpZWxkcy5nZXQoJ3Byb2ZpbGUtbmFtZScpPy52YWx1ZSBhcyBzdHJpbmc7XHJcbiAgICAgIGNvbnN0IG15T2NjdXBhdGlvbiA9IGZpZWxkcy5nZXQoJ3Byb2ZpbGUtb2NjdXBhdGlvbicpPy52YWx1ZSBhcyBzdHJpbmc7XHJcbiAgICAgIGNvbnN0IGFib3V0TWUgPSBmaWVsZHMuZ2V0KCdwcm9maWxlLWFib3V0Jyk/LnZhbHVlIGFzIHN0cmluZztcclxuICAgICAgY29uc3QgbXlTa2lsbHMgPSBmaWVsZHMuZ2V0KCdwcm9maWxlLXNraWxscycpPy52YWx1ZTtcclxuICAgICAgY29uc3QgbGlua3MgPSBmaWVsZHMuZ2V0KCdwcm9maWxlLWxpbmtzJyk/LnZhbHVlLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICBjb25zdCBwcm9maWxlRGF0YTogSVByb2ZpbGUgPSB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBteU9jY3VwYXRpb24sXHJcbiAgICAgICAgYWJvdXRNZSxcclxuICAgICAgICBteVNraWxscyxcclxuICAgICAgICBsaW5rcyxcclxuICAgICAgfVxyXG5cclxuICAgICAgYXdhaXQgRmxhc2hjb3JlLnNldChgcHJvZmlsZS0ke2lkfWAsIEpTT04uc3RyaW5naWZ5KHByb2ZpbGVEYXRhKSwge1xyXG4gICAgICAgIG5hbWVzcGFjZTogaS5ndWlsZElkISxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpLnJlcGx5KHtjb250ZW50OiAnUHJvZmlsZSBjcmVhdGVkISBSdW4gL3Nob3ctcHJvZmlsZSBjb21tYW5kIHRvIHNob3cgaXQgYXJvdW5kIScsIGVwaGVtZXJhbDogdHJ1ZX0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiRmxhc2hjb3JlIiwiaW50ZXJhY3Rpb24iLCJpc01vZGFsU3VibWl0IiwiaSIsImN1c3RvbUlkIiwiaWQiLCJ1c2VyIiwiZmllbGRzIiwibmFtZSIsImdldCIsInZhbHVlIiwibXlPY2N1cGF0aW9uIiwiYWJvdXRNZSIsIm15U2tpbGxzIiwibGlua3MiLCJzcGxpdCIsInByb2ZpbGVEYXRhIiwic2V0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWVzcGFjZSIsImd1aWxkSWQiLCJyZXBseSIsImNvbnRlbnQiLCJlcGhlbWVyYWwiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFNBQVMsUUFBUSxvQkFBb0I7QUFJOUMsZUFBZSxDQUFBLE9BQU9DO0lBRXBCLElBQUlBLFlBQVlDLGFBQWEsSUFBSTtRQUMvQixNQUFNQyxJQUFJRjtRQUNWLElBQUlFLEVBQUVDLFFBQVEsS0FBSyxpQkFBaUI7WUFDbEMsTUFBTUMsS0FBS0YsRUFBRUcsSUFBSSxDQUFDRCxFQUFFO1lBQ3BCLE1BQU1FLFNBQVNKLEVBQUVJLE1BQU0sQ0FBQ0EsTUFBTTtZQUU5QixNQUFNQyxPQUFPRCxPQUFPRSxHQUFHLENBQUMsaUJBQWlCQztZQUN6QyxNQUFNQyxlQUFlSixPQUFPRSxHQUFHLENBQUMsdUJBQXVCQztZQUN2RCxNQUFNRSxVQUFVTCxPQUFPRSxHQUFHLENBQUMsa0JBQWtCQztZQUM3QyxNQUFNRyxXQUFXTixPQUFPRSxHQUFHLENBQUMsbUJBQW1CQztZQUMvQyxNQUFNSSxRQUFRUCxPQUFPRSxHQUFHLENBQUMsa0JBQWtCQyxNQUFNSyxNQUFNO1lBRXZELE1BQU1DLGNBQXdCO2dCQUM1QlI7Z0JBQ0FHO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO1lBQ0Y7WUFFQSxNQUFNZCxVQUFVaUIsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFWixHQUFHLENBQUMsRUFBRWEsS0FBS0MsU0FBUyxDQUFDSCxjQUFjO2dCQUNoRUksV0FBV2pCLEVBQUVrQixPQUFPO1lBQ3RCO1lBRUFsQixFQUFFbUIsS0FBSyxDQUFDO2dCQUFDQyxTQUFTO2dCQUFpRUMsV0FBVztZQUFJO1FBQ3BHO0lBQ0Y7QUFDRixDQUFBLEVBQUMifQ==