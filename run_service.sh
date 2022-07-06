#!/bin/bash

echo "***** Running the service on port 4200 ***** "
# gunicorn3 -w 4 -b 0.0.0.0:5003 --timeout 9000 iasis_lc_exploration_service:app
cd ./app/
#ng serve --host 0.0.0.0 --port 5500
npm run start
python3 ../pyScripts/app.py
