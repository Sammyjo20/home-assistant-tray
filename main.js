const { app, Tray, Menu, nativeImage, Notification, shell } = require('electron')
const path = require('node:path')
const axios = require('axios')

require('dotenv').config({ path: path.join(__dirname, '.env') })

const api = axios.create({
    baseURL: process.env.HOME_ASSISTANT_BASE_URL,
    headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + process.env.HOME_ASSISTANT_TOKEN,
    }
});

const setupTray = () => {
    const icon = nativeImage.createFromPath(path.join(__dirname, 'trayIcon.png'))

    tray = new Tray(icon)
    tray.setToolTip('I am a useful assistant!')
    tray.setTitle('Home Assistant Helper')

    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Toggle Office Light', 
            type: 'normal', 
            click: () => {
                api.post('/api/services/light/toggle', {
                    entity_id: 'light.office_light'
                });
            }
        },
        // {
        //     label: 'Boost Heating For 15 Minutes', 
        //     type: 'normal', 
        //     click: () => {
        //         api.post('/api/services/script/turn_on', {
        //             entity_id: 'script.boost_heating_for_15_minutes'
        //         });
        //     }
        // },
        // {
        //     label: 'Boost Heating For 30 Minutes', 
        //     type: 'normal', 
        //     click: () => {
        //         api.post('/api/services/script/turn_on', {
        //             entity_id: 'script.boost_heating_for_30_minutes'
        //         });
        //     }
        // },
        { 
            label: 'Exit', 
            type: 'normal', 
            click: () => app.exit()
        },
    ])

    tray.setContextMenu(contextMenu)
};

app.whenReady().then(() => {
    setupTray();
})