const path = require("path");

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        prependData: `
            $primary-background:    #172038;
            $background-content:    #1F2744;
            $primary-color:         #a1d6fa;
            $sm:                    "max-width: 576px";
            $md:                    "max-width: 768px";
            $lg:                    "max-width: 992px";
        `,
    },
};