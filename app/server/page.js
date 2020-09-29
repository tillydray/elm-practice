export default {
  index: `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Conduit</title>
        
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
            <link rel="manifest" href="/site.webmanifest">
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5">
            <meta name="msapplication-TileColor" content="#da532c">
            <meta name="theme-color" content="#ffffff">
        
            <!-- Import Ionicon icons & Google Fonts our Bootstrap theme relies on -->
            <link href="//code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
            <link href="//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">
            <!-- Import the custom Bootstrap 4 theme from our hosted CDN -->
            <link rel="stylesheet" href="//demo.productionready.io/main.css">
            <link rel="stylesheet" href="styles.css">
        
            <script src="app.js"></script>
        </head>
        <body>
            <script>
            var storageKey = "store";
            var flags = localStorage.getItem(storageKey);
            var app = Elm.Main.init({flags: flags});
        
            app.ports.storeCache.subscribe(function(val) {
        
                if (val === null) {
                localStorage.removeItem(storageKey);
                } else {
                localStorage.setItem(storageKey, JSON.stringify(val));
                }
        
                // Report that the new session was stored successfully.
                setTimeout(function() { app.ports.onStoreChange.send(val); }, 0);
            });
        
            // Whenever localStorage changes in another tab, report it if necessary.
            window.addEventListener("storage", function(event) {
                if (event.storageArea === localStorage && event.key === storageKey) {
                app.ports.onStoreChange.send(event.newValue);
                }
            }, false);
            </script>
        </body>
        </html>
        `,
};
