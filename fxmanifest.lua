fx_version 'cerulean'
game 'gta5'

author 'L3'
description 'Universal boilerplate for FiveM with React & NextJS'
version '1.0.0'

ui_page 'web/out/index.html'
--ui_page 'http://localhost:3000'

files {
    'web/out/**/*.*',
}


client_scripts {
    'client.lua'
}

server_scripts {
    'server.lua'
}
