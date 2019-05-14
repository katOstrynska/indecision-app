# indecision-app

--DEVELOP--

* Get all node_modules

Get into project folder, run CMD and type:

`yarn install`

* Live convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments using **Babel**

**If we have GLOBALLY installed babel-cli**
Get into project folder, run CMD and type:

`babel {our_babel_script_location} --out-file={our_converted_script_location} --presets=env,react --watch`

**If we have LOCALLY installed babel-cli**
Get into project folder, run CMD and type:

`yarn run build-babel`
(build is commend from package.json)

* Live server run

**If we have GLOBALLY installed live-server**
Get into project folder, run CMD and type:

`live-server {our_project_folder_public}`

**If we have LOCALLY installed live-server**
Get into project folder, run CMD and type:

`yarn run serve`
(serve is commend from package.json)

* Webpack

We don't nedd to rub babel command, bc Webpack run babel for us

Get into project folder, run CMD and type:

`yarn run build`
(build is commend from package.json)

* Webpack server

Get into project folder, run CMD and type:

`yarn run dev-server`




