// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAIkfu45nsz8cDF0PcCyPO8ZkWIe-W2JAo',
    authDomain: 'purpose-project.firebaseapp.com',
    databaseURL: 'https://purpose-project.firebaseio.com',
    projectId: 'purpose-project',
    storageBucket: 'purpose-project.appspot.com',
    messagingSenderId: '526525653343'
  },
  contentful: {
    spaceId: 'jd2nebew5yik',
    token: 'd074e30e58d6ba6b8dbffec233291a540bec1a8e980165ed7c3a538d2ee60700'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
