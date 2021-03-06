// SSR
import { renderToString } from "react-dom/server"
import { App } from "../../client/component"
import React from 'react';
import  fs from 'fs'

module.exports = {
    renderSSRcomponent : (req,res) => {
        var RenderedAppToString = renderToString(<App/>);
        var indexHTMLpage = fs.readFileSync('./public/index.html');
        var indexHTMLpageToString = indexHTMLpage.toString();
        var HTMLWithSSRComponentInIt = indexHTMLpageToString.replace("<!-- __APP__ -->",RenderedAppToString);
        res.send(HTMLWithSSRComponentInIt);
    }
}