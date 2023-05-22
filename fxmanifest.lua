fx_version 'cerulean'
game 'gta5'
lua54 'yes'
use_experimental_fxv2_oal 'yes'

author 'KRS'
version 'V2'

shared_scripts {
  '@es_extended/imports.lua',
  'modules/init.lua',
}

client_scripts {
  'modules/**/client.lua',
  'client.lua',
}

files {
  'nui/index.html',
  'nui/**/*',
  'config.json',
}

ui_page 'nui/index.html'

dependencies {
  'es_extended',
  'esx_status',
  'esx_basicneeds',
}
