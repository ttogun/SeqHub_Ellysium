# eb-flask-react-template

WARNING: Because of an unpatched sercurity vulnerability, it is possible for a malicous user to spoof an authentication token, and convince the web app that they are logged in. This can be mitigated by requiring sensitive content to be retrieved from the flask app, and verifying the token there.

## Requirements

- Node v13.8.0
- Python v3.8.2

## Running
In separate terminals:
```
cd react-flask-app
yarn start-api
```

```
cd react-flask-app
yarn start
```


## Useful Things

For bootstrap components: https://react-bootstrap.github.io/

Fontawesome Icons

```
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
<FontAwesomeIcon icon={faCoffee} />
```

## TODO


Elastic Beanstalk

register link
password reset?
login password sent unencrypted?


