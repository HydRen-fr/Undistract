function init() {
  browser.browserAction.setIcon({
    path: `/icons/icon.png`
  });
}

// Installation or updating the extension
browser.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install' || details.reason === 'update') {
    browser.storage.local.get('settings').then((store) => {
      if (store.settings === undefined) {
        browser.storage.local.set({
          settings: {
            theme: 'light'
          }
        });
      }
    });
  }
});

init();

