#!/bin/bash

echo "***** Running the service on port 5000 ***** "
# gunicorn3 -w 4 -b 0.0.0.0:5003 --timeout 9000 iasis_lc_exploration_service:app

npm run start
python3 ./pyScripts/app.py
