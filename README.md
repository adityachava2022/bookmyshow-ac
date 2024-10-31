# bookmyshow-ac

book my show
environment variables needed:

---

PORT=8000

# get this from the mongodb atlas site

MONGODB_URL=<mongo_connection_url>

# get this from stripe -> developers -> API key -> secret key

STRIPE_KEY=<stripe_secret_key>

# any random string to use as salt for storing passwords

SECRET_KEY=<secret_key>

# gmail user to send emails from

GMAIL_USER=<gmail_email>

# gmail_app_password to use to send the emails from

GMAIL_APP_PASSWORD=<gmail_app_password>

sample values:
PORT=8000
MONGODB_URL=mongodb://localhost:27017/bookmyshow
STRIPE_KEY=sk_test_51QClPPGMI6PH9u9vhCtFysJ466FPfApdwjOvwTGG6ehlYcCI8u2ip3Dpuwss5xEomQLzQwZmENJQfMAkTKcnjSBL005dDoV7Kt
SECRET_KEY=bookmyshow
GMAIL_USER=aditya.chava.93@gmail.com
GMAIL_APP_PASSWORD=whaf rygv bdlw aaeg
