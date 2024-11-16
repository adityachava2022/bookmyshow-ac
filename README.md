# bookmyshow-ac

book my show
environment variables needed:

---

PORT=8000

# get this from the mongodb atlas site

MONGODB_URL=<mongo_connection_url>

# get this from stripe -> developers -> API key -> secret key

STRIPE_KEY=<stripe_secret_key>

# any random string used to sign in the jwt token

SECRET_KEY=<secret_key>

# gmail user to send emails from

GMAIL_USER=<gmail_email>

# gmail_app_password to use to send the emails from

GMAIL_APP_PASSWORD=<gmail_app_password>

# jwt token expiry

JWT_TOKEN_EXPIRY=1d

sample values for environment variables:
PORT=8000
MONGODB_URL=mongodb+srv://adityachava1:TjP4kkFXe6LzJNvw@cluster0bms.6ij8a.mongodb.net/bookmyshow?retryWrites=true&w=majority&appName=cluster0bms
STRIPE_KEY=sk_test_51QClPPGMI6PH9u9vhCtFysJ466FPfApdwjOvwTGG6ehlYcCI8u2ip3Dpuwss5xEomQLzQwZmENJQfMAkTKcnjSBL005dDoV7Kt
SECRET_KEY=bookmyshow
GMAIL_USER=aditya.chava.93@gmail.com
GMAIL_APP_PASSWORD=whaf rygv bdlw aaeg
JWT_TOKEN_EXPIRY=1d
