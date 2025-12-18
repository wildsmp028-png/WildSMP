// Copy IP button
document.getElementById('copy-ip').addEventListener('click', () => {
    navigator.clipboard.writeText('wildsmp.sdlf.fun');
    alert('IP copied to clipboard: wildsmp.sdlf.fun');
});

// Staff form webhook
document.getElementById('staff-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent normal form submission
    const data = Object.fromEntries(new FormData(this));

    fetch('https://discord.com/api/webhooks/1450995800669950116/_ICtOAFGbWJO1CXp_cAuLwfccE_ekAEagcEh4X7poX26L3XSwyI_VhbDWeqCKuYveKYO', { // <-- Replace with your webhook
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: null,
            embeds: [{
                title: 'New Staff Application',
                color: 16753920,
                fields: [
                    { name: 'IGN', value: data.ign },
                    { name: 'Age', value: data.age },
                    { name: 'Discord', value: data.discord },
                    { name: 'Timezone', value: data.timezone },
                    { name: 'Hours/week', value: data.hours },
                    { name: 'Experience', value: data.experience },
                    { name: 'Scenario Response', value: data.scenario },
                    { name: 'Why Picked', value: data.reason }
                ]
            }]
        })
    })
    .then(() => alert('Staff application sent!'))
    .catch(err => alert('Error sending application.'));
});

// Media form webhook
document.getElementById('media-form').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent normal form submission
    const data = Object.fromEntries(new FormData(this));

    fetch('https://discord.com/api/webhooks/1450995787478597745/vfZztahDBShNL8l8KnKMJAikHJiYPXV_EKcYfP6_EEVUj639ucrOiQo3Cyzi5sJeZV4Q', { // <-- Replace with your webhook
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: null,
            embeds: [{
                title: 'New Media Application',
                color: 10245,
                fields: [
                    { name: 'IGN', value: data.ign },
                    { name: 'Discord', value: data.discord },
                    { name: 'Platform', value: data.platform },
                    { name: 'Channel Link', value: data.channel },
                    { name: 'Subscribers', value: data.subs },
                    { name: 'Content Type', value: data.content },
                    { name: 'Upload Schedule', value: data.schedule },
                    { name: 'Why Promote', value: data.reason }
                ]
            }]
        })
    })
    .then(() => alert('Media application sent!'))
    .catch(err => alert('Error sending application.'));
});
