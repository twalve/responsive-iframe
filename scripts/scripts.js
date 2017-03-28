'use strict';

(function(){
    const SVNLV = {
        SOURCE: "svnlv",
        TARGET: null,
        STYLE: `
            .svnlv {
                height: 0;
                overflow: hidden;
                padding-bottom: 56.25%; /* 75% */
                position: relative;
            }
            .svnlv iframe {
                position: absolute;
                top:0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        `,
        create: function () {
            const stage = document.createElement("div");
            const iframe = document.createElement("iframe");
            const style = document.createElement("style");
            const head = document.querySelector("head");
            const target = document.querySelector("#" + SVNLV.TARGET);

            style.type = "text/css";
            stage.classList.add("svnlv");
            iframe.src = "https://7live.com.au/";

            style.appendChild(document.createTextNode(SVNLV.STYLE));
            head.appendChild(style);
            stage.appendChild(iframe);
            target.appendChild(stage);
        },
        getTarget: function () {
            const source = document.querySelector("script#" + SVNLV.SOURCE);
            const target = source.dataset.target;
            SVNLV.TARGET = target;
        },
        init: function () {
            this.getTarget();
            this.create();
        }
    };

    window.SVNLV = SVNLV;
    SVNLV.init();
}());
