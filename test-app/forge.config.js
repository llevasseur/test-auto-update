require( 'dotenv' ).config();
module.exports = {
  packagerConfig: {
    asar: true,
    osxSign: {
      optionsForFile: ( filePath ) => {
        return {
          entitlements: 'build/entitlements.mac.inherit.plist'
        }
      }
    },
    osxNotarize: {
      tool: 'legacy',
      appleId: process.env.APPLE_ID,
      appleIdPassword: process.env.APPLE_PASSWORD,
      teamId: process.env.APPLE_TEAM_ID,
    }
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-zip'
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        certificateFile: 'build/windowsCert_SW.pfx',
        certificatePassword: process.env.CERTIFICATEPASS,
        setupIcon: 'build/icons/dogicon.ico' 
      },
    }
  ],
};
